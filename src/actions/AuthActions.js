import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
    PHONE_CHANGED_OTP, SIGNUP_OTP_FAIL, SIGNUP_OTP_SUCCESS, 
    CODE_CHANGED_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS
} from './types';

const ROOT_URL = 'https://us-central1-teamsters-d00e2.cloudfunctions.net';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED_OTP,
        payload: text
    };
};

export const codeChanged = (text) => {
    return {
        type: CODE_CHANGED_OTP,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            loginUserSuccess(dispatch, user);
        } catch (err) {
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                loginUserSuccess(dispatch, user);
            } catch (err2) {
                loginUserFail(dispatch);
            }
        }
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

export const createUserOTP = ({ phone, email }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            const result = await axios.post(`${ROOT_URL}/createUser`, { phone, email });
            const otp = await axios.post(`${ROOT_URL}/requestOTP`, { phone });
            console.log(result);
            console.log(otp);

            dispatch({
                type: SIGNUP_OTP_SUCCESS
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: SIGNUP_OTP_FAIL
            });
        }
    };
};

export const verifyOTP = ({ phone, code }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            const { data } = await axios.post(`${ROOT_URL}/verifyOTP `, { phone, code });
            const user = await firebase.auth().signInWithCustomToken(data.token);
            loginUserSuccess(dispatch, user);
            dispatch({
                type: VERIFY_OTP_SUCCESS,
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: VERIFY_OTP_FAIL
            });
        }
    };
};
