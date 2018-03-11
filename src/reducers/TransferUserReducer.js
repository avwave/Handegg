import {
    TRANSFER_USER_LIST_LOADED,
    TRANSFER_USER_SELECTED,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    SEARCHTERM_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    searchTerm: '',
    users: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRANSFER_USER_LIST_LOADED:
            return { ...state, users: action.payload };
        case TRANSFER_USER_SELECTED:
            return { ...state };
        case TRANSFER_SUCCESS:
            return { ...state, error: '' };
        case TRANSFER_FAIL:
            return { ...state, error: action.payload };
        case SEARCHTERM_CHANGED:
            return { ...state, searchTerm: action.payload };
        default:
            return state;
    }
};
