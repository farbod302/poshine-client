import React from 'react';
import { input_picker, notif, redirect, server_req } from '../../container/helper';


import "./log-in.scss"


const LogIn = () => {

    const log_in =async (e) => {
        e.preventDefault()
        let userName = input_picker("user-name")
        let password = input_picker("password")
        const data =await server_req("/registion/log_in", "post", { userName, password })
        notif(data.status,data.msg)
        if(data.data.token){
            localStorage.setItem("token",data.data.token)
            redirect("/panel")
        }

    }


    return (
        <div className="log-in-container">

            <div className="container log-in">
                <div className="form">
                    <div className="title">
                        شرکت صنایع پلاستیکی پوشینه ابهر
                    </div>
                    <form onSubmit={(e)=>{log_in(e)}}>

                        <div className="input">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="نام کاربری" id="user-name"/>
                        </div>

                        <div className="input">
                            <i className="fas fa-lock"></i>
                            <input placeholder="رمز عبور" type="password" id="password"/>
                        </div>

                        <div className="button">
                            <button type="submit">ورود</button>
                        </div>
                        <div className="forget-password">
                            فراموشی رمز عبور
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default LogIn;