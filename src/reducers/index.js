import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MemberFormReducer from './MemberFormReducer';
import MemberReducer from './MemberReducer';

export default combineReducers({
    auth: AuthReducer,
    memberForm: MemberFormReducer,
    members: MemberReducer
});
