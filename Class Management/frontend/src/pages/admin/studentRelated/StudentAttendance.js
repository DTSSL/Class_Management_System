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






/*********************************this is a QR Scan code with Subject********************************************/



// import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { QrReader } from 'react-qr-reader';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
// import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';

// const AdminAttendance = ({ studentID }) => {
//   const dispatch = useDispatch();
//   const { subjectsList } = useSelector((state) => state.sclass);
//   const [scanResult, setScanResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [subjectName, setSubjectName] = useState('');
//   const [chosenSubName, setChosenSubName] = useState('');

//   useEffect(() => {
//     // Assuming the class or some identifier is available to fetch subjects
//     dispatch(getSubjectList("classOrRelevantIdentifier", "ClassSubjects"));
//   }, [dispatch]);

//   const handleScan = (data) => {
//     if (data) {
//       setScanResult(data); // Capture the student ID from the QR code
//       setErrorMessage('');
//       setLoading(false);
//     }
//   };

//   const handleError = (err) => {
//     setLoading(false);
//     setErrorMessage('Error scanning QR code. Please try again.');
//     console.error(err);
//   };

//   const handleAddAttendance = () => {
//     if (scanResult && chosenSubName) {
//       const fields = {
//         status: 'Present',
//         date: new Date().toISOString().split('T')[0],
//         subName: chosenSubName, // Subject chosen manually
//       };
//       dispatch(updateStudentFields(scanResult, fields, 'StudentAttendance'));
//       setErrorMessage('');
//       setScanResult(null);
//     } else {
//       setErrorMessage('Please select a subject before scanning the QR code.');
//     }
//   };

//   const handleSubjectChange = (event) => {
//     const selectedSubject = subjectsList.find(
//       (subject) => subject.subName === event.target.value
//     );
//     setSubjectName(selectedSubject.subName);
//     setChosenSubName(selectedSubject._id);
//   };

//   return (
//     <Box p={3} textAlign="center">
//       <Typography variant="h4" gutterBottom>
//         Select Subject and Scan QR Code for Attendance
//       </Typography>

//       <FormControl fullWidth sx={{ mb: 3 }}>
//         <InputLabel id="subject-select-label">Select Subject</InputLabel>
//         <Select
//           labelId="subject-select-label"
//           id="subject-select"
//           value={subjectName}
//           label="Choose an option"
//           onChange={handleSubjectChange}
//           required
//         >
//           {subjectsList ? (
//             subjectsList.map((subject, index) => (
//               <MenuItem key={index} value={subject.subName}>
//                 {subject.subName}
//               </MenuItem>
//             ))
//           ) : (
//             <MenuItem value="Select Subject">Add Subjects For Attendance</MenuItem>
//           )}
//         </Select>
//       </FormControl>

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
//             <Typography variant="body1" color="textSecondary">
//               Scanning...
//             </Typography>
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
//           constraints={{ facingMode: 'environment' }} 
//           videoStyle={{ width: '100%', height: 'auto' }} 
//           containerStyle={{ width: '100%', paddingTop: '100%', position: 'relative' }} 
//           videoContainerStyle={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//         />
//       </Box>

//       {scanResult && (
//         <>
//           <Typography variant="h6" color="green" gutterBottom>
//             Student ID: {scanResult}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddAttendance}
//             sx={{ mt: 2 }}
//           >
//             Add Attendance
//           </Button>
//         </>
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





import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
import { updateStudentFields } from '../../../redux/studentRelated/studentHandle';

const AdminAttendance = () => {
  const dispatch = useDispatch();
  const { subjectsList } = useSelector((state) => state.sclass);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [chosenSubName, setChosenSubName] = useState('');
  const [date, setDate] = useState(''); // Date state for manual selection

  useEffect(() => {
    // Fetch the subjects list based on class or identifier
    dispatch(getSubjectList("classOrRelevantIdentifier", "ClassSubjects"));
  }, [dispatch]);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data); // Capture student ID from the QR code
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
    if (scanResult && chosenSubName && date) {
      const fields = {
        status: 'Present',
        date, // Use the manually selected date
        subName: chosenSubName, // Selected subject name
      };
      dispatch(updateStudentFields(scanResult, fields, 'StudentAttendance'));
      setErrorMessage('');
      setScanResult(null);
    } else {
      setErrorMessage('Please select a subject, date, and scan the QR code.');
    }
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = subjectsList.find(
      (subject) => subject.subName === event.target.value
    );
    setSubjectName(selectedSubject.subName);
    setChosenSubName(selectedSubject._id);
  };

  return (
    <Box p={3} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Select Subject, Date, and Scan QR Code for Attendance
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="subject-select-label">Select Subject</InputLabel>
        <Select
          labelId="subject-select-label"
          id="subject-select"
          value={subjectName}
          label="Choose an option"
          onChange={handleSubjectChange}
          required
        >
          {subjectsList ? (
            subjectsList.map((subject, index) => (
              <MenuItem key={index} value={subject.subName}>
                {subject.subName}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="Select Subject">Add Subjects For Attendance</MenuItem>
          )}
        </Select>
      </FormControl>

      {/* Date Picker for Manual Date Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          label="Select Date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)} 
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>

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
        {/* QR Scanner */}
        {loading && (
          <Box mb={2}>
            <CircularProgress color="primary" />
            <Typography variant="body1" color="textSecondary">
              Scanning...
            </Typography>
          </Box>
        )}

        {/* QR Reader Component */}
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
