import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { 
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
    PHONE_CHANGED_OTP, SIGNUP_OTP_FAIL, 
    CODE_CHANGED_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS,
    NO_AUTH_TOKEN_EXISTS, LOGOUT_SUCCESS, LOGOUT_FAIL
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
            let user = await firebase.auth().signInWithEmailAndPassword(email, password);
            loginUserSuccess(dispatch, user);
        } catch (err) {
            try {
                let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
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
    Actions.reset('main');
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const authTokenFail = (dispatch) => {
    dispatch({
        type: NO_AUTH_TOKEN_EXISTS
    });
    Actions.reset('authOTP');
};

export const createUserOTP = ({ phone, email }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone, email });
            await axios.post(`${ROOT_URL}/requestOTP`, { phone });
            dispatch({
                type: SIGNUP_OTP_FAIL,
                payload: 'Code sent to phone number'
            });
        } catch (err) {
            console.log(err.response.data.error);
            dispatch({
                type: SIGNUP_OTP_FAIL,
                payload: err.response.data.error
            });
        }
    };
};

export const requestOTP = ({ phone }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            await axios.post(`${ROOT_URL}/requestOTP`, { phone });
            dispatch({
                type: SIGNUP_OTP_FAIL,
                payload: 'Code sent to phone number'
            });
        } catch (err) {
            console.log(err.response.data.error);
            dispatch({
                type: SIGNUP_OTP_FAIL,
                payload: err.response.data.error
            });
        }
    };
};

export const verifyOTP = ({ phone, code }) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOTP `, { phone, code });
            let user = await firebase.auth().signInWithCustomToken(data.token);
            await AsyncStorage.setItem('auth_token', data.token);

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

export const checkUserToken = () => {
    return async (dispatch) => {
        console.log('checkusertoken');
        let token = await AsyncStorage.getItem('auth_token');
        if (token) {
            console.log(token);
            try {
                let user = await firebase.auth().signInWithCustomToken(token);
                loginUserSuccess(dispatch, user);
            } catch (err) {
                console.log(err);
                authTokenFail(dispatch);    
            }
        } else {
            console.log('aww tokes :<');
            authTokenFail(dispatch);
        }
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            await firebase.auth().signOut();
            Actions.reset('authOTP');
            await AsyncStorage.removeItem('auth_token');
            dispatch({
                type: LOGOUT_SUCCESS
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    };
};
