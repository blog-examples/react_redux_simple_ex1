import React from 'react';
import {connect} from 'react-redux';
import {login, logout, changeInputEmail} from '../redux_module/login';

const mapStateToProps = store => ({
    loginUserInfo: store.loginReducer.loginUserInfo,
    input_email : store.loginReducer.input_email
});

const mapDispatchToProps = dispatch => ({
    login: (email) => {
        dispatch(login(email));
    },
    logout: () => {
        dispatch(logout());
    },
    changeInputEmail: (input_email) => {
        dispatch(changeInputEmail(input_email));
    },
});

const Login = ({loginUserInfo, input_email, login, logout, changeInputEmail}) => {

    const onChangeEmail = e => changeInputEmail(e.target.value);
    const onClickLogin = () =>{
        login(input_email);
    }

    return (
    <>
        <div>
            <label>로그인유저:</label>
            <span>{loginUserInfo.email}</span>
        </div>
        <div>
            <labe>로그인이메일입력:</labe>
            <input type="text" onChange={onChangeEmail} value={input_email}></input>
            <button onClick={onClickLogin}>로그인</button>
            
        </div>
        <button onClick={logout}>로그아웃</button>
    </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);