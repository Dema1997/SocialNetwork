import React from "react";
import css from './index.module.css';
import UserForm from '../components/UserForm';

export const Signin = () => {

    return(
        <div className={css.App}>
            <UserForm />
        </div>
    )
}
export default Signin;