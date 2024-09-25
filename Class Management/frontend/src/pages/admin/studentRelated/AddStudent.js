// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../../redux/userRelated/userHandle';
// import Popup from '../../../components/Popup';
// import { underControl } from '../../../redux/userRelated/userSlice';
// import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
// import { CircularProgress } from '@mui/material';

// const AddStudent = ({ situation }) => {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const params = useParams()

//     const userState = useSelector(state => state.user);
//     const { status, currentUser, response, error } = userState;
//     const { sclassesList } = useSelector((state) => state.sclass);

//     const [name, setName] = useState('');
//     const [rollNum, setRollNum] = useState('');
//     const [password, setPassword] = useState('')
//     const [className, setClassName] = useState('')
//     const [sclassName, setSclassName] = useState('')

//     const adminID = currentUser._id
//     const role = "Student"
//     const attendance = []

//     useEffect(() => {
//         if (situation === "Class") {
//             setSclassName(params.id);
//         }
//     }, [params.id, situation]);

//     const [showPopup, setShowPopup] = useState(false);
//     const [message, setMessage] = useState("");
//     const [loader, setLoader] = useState(false)

//     useEffect(() => {
//         dispatch(getAllSclasses(adminID, "Sclass"));
//     }, [adminID, dispatch]);

//     const changeHandler = (event) => {
//         if (event.target.value === 'Select Class') {
//             setClassName('Select Class');
//             setSclassName('');
//         } else {
//             const selectedClass = sclassesList.find(
//                 (classItem) => classItem.sclassName === event.target.value
//             );
//             setClassName(selectedClass.sclassName);
//             setSclassName(selectedClass._id);
//         }
//     }

//     const fields = { name, rollNum, password, sclassName, adminID, role, attendance }

//     const submitHandler = (event) => {
//         event.preventDefault()
//         if (sclassName === "") {
//             setMessage("Please select a classname")
//             setShowPopup(true)
//         }
//         else {
//             setLoader(true)
//             dispatch(registerUser(fields, role))
//         }
//     }

//     useEffect(() => {
//         if (status === 'added') {
//             dispatch(underControl())
//             navigate(-1)
//         }
//         else if (status === 'failed') {
//             setMessage(response)
//             setShowPopup(true)
//             setLoader(false)
//         }
//         else if (status === 'error') {
//             setMessage("Network Error")
//             setShowPopup(true)
//             setLoader(false)
//         }
//     }, [status, navigate, error, response, dispatch]);

//     return (
//         <>
//             <div className="register">
//                 <form className="registerForm" onSubmit={submitHandler}>
//                     <span className="registerTitle">Add Student</span>
//                     <label>Name</label>
//                     <input className="registerInput" type="text" placeholder="Enter student's name..."
//                         value={name}
//                         onChange={(event) => setName(event.target.value)}
//                         autoComplete="name" required />

//                     {
//                         situation === "Student" &&
//                         <>
//                             <label>Class</label>
//                             <select
//                                 className="registerInput"
//                                 value={className}
//                                 onChange={changeHandler} required>
//                                 <option value='Select Class'>Select Class</option>
//                                 {sclassesList.map((classItem, index) => (
//                                     <option key={index} value={classItem.sclassName}>
//                                         {classItem.sclassName}
//                                     </option>
//                                 ))}
//                             </select>
//                         </>
//                     }

//                     <label>Roll Number</label>
//                     <input className="registerInput" type="number" placeholder="Enter student's Roll Number..."
//                         value={rollNum}
//                         onChange={(event) => setRollNum(event.target.value)}
//                         required />

//                     <label>Password</label>
//                     <input className="registerInput" type="password" placeholder="Enter student's password..."
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                         autoComplete="new-password" required />

//                     <button className="registerButton" type="submit" disabled={loader}>
//                         {loader ? (
//                             <CircularProgress size={24} color="inherit" />
//                         ) : (
//                             'Add'
//                         )}
//                     </button>
//                 </form>
//             </div>
//             <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//         </>
//     )
// }

