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
        <LogoutContainer>
            <h1>{currentUser.name}</h1>
            <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
            <ButtonContainer>
                <LogoutButton onClick={handleLogout} primary>Log Out</LogoutButton>
                <LogoutButton onClick={handleCancel}>Cancel</LogoutButton>
            </ButtonContainer>
        </LogoutContainer>
    );
};

export default Logout;

// Pop-up animation
const popUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const LogoutContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  color: black;
  max-width: 400px;
  margin: 20px auto;
  animation: ${popUpAnimation} 0.5s ease-out;
`;

const LogoutMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ primary }) => primary && `
    background-color: #ea0606;
  `}

  &:hover {
    color: #fff;
    background-color: #333;
  }
  
  ${({ primary }) => primary ? `
    background-color: #ea0606;
  ` : `
    background-color: #6c757d;
  `}
`;
