import {LOGIN} from '../Actions/ActionTypes';

const initialState = {
    access_token: '',
    loading: false,
    error: null,
};
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.PENDING:
            return {
                access_token: '',
                loading: true,
                error: null,
            };
        case LOGIN.SUCCESS:
            return {
                access_token: action.payload.access_token,
                loading: false,
                error: null,
            };
        case LOGIN.ERROR:
            return {
                access_token: '',
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
