import { MEMBER_UPDATE, MEMBER_CREATE, MEMBER_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    position: '',
    stats1: '',
    stats2: '',
    stats3: '',
    stats4: '',
    notes: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case MEMBER_CREATE:
            return INITIAL_STATE;
        case MEMBER_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
