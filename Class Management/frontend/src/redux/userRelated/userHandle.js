import axios from 'axios';
import {
    authError,
    authFailed,
    authLogout,
    authRequest,
    authSuccess,
    doneSuccess,
    getError,
    getFailed,
    getRequest,
    stuffAdded, UPDATE_USER_SUCCESS,   
    UPDATE_USER_FAILURE,  
} from './userSlice';

export const loginUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Login`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.role) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(authFailed(result.data.message));
        }
    } catch (error) {
        dispatch(authError(error));
    }
};

export const registerUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Reg`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.schoolName) {
            dispatch(authSuccess(result.data));
        }
        else if (result.data.school) {
            dispatch(stuffAdded());
        }
        else {
            dispatch(authFailed(result.data.message));
        }
    } catch (error) {
        dispatch(authError(error));
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(authLogout());
};

export const getUserDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}




export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
};


// export const updateUser = (fields, id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`, fields, {
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (result.data.schoolName) {
//             dispatch(authSuccess(result.data));
//         }
//         else {
//             dispatch(doneSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }


export const updateUser = (updatedFields, userId) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/Admin/${userId}`, 
            updatedFields, 
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.data) {
            dispatch(UPDATE_USER_SUCCESS(response.data)); // Correct action
        } else {
            throw new Error("Failed to update user");
        }
    } catch (error) {
        dispatch(UPDATE_USER_FAILURE(error.message));
    }
};




export const addStuff = (fields, address) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${address}Create`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (result.data.message) {
            dispatch(authFailed(result.data.message));
        } else {
            dispatch(stuffAdded(result.data));
        }
    } catch (error) {
        dispatch(authError(error));
    }
};