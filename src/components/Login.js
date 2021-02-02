import React from 'react'
import '../assets/Login.css'
import Cookies from "js-cookie";
import axios from "axios";
import {useEffect, useState} from 'react';

export default function Login() {
    const [user, setuser] = useState({})
    const handleSubmit  = async (e) => {
        e.preventDefault();
        console.log("login pressed");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username":"client1", "password":"secret1" })
        };
        axios.post("http://localhost:8080/oauth/token?grant_type=password&username=bill&password=12345", { requestOptions }).then(data => {
            console.log(data);
        });
    }
    return (
        <div className="login-form">
            <form action="" method="post" onSubmit={handleSubmit}>
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div className="clearfix">
                    <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                    <a href="#" className="float-right">Forgot Password?</a>
                </div>        
            </form>
            <p className="text-center"><a href="#">Create an Account</a></p>
        </div>        
    )
}
