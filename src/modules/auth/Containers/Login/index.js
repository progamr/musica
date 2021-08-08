import React from 'react';
import {useDispatch} from 'react-redux';
import {LoginThunk} from '../../State/Thunks';
import {connect} from 'react-redux';

const Login = (props) => {

    const dispatch = useDispatch();
    const {loading, access_token: authToken} = props;

    const handleClick = (e) => {
        dispatch(LoginThunk('foo@bar.com', '12345'));
    };

    if(authToken[0]) {
        console.log('TITLE..', authToken[0].title);
    }


    return (
        <>
            <button onClick={handleClick}>Login</button>
            {loading && <span>Loading</span>}
            <span>Title: {authToken.length && authToken[0].title}</span>
            <div>Login Page</div>
        </>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    access_token: state.auth.access_token,
});

export default connect(mapStateToProps)(Login);
