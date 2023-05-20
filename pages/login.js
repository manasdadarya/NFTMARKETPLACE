import React from 'react';

//internal import
import Style from '../styles/login.module.css';
import LoginAndSignUp from '../loginAndSignUp/loginAndSignUp';

const login = () => {
  return (
    <div className={Style.login}>
        <div className={Style.login_box}>
            <h1>Login</h1>
            <LoginAndSignUp/>
            <p className={Style.login_box_para}>
                New User?<a href="#">Create an account</a>
            </p>
        </div>
    </div>
  );
};

export default login;