// export default AddStudent





import { CircularProgress } from '@mui/material';

import { Box, Container, Grid, Paper, Slide, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../../components/Popup';
import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
import { registerUser } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');
    const [className, setClassName] = useState('');
    const [sclassName, setSclassName] = useState('');
    
    // New fields for student and guardian
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [guardianPhone, setGuardianPhone] = useState('');
    const [dob, setDob] = useState('');

    const adminID = currentUser._id;
    const role = "Student";
    const attendance = [];

    useEffect(() => {
        if (situation === "Class") {
            setSclassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(getAllSclasses(adminID, "Sclass"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setSclassName('');
        } else {
            const selectedClass = sclassesList.find(
                (classItem) => classItem.sclassName === event.target.value
            );
            setClassName(selectedClass.sclassName);
            setSclassName(selectedClass._id);
        }
    };

    const fields = {
        name,
        rollNum,
        password,
        sclassName,
        adminID,
        role,
        attendance,
        address,
        phoneNumber,
        guardianName,
        guardianPhone,
        dob,
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (sclassName === '') {
            setMessage('Please select a classname');
            setShowPopup(true);
        } else {
            setLoader(true);
            dispatch(registerUser(fields, role));
        }
    };

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl());
            navigate(-1);
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage('Network Error');
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <>
        <Container maxWidth="md" sx={{ mt: 4 }}>
      <Slide in={true} direction="up" timeout={600}>
        <Paper elevation={10} sx={{ p: 4, borderRadius: 4 }}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
          <Box display="flex" flexDirection="column" gap={2}>
            <div className="register">
                <form className="registerForm" onSubmit={submitHandler}>
                <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                 Add Students
                </Typography>
              </Box>
            </Grid>

                    {
                        situation === "Student" &&
                        <>
                            <label>Class</label>
                            <select
                                className="registerInput"
                                value={className}
                                onChange={changeHandler} 
                                required
                            >
                                <option value='Select Class'>Select Class</option>
                                {sclassesList.map((classItem, index) => (
                                    <option key={index} value={classItem.sclassName}>
                                        {classItem.sclassName}
                                    </option>
                                ))}
                            </select>
                        </>
                    }

                    <label>Roll Number</label>
                    <input 
                        className="registerInput" 
                        type="number" 
                        placeholder="Enter student's Roll Number..."
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                        required 
                    />
                    <label>Name</label>
                    <input 
                        className="registerInput" 
                        type="text" 
                        placeholder="Enter student's name..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name" 
                        required 
                    />
                    <label>Birthday</label>
                    <input 
                        className="registerInput" 
                        type="date" 
                        placeholder="Enter student's address..."
                        value={dob}
                        onChange={(event) => setDob(event.target.value)}
                        required 
                    />

                    <label>Address</label>
                    <input 
                        className="registerInput" 
                        type="text" 
                        placeholder="Enter student's address..."
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required 
                    />

                    <label>Phone Number</label>
                    <input 
                        className="registerInput" 
                        type="tel" 
                        placeholder="Enter student's phone number..."
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required 
                    />

                    <label>Guardian's Name</label>
                    <input 
                        className="registerInput" 
                        type="text" 
                        placeholder="Enter guardian's name..."
                        value={guardianName}
                        onChange={(event) => setGuardianName(event.target.value)}
                        required 
                    />

                    <label>Guardian's Phone Number</label>
                    <input 
                        className="registerInput" 
                        type="tel" 
                        placeholder="Enter guardian's phone number..."
                        value={guardianPhone}
                        onChange={(event) => setGuardianPhone(event.target.value)}
                        required 
                    />

                    <label>Password</label>
                    <input 
                        className="registerInput" 
                        type="password" 
                        placeholder="Enter student's password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password" 
                        required 
                    />

                    <button className="registerButton" type="submit" disabled={loader}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                </form>
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
            
            </Box>
            </Grid>

            </Grid>
        </Paper>
      </Slide>
    </Container>
        </>
    );
};

export default AddStudent;

