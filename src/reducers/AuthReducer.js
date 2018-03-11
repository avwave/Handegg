import { 
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
    PHONE_CHANGED_OTP, SIGNUP_OTP_FAIL, SIGNUP_OTP_SUCCESS, 
    CODE_CHANGED_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    FB_LOGIN_SUCCESS, FB_LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = { 
    phone: '',
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    code: '',
    auth_token: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case PHONE_CHANGED_OTP:
            return { ...state, phone: action.payload };
        case CODE_CHANGED_OTP:
            return { ...state, code: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case SIGNUP_OTP_SUCCESS:
            return { ...state, loading: false, error: '' };
        case SIGNUP_OTP_FAIL:
            return { ...state, loading: false, error: action.payload };
        case VERIFY_OTP_SUCCESS:
            return { ...state, loading: false, error: '' };
        case VERIFY_OTP_FAIL:
            return { ...state, loading: false, error: 'Code invalid', code: '' };
        case LOGOUT_SUCCESS:
            return { ...state, ...INITIAL_STATE };
        case LOGOUT_FAIL:
            return { ...state, ...INITIAL_STATE };
        case FB_LOGIN_SUCCESS:
            return { ...state, loading: false, auth_token: action.payload };
        case FB_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload };
        
        default:
            return state;
    }
};
