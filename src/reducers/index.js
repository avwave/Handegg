import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MemberFormReducer from './MemberFormReducer';
import MemberReducer from './MemberReducer';
import TransferUserReducer from './TransferUserReducer';

export default combineReducers({
    auth: AuthReducer,
    memberForm: MemberFormReducer,
    members: MemberReducer,
    users: TransferUserReducer
});
