import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MEMBER_UPDATE, MEMBER_CREATE, MEMBERS_FETCH_SUCCESS, MEMBER_SAVE_SUCCESS } from './types';

export const memberUpdate = ({ prop, value }) => {
    return {
        type: MEMBER_UPDATE,
        payload: { prop, value }
    };
};

export const memberCreate = ({ name, position, stats1, stats2, stats3 }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/members`)
            .push({ name, position, stats1, stats2, stats3 })
            .then(() => {
                dispatch({
                    type: MEMBER_CREATE
                });
                Actions.pop();
            });
    };
};

export const memberSave = ({ name, position, stats1, stats2, stats3 , uid}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/members/${uid}`)
            .set({ name, position, stats1, stats2, stats3 })
            .then(() => {
                dispatch({
                    type: MEMBER_SAVE_SUCCESS
                });
                Actions.pop();
            });
    };
};

export const membersFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/members`)
            .on('value', snapshot => {
                dispatch({ type: MEMBERS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
