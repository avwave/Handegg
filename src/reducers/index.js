import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MemberFormReducer from './MemberFormReducer';

export default combineReducers({
    auth: AuthReducer,
    memberForm: MemberFormReducer
});
