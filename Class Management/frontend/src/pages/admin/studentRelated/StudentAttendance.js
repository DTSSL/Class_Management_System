import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';
import { getUserDetails } from '../../../redux/userRelated/userHandle';

import {
  Box,
  CircularProgress, FormControl,
  InputLabel,
  MenuItem, Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { PurpleButton } from '../../../components/buttonStyles';
import Popup from '../../../components/Popup';

const StudentAttendance = ({ situation }) => {
    const dispatch = useDispatch();
    const { currentUser, userDetails, loading } = useSelector((state) => state.user);
    const { subjectsList } = useSelector((state) => state.sclass);
    const { response, error, statestatus } = useSelector((state) => state.student);
    const params = useParams()

    const [studentID, setStudentID] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [chosenSubName, setChosenSubName] = useState("");
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (situation === "Student") {
            setStudentID(params.id);
            const stdID = params.id
            dispatch(getUserDetails(stdID, "Student"));
        }
        else if (situation === "Subject") {
            const { studentID, subjectID } = params
            setStudentID(studentID);
            dispatch(getUserDetails(studentID, "Student"));
            setChosenSubName(subjectID);
        }
    }, [situation]);

    useEffect(() => {
        if (userDetails && userDetails.sclassName && situation === "Student") {
            dispatch(getSubjectList(userDetails.sclassName._id, "ClassSubjects"));
        }
    }, [dispatch, userDetails]);

    const changeHandler = (event) => {
        const selectedSubject = subjectsList.find(
            (subject) => subject.subName === event.target.value
        );
        setSubjectName(selectedSubject.subName);
        setChosenSubName(selectedSubject._id);
    }

    const fields = { subName: chosenSubName, status, date }

    const submitHandler = (event) => {
        event.preventDefault()
        setLoader(true)
        dispatch(updateStudentFields(studentID, fields, "StudentAttendance"))
    }

    useEffect(() => {
        if (response) {
            setLoader(false)
            setShowPopup(true)
            setMessage(response)
        }
        else if (error) {
            setLoader(false)
            setShowPopup(true)
            setMessage("error")
        }
        else if (statestatus === "added") {
            setLoader(false)
            setShowPopup(true)
            setMessage("Done Successfully")
        }
    }, [response, statestatus, error])

    return (
        <>
            {loading
                ?
                <>
                    <div>Loading...</div>
                </>
                :
                <>
                    <Box
                        sx={{
                            flex: '1 1 auto',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: 550,
                                px: 3,
                                py: '100px',
                                width: '100%'
                            }}
                        >
                            <Stack spacing={1} sx={{ mb: 3 }}>
                                <Typography variant="h4">
                                    Student Name: {userDetails.name}
                                </Typography>
                                {currentUser.teachSubject &&
                                    <Typography variant="h4">
                                        Subject Name: {currentUser.teachSubject?.subName}
                                    </Typography>
                                }
                            </Stack>
                            <form onSubmit={submitHandler}>
                                <Stack spacing={3}>
                                    {
                                        situation === "Student" &&
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={subjectName}
                                                label="Choose an option"
                                                onChange={changeHandler} required
                                            >
                                                {subjectsList ?
                                                    subjectsList.map((subject, index) => (
                                                        <MenuItem key={index} value={subject.subName}>
                                                            {subject.subName}
                                                        </MenuItem>
                                                    ))
                                                    :
                                                    <MenuItem value="Select Subject">
                                                        Add Subjects For Attendance
                                                    </MenuItem>
                                                }
                                            </Select>
                                        </FormControl>
                                    }
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Attendance Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={status}
                                            label="Choose an option"
                                            onChange={(event) => setStatus(event.target.value)}
                                            required
                                        >
                                            <MenuItem value="Present">Present</MenuItem>
                                            <MenuItem value="Absent">Absent</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            label="Select Date"
                                            type="date"
                                            value={date}
                                            onChange={(event) => setDate(event.target.value)} required
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl>
                                </Stack>

                                <PurpleButton
                                    fullWidth
                                    size="large"
                                    sx={{ mt: 3 }}
                                    variant="contained"
                                    type="submit"
                                    disabled={loader}
                                >
                                    {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
                                </PurpleButton>
                            </form>
                        </Box>
                    </Box>
                    <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
                </>
            }
        </>
    )
}

