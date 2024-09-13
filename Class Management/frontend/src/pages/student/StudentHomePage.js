import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';
import CustomPieChart from '../../components/CustomPieChart';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import styled from 'styled-components';
import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import Subject from "../../assets/subjects.svg";
import Assignment from "../../assets/assignment.svg";
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';
import BottomRightImage from "../../assets/img5.gif";
import Teachers from "../../assets/img6.gif"; // Reusing the Teachers image for the bottom-left corner

const StudentHomePage = () => {
    const dispatch = useDispatch();

    const { userDetails, currentUser, loading, response } = useSelector((state) => state.user);
    const { subjectsList } = useSelector((state) => state.sclass);

    const [subjectAttendance, setSubjectAttendance] = useState([]);

    const classID = currentUser.sclassName._id;

    useEffect(() => {
        dispatch(getUserDetails(currentUser._id, "Student"));
        dispatch(getSubjectList(classID, "ClassSubjects"));
    }, [dispatch, currentUser._id, classID]);

    const numberOfSubjects = subjectsList && subjectsList.length;

    useEffect(() => {
        if (userDetails) {
            setSubjectAttendance(userDetails.attendance || []);
        }
    }, [userDetails]);

    const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
    const overallAbsentPercentage = 100 - overallAttendancePercentage;

    const chartData = [
        { name: 'Present', value: overallAttendancePercentage },
        { name: 'Absent', value: overallAbsentPercentage }
    ];

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, position: 'relative', minHeight: '100vh' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Subject} alt="Subjects" />
                            <Title>
                                Total Subjects
                            </Title>
                            <Data start={0} end={numberOfSubjects} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Assignment} alt="Assignments" />
                            <Title>
                                Total Assignments
                            </Title>
                            <Data start={0} end={15} duration={4} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <ChartContainer>
                            {response ? (
                                <Typography variant="h6">No Attendance Found</Typography>
                            ) : (
                                <>
                                    {loading ? (
                                        <Typography variant="h6">Loading...</Typography>
                                    ) : (
                                        subjectAttendance && Array.isArray(subjectAttendance) && subjectAttendance.length > 0 ? (
                                            <CustomPieChart data={chartData} />
                                        ) : (
                                            <Typography variant="h6">No Attendance Found</Typography>
                                        )
                                    )}
                                </>
                            )}
                        </ChartContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Bottom Right Image */}
                <BottomRightImageWrapper>
                    <BottomRightImageStyled src={BottomRightImage} alt="Bottom Right" />
                </BottomRightImageWrapper>

                {/* Bottom Left Image */}
                <BottomLeftImageWrapper>
                    <BottomLeftImageStyled src={Teachers} alt="Bottom Left" />
                </BottomLeftImageWrapper>
            </Container>
        </>
    );
};

// Styled Components
const ChartContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

// Bottom-Right Image Styling
const BottomRightImageWrapper = styled.div`
  position: fixed;
  bottom: -10px;
  right: -120px;
  z-index: 1;
`;

const BottomRightImageStyled = styled.img`
  width: 460px;
  height: auto;
`;

// Bottom-Left Image Styling
const BottomLeftImageWrapper = styled.div`
  position: fixed;
  bottom: -10px;
  left: -60px;
  z-index: 1;
`;

const BottomLeftImageStyled = styled.img`
  width: 460px;
  height: auto;
`;

export default StudentHomePage;
