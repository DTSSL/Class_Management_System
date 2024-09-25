// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { authLogout } from '../redux/userRelated/userSlice';
// import styled from 'styled-components';

// const Logout = () => {
//     const currentUser = useSelector(state => state.user.currentUser);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         dispatch(authLogout());
//         navigate('/');
//     };

//     const handleCancel = () => {
//         navigate(-1);
//     };

//     return (
//         <LogoutContainer>
//             <h1>{currentUser.name}</h1>
//             <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
//             <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
//             <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
//         </LogoutContainer>
//     );
// };

// export default Logout;

// const LogoutContainer = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
//   background-color: #85769f66;
//   color: black;
// `;

// const LogoutMessage = styled.p`
//   margin-bottom: 20px;
//   font-size: 16px;
//   text-align: center;
// `;

// const LogoutButton = styled.button`
//   padding: 10px 20px;
//   margin-top: 10px;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #fff;
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//     background-color: #333;
//   }
// `;

// const LogoutButtonLogout = styled(LogoutButton)`
//   background-color: #ea0606;
// `;

// const LogoutButtonCancel = styled(LogoutButton)`
//   background-color: rgb(99, 60, 99);
// `;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled, { keyframes } from 'styled-components';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <DarkContainer>
            <Card>
                <h1>{currentUser ? currentUser.name : 'Guest'}</h1>
                <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
                <ButtonContainer>
                    <ActionButton onClick={handleLogout} primary>Log Out</ActionButton>
                    <ActionButton onClick={handleCancel}>Cancel</ActionButton>
                </ButtonContainer>
            </Card>
        </DarkContainer>
    );
};

export default Logout;

// Smooth fade-in and slide-up animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DarkContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1d;  // Dark theme background color
  color: #f0f0f0;
`;

const Card = styled.div`
  background-color: #2c2c34;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: ${fadeInUp} 0.6s ease-out;
  
  h1 {
    margin-bottom: 15px;
    color: #fff;
  }
`;

const LogoutMessage = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
  color: #d4d4d8;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${({ primary }) => (primary ? '#f05454' : '#4CAF50')};
  color: #fff;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(255, 255, 255, 0.1);
  outline: none;

  &:hover {
    transform: scale(1.05);
    background: ${({ primary }) => (primary ? '#ff6666' : '#66bb6a')};
  }

  &:active {
    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.2);
  }
`;
