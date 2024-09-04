// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Grid,
//   Paper,
//   Box,
//   Container,
//   CircularProgress,
//   Backdrop,
// } from '@mui/material';
// import { AccountCircle, School, Group } from '@mui/icons-material';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/userRelated/userHandle';
// import Popup from '../components/Popup';

// const ChooseUser = ({ visitor }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const password = "zxc"

//   const { status, currentUser, currentRole } = useSelector(state => state.user);;

//   const [loader, setLoader] = useState(false)
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");

//   const navigateHandler = (user) => {
//     if (user === "Admin") {
//       if (visitor === "guest") {
//         const email = "yogendra@12"
//         const fields = { email, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Adminlogin');
//       }
//     }

//     else if (user === "Student") {
//       if (visitor === "guest") {
//         const rollNum = "1"
//         const studentName = "Dipesh Awasthi"
//         const fields = { rollNum, studentName, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Studentlogin');
//       }
//     }

//     else if (user === "Teacher") {
//       if (visitor === "guest") {
//         const email = "tony@12"
//         const fields = { email, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Teacherlogin');
//       }
//     }
//   }

//   useEffect(() => {
//     if (status === 'success' || currentUser !== null) {
//       if (currentRole === 'Admin') {
//         navigate('/Admin/dashboard');
//       }
//       else if (currentRole === 'Student') {
//         navigate('/Student/dashboard');
//       } else if (currentRole === 'Teacher') {
//         navigate('/Teacher/dashboard');
//       }
//     }
//     else if (status === 'error') {
//       setLoader(false)
//       setMessage("Network Error")
//       setShowPopup(true)
//     }
//   }, [status, currentRole, navigate, currentUser]);

//   return (
//     <StyledContainer>
//       <Container>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <div onClick={() => navigateHandler("Admin")}>
//               <StyledPaper elevation={3}>
//                 <Box mb={2}>
//                   <AccountCircle fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Admin
//                 </StyledTypography>
//                 Login as an administrator to access the dashboard to manage app data.
//               </StyledPaper>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <StyledPaper elevation={3}>
//               <div onClick={() => navigateHandler("Student")}>
//                 <Box mb={2}>
//                   <School fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Student
//                 </StyledTypography>
//                 Login as a student to explore course materials and assignments.
//               </div>
//             </StyledPaper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <StyledPaper elevation={3}>
//               <div onClick={() => navigateHandler("Teacher")}>
//                 <Box mb={2}>
//                   <Group fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Teacher
//                 </StyledTypography>
//                 Login as a teacher to create courses, assignments, and track student progress.
//               </div>
//             </StyledPaper>
//           </Grid>
//         </Grid>
//       </Container>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loader}
//       >
//         <CircularProgress color="inherit" />
//         Please Wait
//       </Backdrop>
//       <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//     </StyledContainer>
//   );
// };

// export default ChooseUser;

// const StyledContainer = styled.div`
//   background: linear-gradient(to bottom, #411d70, #19118b);
//   height: 120vh;
//   display: flex;
//   justify-content: center;
//   padding: 2rem;
// `;

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   text-align: center;
//   background-color: #1f1f38;
//   color:rgba(255, 255, 255, 0.6);
//   cursor:pointer;

//   &:hover {
//     background-color: #2c2c6c;
//     color:white;
//   }
// `;

// const StyledTypography = styled.h2`
//   margin-bottom: 10px;
// `;

import { AccountCircle, Group, School } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Popup from '../components/Popup';
import { loginUser } from '../redux/userRelated/userHandle';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector(state => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1";
        const studentName = "Dipesh Awasthi";
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Admin")} elevation={6}>
              <IconWrapper>
                <AccountCircle fontSize="large" />
              </IconWrapper>
              <StyledTypography>
                Admin
              </StyledTypography>
              Login as an administrator to access the dashboard to manage app data.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Student")} elevation={6}>
              <IconWrapper>
                <School fontSize="large" />
              </IconWrapper>
              <StyledTypography>
                Student
              </StyledTypography>
              Login as a student to explore course materials and assignments.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Teacher")} elevation={6}>
              <IconWrapper>
                <Group fontSize="large" />
              </IconWrapper>
              <StyledTypography>
                Teacher
              </StyledTypography>
              Login as a teacher to create courses, assignments, and track student progress.
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

// Gradient animation for background
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Card entrance animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Hover effect with parallax
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 20px 30px rgba(255, 255, 255, 0.6);
  }
`;

const StyledContainer = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.85);
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  border-radius: 15px;
  animation: ${fadeInUp} 1.5s ease-out;

  &:hover {
    animation: ${hoverEffect} 0.5s forwards ease-in-out;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 15px;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

// Wrapper for the icon with subtle animation
const IconWrapper = styled(Box)`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: blue;
  transition: transform 0.3s ease-in-out;
  animation: ${fadeInUp} 1.7s ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;