export default StudentAttendance









// import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import QRCodeScanner from 'react-qr-reader';
// import { useDispatch, useSelector } from 'react-redux';
// import { PurpleButton } from '../../../components/buttonStyles';
// import Popup from '../../../components/Popup';
// import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';


// const StudentAttendance = () => {
//   const dispatch = useDispatch();
//   const { subjectsList } = useSelector((state) => state.sclass);
//   const { response, error, statestatus } = useSelector((state) => state.student);

//   const [scannedData, setScannedData] = useState(null);
//   const [status, setStatus] = useState('');
//   const [date, setDate] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");
//   const [loader, setLoader] = useState(false);


//   const handleScan = (data) => {
//     if (data) {
//       const studentData = JSON.parse(data);
//       setScannedData(studentData);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (scannedData) {
//       const fields = { subName: scannedData.sclassName, status, date };
//       setLoader(true);
//       dispatch(updateStudentFields(scannedData.rollNum, fields, "StudentAttendance"));
//     }
//   };

//   useEffect(() => {
//     if (response || error || statestatus === "added") {
//       setLoader(false);
//       setShowPopup(true);
//       setMessage(response || "Error occurred" || "Successfully added");
//     }
//   }, [response, error, statestatus]);

//   return (
//     <>
//       <Box
//         sx={{
//           flex: '1 1 auto',
//           alignItems: 'center',
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: 550,
//             px: 3,
//             py: '100px',
//             width: '100%',
//           }}
//         >
//           <Stack spacing={1} sx={{ mb: 3 }}>
//             <Typography variant="h4">Scan Student QR Code</Typography>
//           </Stack>

//           {/* QR Code Scanner */}
//           <QRCodeScanner
//             delay={300}
//             onError={handleError}
//             onScan={handleScan}
//             style={{ width: '100%' }}
//           />

//           {scannedData && (
//             <Stack spacing={3} mt={3}>
//               <Typography variant="h6">Student Name: {scannedData.name}</Typography>
//               <Typography variant="h6">Class: {scannedData.sclassName}</Typography>
//               <FormControl fullWidth>
//                 <InputLabel id="status-label">Attendance Status</InputLabel>
//                 <Select
//                   labelId="status-label"
//                   id="status-select"
//                   value={status}
//                   label="Status"
//                   onChange={(event) => setStatus(event.target.value)}
//                 >
//                   <MenuItem value="Present">Present</MenuItem>
//                   <MenuItem value="Absent">Absent</MenuItem>
//                 </Select>
//               </FormControl>

//               <FormControl>
//                 <TextField
//                   label="Select Date"
//                   type="date"
//                   value={date}
//                   onChange={(event) => setDate(event.target.value)}
//                   required
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//               </FormControl>

//               <PurpleButton
//                 fullWidth
//                 size="large"
//                 sx={{ mt: 3 }}
//                 variant="contained"
//                 onClick={submitHandler}
//                 disabled={loader}
//               >
//                 {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
//               </PurpleButton>
//             </Stack>
//           )}
//         </Box>
//       </Box>

//       <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//     </>
//   );
// };

// export default StudentAttendance;








// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import Popup from 'your-popup-component-path';




// const StudentAttendance = ({ situation }) => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { userDetails, loading } = useSelector((state) => state.user);
//   const { subjectsList } = useSelector((state) => state.sclass);
//   const params = useParams();

//   const [status, setStatus] = useState('');
//   const [date, setDate] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleScan = (data) => {
//     if (data) {
      
//       const studentID = extractStudentIDFromURL(data);
      
//       history.push(`/student-dashboard/${studentID}`);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <Box>
//           <Typography variant="h4">Student Attendance</Typography>

//           {/* QR Reader to Scan Student's QR Code */}
//           <QrReader
//             onResult={(result, error) => {
//               if (result) {
//                 handleScan(result?.text);
//               } else if (error) {
//                 handleError(error);
//               }
//             }}
//             style={{ width: '100%' }}
//           />

//           {/* Your existing form logic here */}
//           <form onSubmit={submitHandler}>
//             {/* Attendance Form */}
//           </form>
//         </Box>
//       )}

//       <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//     </>
//   );
// };

// export default StudentAttendance;
