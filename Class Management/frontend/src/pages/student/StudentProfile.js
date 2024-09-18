// import React from 'react'
// import styled from 'styled-components';
// import { Card, CardContent, Typography, Grid, Box, Avatar, Container, Paper } from '@mui/material';
// import { useSelector } from 'react-redux';

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
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
    // You can implement the save logic here (e.g., sending data to the server)
    setEditMode(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <StyledPaper elevation={3}>
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
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Student Roll No: {currentUser.rollNum}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Class: {userData.sclassName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  School: {userData.schoolName}
                </Typography>
                
              </Box>
              </Grid>
              <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Home Address: {currentUser.address}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Phone Number: {currentUser.phoneNumber}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} >
            <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Guardian: {currentUser.guardianName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} >
            <Box display="flex" justifyContent="left">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Emergency Number: {currentUser.guardianPhone}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          
        </StyledPaper>
        <Card>
          {/* <CardContent>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Date of Birth:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="dob"
                      id="dob"
                      type='date'
                      value={userData.dob}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  ) : (
                    userData.dob
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Gender:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="gender"
                      required id='gender'
                      type='gender'
                      value={userData.gender}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      
                    />
                  ) : (
                    userData.gender
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Email:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="email"
                      placeholder='Enter Email Address'
                      type='email'
                      value={userData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    userData.email
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Phone:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="phone"
                      placeholder='Enter Phone Number'
                      value={userData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    userData.phone
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Address:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="address"
                      placeholder='Enter Home Address'
                      value={userData.address}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    userData.address
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Emergency Contact:</strong>
                  {editMode ? (
                    <TextField
                      fullWidth
                      name="emergencyContact"
                      placeholder='Enter Number'
                      value={userData.emergencyContact}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    userData.emergencyContact
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="flex-end">
              {editMode ? (
                <>
                  <Button variant="contained" color="primary" onClick={saveChanges}>
                    Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={toggleEditMode} sx={{ ml: 2 }}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button variant="contained" color="primary" onClick={toggleEditMode}>
                  Edit
                </Button>
              )}
            </Box>
          </CardContent> */}
        </Card>
      </Container>
    </>
  );
};

export default StudentProfile;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
  width: 90%;
  
`;
