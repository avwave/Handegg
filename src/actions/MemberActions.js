import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MEMBER_UPDATE, MEMBER_CREATE, MEMBERS_FETCH_SUCCESS, MEMBER_SAVE_SUCCESS } from './types';

export const memberUpdate = ({ prop, value }) => {
    return {
        type: MEMBER_UPDATE,
        payload: { prop, value }
    };
};

export const memberCreate = ({ name, position, stats1, stats2, stats3, stats4, notes }) => {
    const { currentUser } = firebase.auth();

    return async (dispatch) => {
        await firebase.database().ref(`/users/${currentUser.uid}/members`)
            .push({
                name,
                position,
                stats1,
                stats2,
                stats3,
                stats4,
                notes,
                creatorID: currentUser.uid,
                createdOn: firebase.database.ServerValue.TIMESTAMP
            });
        dispatch({
            type: MEMBER_CREATE
        });
        Actions.pop();
    };
};

export const memberSave = ({ name, position, stats1, stats2, stats3, stats4, notes, uid }) => {
    const { currentUser } = firebase.auth();

    return async (dispatch) => {
        await firebase.database().ref(`/users/${currentUser.uid}/members/${uid}`)
            .update({
                name,
                position,
                stats1,
                stats2,
                stats3,
                stats4,
                notes,
                currentOwner: currentUser.uid,
                modifiedOn: firebase.database.ServerValue.TIMESTAMP
            });

        dispatch({
            type: MEMBER_SAVE_SUCCESS
        });
        Actions.pop();
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
