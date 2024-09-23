// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
// import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';
// import { getUserDetails } from '../../../redux/userRelated/userHandle';

// import {
//   Box,
//   CircularProgress, FormControl,
//   InputLabel,
//   MenuItem, Select,
//   Stack,
//   TextField,
//   Typography
// } from '@mui/material';
// import { PurpleButton } from '../../../components/buttonStyles';
// import Popup from '../../../components/Popup';

// const StudentAttendance = ({ situation }) => {
//     const dispatch = useDispatch();
//     const { currentUser, userDetails, loading } = useSelector((state) => state.user);
//     const { subjectsList } = useSelector((state) => state.sclass);
//     const { response, error, statestatus } = useSelector((state) => state.student);
//     const params = useParams()

//     const [studentID, setStudentID] = useState("");
//     const [subjectName, setSubjectName] = useState("");
//     const [chosenSubName, setChosenSubName] = useState("");
//     const [status, setStatus] = useState('');
//     const [date, setDate] = useState('');

//     const [showPopup, setShowPopup] = useState(false);
//     const [message, setMessage] = useState("");
//     const [loader, setLoader] = useState(false)

//     useEffect(() => {
//         if (situation === "Student") {
//             setStudentID(params.id);
//             const stdID = params.id
//             dispatch(getUserDetails(stdID, "Student"));
//         }
//         else if (situation === "Subject") {
//             const { studentID, subjectID } = params
//             setStudentID(studentID);
//             dispatch(getUserDetails(studentID, "Student"));
//             setChosenSubName(subjectID);
//         }
//     }, [situation]);

//     useEffect(() => {
//         if (userDetails && userDetails.sclassName && situation === "Student") {
//             dispatch(getSubjectList(userDetails.sclassName._id, "ClassSubjects"));
//         }
//     }, [dispatch, userDetails]);

//     const changeHandler = (event) => {
//         const selectedSubject = subjectsList.find(
//             (subject) => subject.subName === event.target.value
//         );
//         setSubjectName(selectedSubject.subName);
//         setChosenSubName(selectedSubject._id);
//     }

//     const fields = { subName: chosenSubName, status, date }

//     const submitHandler = (event) => {
//         event.preventDefault()
//         setLoader(true)
//         dispatch(updateStudentFields(studentID, fields, "StudentAttendance"))
//     }

//     useEffect(() => {
//         if (response) {
//             setLoader(false)
//             setShowPopup(true)
//             setMessage(response)
//         }
//         else if (error) {
//             setLoader(false)
//             setShowPopup(true)
//             setMessage("error")
//         }
//         else if (statestatus === "added") {
//             setLoader(false)
//             setShowPopup(true)
//             setMessage("Done Successfully")
//         }
//     }, [response, statestatus, error])

//     return (
//         <>
//             {loading
//                 ?
//                 <>
//                     <div>Loading...</div>
//                 </>
//                 :
//                 <>
//                     <Box
//                         sx={{
//                             flex: '1 1 auto',
//                             alignItems: 'center',
//                             display: 'flex',
//                             justifyContent: 'center'
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 maxWidth: 550,
//                                 px: 3,
//                                 py: '100px',
//                                 width: '100%'
//                             }}
//                         >
//                             <Stack spacing={1} sx={{ mb: 3 }}>
//                                 <Typography variant="h4">
//                                     Student Name: {userDetails.name}
//                                 </Typography>
//                                 {currentUser.teachSubject &&
//                                     <Typography variant="h4">
//                                         Subject Name: {currentUser.teachSubject?.subName}
//                                     </Typography>
//                                 }
//                             </Stack>
//                             <form onSubmit={submitHandler}>
//                                 <Stack spacing={3}>
//                                     {
//                                         situation === "Student" &&
//                                         <FormControl fullWidth>
//                                             <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
//                                             <Select
//                                                 labelId="demo-simple-select-label"
//                                                 id="demo-simple-select"
//                                                 value={subjectName}
//                                                 label="Choose an option"
//                                                 onChange={changeHandler} required
//                                             >
//                                                 {subjectsList ?
//                                                     subjectsList.map((subject, index) => (
//                                                         <MenuItem key={index} value={subject.subName}>
//                                                             {subject.subName}
//                                                         </MenuItem>
//                                                     ))
//                                                     :
//                                                     <MenuItem value="Select Subject">
//                                                         Add Subjects For Attendance
//                                                     </MenuItem>
//                                                 }
//                                             </Select>
//                                         </FormControl>
//                                     }
//                                     <FormControl fullWidth>
//                                         <InputLabel id="demo-simple-select-label">Attendance Status</InputLabel>
//                                         <Select
//                                             labelId="demo-simple-select-label"
//                                             id="demo-simple-select"
//                                             value={status}
//                                             label="Choose an option"
//                                             onChange={(event) => setStatus(event.target.value)}
//                                             required
//                                         >
//                                             <MenuItem value="Present">Present</MenuItem>
//                                             <MenuItem value="Absent">Absent</MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                     <FormControl>
//                                         <TextField
//                                             label="Select Date"
//                                             type="date"
//                                             value={date}
//                                             onChange={(event) => setDate(event.target.value)} required
//                                             InputLabelProps={{
//                                                 shrink: true,
//                                             }}
//                                         />
//                                     </FormControl>
//                                 </Stack>

