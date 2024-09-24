// import { Avatar, Box, Card, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

// const StudentProfile = () => {
//   const { currentUser, response, error } = useSelector((state) => state.user);

//   if (response) { console.log(response) }
//   else if (error) { console.log(error) }

//   const sclassName = currentUser.sclassName
//   const studentSchool = currentUser.school

//   return (
//     <>
//       <Container maxWidth="md">
//         <StyledPaper elevation={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
//                   {String(currentUser.name).charAt(0)}
//                 </Avatar>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="h5" component="h2" textAlign="center">
//                   {currentUser.name}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   Student Roll No: {currentUser.rollNum}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   Class: {sclassName.sclassName}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   School: {studentSchool.schoolName}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </StyledPaper>
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Personal Information
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Date of Birth:</strong> January 1, 2000
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Gender:</strong> Male
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Email:</strong> john.doe@example.com
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Phone:</strong> (123) 456-7890
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Address:</strong> 123 Main Street, City, Country
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Emergency Contact:</strong> (987) 654-3210
//                 </Typography>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Container>
//     </>
//   )
// }

// export default StudentProfile

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   margin-bottom: 20px;
// `;






import { Avatar, Box, Card, Container, Grid, Paper, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: currentUser.name,
    rollNum: currentUser.rollNum,
    sclassName: currentUser.sclassName.sclassName,
    schoolName: currentUser.school.schoolName,
    dob: currentUser.dob,
    gender: "",
    email: "",
    phone: currentUser.phoneNumber,
    address: currentUser.address,
    emergencyContact: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveChanges = () => {
    console.log('Updated User Data:', userData);
    setEditMode(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
                  {String(currentUser.name).charAt(0)}
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h5" component="h2" textAlign="center">
                  {currentUser.name}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" mt={2}>
                <QRCodeCanvas value={currentUser._id} size={150} />
              </Box>
            </Grid>


            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Student Roll No: {currentUser.rollNum}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Class: {userData.sclassName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  School: {userData.schoolName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Home Address: {currentUser.address}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Phone Number: {currentUser.phoneNumber}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Guardian: {currentUser.guardianName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p">
                  Emergency Number: {currentUser.guardianPhone}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Card>
          {/* Add more details and personal information here */}
        </Card>
      </Container>
    </>
  );
};

export default StudentProfile;










// import { Box } from '@mui/material';
// import { QRCodeCanvas } from 'qrcode.react';
// import React from 'react';
// import { useSelector } from 'react-redux';

// const StudentProfile = () => {
//   const { currentUser } = useSelector((state) => state.user);

//   return (
//     <>
//       <Box display="flex" justifyContent="center" mt={2}>
//         <QRCodeCanvas  value={currentUser._id} size={150} />
//       </Box>
//     </>
//   );
// };

// export default StudentProfile;
