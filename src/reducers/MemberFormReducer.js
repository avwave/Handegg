import { MEMBER_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    position: '',
    stats1: '',
    stats2: '',
    stats3: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
