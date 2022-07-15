import React from 'react'
import "./Login.css"
import {
    Routes,
    Route,
    Link,
    
} from "react-router-dom";
export default function Login() {

    return (
        <div className='loginpage'>
                            <form method='post' >
                                <input type="hidden" name="_token" />
                                <div className="field">
                                    <label>E-mail</label>
                                    <input placeholder="Your email" id="login-email" type="email" name="email"  />
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input placeholder="Your password" id="login-password" type="password" name="password"   />
                                </div>
                                <div className="btn">
                                    <button type="submit" ><span>Login<br />account</span></button>
                                </div>
                                <a href='#'>Forgot Password ?</a>
                            </form>
                            <div className='title'>
                                <h1><span>Existing</span> User's</h1>
                            </div>
                        </div>
    )
}
