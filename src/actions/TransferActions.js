import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    TRANSFER_USER_LIST_LOADED,
    TRANSFER_USER_SELECTED,
    TRANSFER_SUCCESS
} from './types';

const ROOT_URL = 'https://us-central1-teamsters-d00e2.cloudfunctions.net';

export const getTransferUsers = () => {
    return async (dispatch) => {
        let { data } = await axios.post(`${ROOT_URL}/userList`);
        dispatch({
            type: TRANSFER_USER_LIST_LOADED,
            payload: data
        });
    };
};
