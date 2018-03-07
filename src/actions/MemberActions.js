import { MEMBER_UPDATE } from './types';

export const memberUpdate = ({ prop, value }) => {
    return {
        type: MEMBER_UPDATE,
        payload: { prop, value }
    };
};