//                                 <PurpleButton
//                                     fullWidth
//                                     size="large"
//                                     sx={{ mt: 3 }}
//                                     variant="contained"
//                                     type="submit"
//                                     disabled={loader}
//                                 >
//                                     {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
//                                 </PurpleButton>
//                             </form>
//                         </Box>
//                     </Box>
//                     <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//                 </>
//             }
//         </>
//     )
// }

// export default StudentAttendance







// import { Box, CircularProgress, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
// import { useDispatch } from 'react-redux';
// import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';

// const AdminAttendance = () => {
//   const dispatch = useDispatch();
//   const [scanResult, setScanResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setScanResult(data); // this will be the student ID
//       const fields = { status: 'Present', date: new Date().toISOString().split('T')[0] };
//       dispatch(updateStudentFields(data, fields, 'StudentAttendance'));
//       setErrorMessage('');
//       setLoading(false);
//     }
//   };

//   const handleError = (err) => {
//     setLoading(false);
//     setErrorMessage('Error scanning QR code. Please try again.');
//     console.error(err);
//   };

//   return (
//     <Box p={3} textAlign="center">
//       <Typography variant="h4" gutterBottom>
//         Scan QR Code for Attendance
//       </Typography>
//       <Box 
//         display="flex" 
//         justifyContent="center" 
//         alignItems="center" 
//         flexDirection="column"
//         border="2px dashed #3f51b5" 
//         borderRadius="8px" 
//         p={2} 
//         mb={2} 
//         width={{ xs: '90%', sm: '60%', md: '40%' }}
//         mx="auto"
//       >
//         {/* Add a scanning area with proper feedback */}
//         {loading && (
//           <Box mb={2}>
//             <CircularProgress color="primary" />
//             <Typography variant="body1" color="textSecondary">Scanning...</Typography>
//           </Box>
//         )}

//         {/* Camera Preview with fixed aspect ratio */}
//         <QrReader
//           onResult={(result, error) => {
//             if (!!result) {
//               handleScan(result?.text); // Handle scan result
//             }
//             if (!!error) {
//               handleError(error);
//             }
//           }}
//           constraints={{ facingMode: 'environment' }} // Using environment camera for scanning
//           videoStyle={{ width: '100%', height: 'auto' }} // Adjust to ensure video occupies full width
//           containerStyle={{ width: '100%', paddingTop: '100%', position: 'relative' }} // Keeps a square scanning area
//           videoContainerStyle={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Ensures full video render
//         />
//       </Box>

//       {scanResult && (
//         <Typography variant="h6" color="green" gutterBottom>
//           Attendance marked for student ID: {scanResult}
//         </Typography>
//       )}

//       {errorMessage && (
//         <Typography variant="body1" color="error">
//           {errorMessage}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default AdminAttendance;











import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useDispatch } from 'react-redux';
import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';

const AdminAttendance = () => {
  const dispatch = useDispatch();
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data); 
      setErrorMessage('');
      setLoading(false);
    }
  };

  const handleError = (err) => {
    setLoading(false);
    setErrorMessage('Error scanning QR code. Please try again.');
    console.error(err);
  };

  const handleAddAttendance = () => {
    if (scanResult) {
      const fields = {
        status: 'Present',
        date: new Date().toISOString().split('T')[0],
        subName: '66ea5e81b24be989d9a79591', 
      };
      dispatch(updateStudentFields(scanResult, fields, 'StudentAttendance'));
      setErrorMessage('');
      setScanResult(null); 
    }
  };

  return (
    <Box p={3} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Scan QR Code for Attendance
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        border="2px dashed #3f51b5"
        borderRadius="8px"
        p={2}
        mb={2}
        width={{ xs: '90%', sm: '60%', md: '40%' }}
        mx="auto"
      >
        {/* Add a scanning area with proper feedback */}
        {loading && (
          <Box mb={2}>
            <CircularProgress color="primary" />
            <Typography variant="body1" color="textSecondary">
              Scanning...
            </Typography>
          </Box>
        )}

        {/* Camera Preview with fixed aspect ratio */}
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result?.text); // Handle scan result
            }
            if (!!error) {
              handleError(error);
            }
          }}
          constraints={{ facingMode: 'environment' }} 
          videoStyle={{ width: '100%', height: 'auto' }} 
          containerStyle={{ width: '100%', paddingTop: '100%', position: 'relative' }} 
          videoContainerStyle={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </Box>

      {scanResult && (
        <>
          <Typography variant="h6" color="green" gutterBottom>
            Student ID: {scanResult}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddAttendance}
            sx={{ mt: 2 }}
          >
            Add Attendance
          </Button>
        </>
      )}

      {errorMessage && (
        <Typography variant="body1" color="error">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default AdminAttendance;
