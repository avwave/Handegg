import { 
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
    PHONE_CHANGED_OTP, SIGNUP_OTP_FAIL, SIGNUP_OTP_SUCCESS, 
    CODE_CHANGED_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
    phone: '',
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    code: ''
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
            return { ...state, loading: false, error: 'Signup Failed' };
        case VERIFY_OTP_SUCCESS:
            return { ...state, loading: false, error: '' };
        case VERIFY_OTP_FAIL:
            return { ...state, loading: false, error: 'Code invalid', code: '' };
        default:
            return state;
    }
};
