import {LOGIN} from '../Actions/ActionTypes';
import {login} from '../../Services';
import history from '../../../../utils/browser-history';

export const LoginThunk = (email, password) => async function (dispatch) {
    console.log('Start of login thunk');
    console.log('Login state is pending');
    dispatch({ type: LOGIN.PENDING });
    login(email, password).then((res) => {
        console.log('Login state is success..', res.data);
        dispatch({ type: LOGIN.SUCCESS, payload: res.data });
        history.push('/');
    }).catch((error) => {
        console.log('Login state is error');
        dispatch({ type: LOGIN.ERROR, payload: error.data });
    });
};
