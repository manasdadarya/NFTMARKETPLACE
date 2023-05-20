import React from 'react';

//internal import
import Style from '../styles/login.module.css';
import SignUp from '../loginAndSignUp/SignUp/SignUp';

const signUp = () => {
  return (
    <div className={Style.login}>
        <div className={Style.login_box}>
            <h1>SignUp</h1>
            <SignUp/>
            {/* <p className={Style.login_box_para}>
                New User?<a href="#">Create an account</a>
            </p> */}
        </div>
    </div>
  );
};

export default signUp;