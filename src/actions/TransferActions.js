import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    TRANSFER_USER_LIST_LOADED,
    TRANSFER_USER_SELECTED,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    SEARCHTERM_CHANGED
} from './types';

const ROOT_URL = 'https://us-central1-teamsters-d00e2.cloudfunctions.net';

export const transferUsersFetch = () => {
    return async (dispatch) => {
        let { data } = await axios.post(`${ROOT_URL}/userList`);
        dispatch({
            type: TRANSFER_USER_LIST_LOADED,
            payload: data.userArray
        });
    };
};

export const searchTermChanged = (text) => {
    return {
        type: SEARCHTERM_CHANGED,
        payload: text
    };
};

export const transferMember = ({ member_id, source_user, dest_user }) => {
    return async (dispatch) => {
        try {
            await axios.post(`${ROOT_URL}/memberTransfer `, { member_id, source_user, dest_user });
            dispatch({
                type: TRANSFER_SUCCESS,
            });
        } catch (err) {
            dispatch({
                type: TRANSFER_FAIL,
                payload: err.response.data.error
            });
        }
        
    };
};
