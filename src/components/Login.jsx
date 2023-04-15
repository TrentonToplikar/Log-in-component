import React, { useState } from "react";
import './styles/Auth.css'

export const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className="auth-form-container">
            <form onSubmit = {handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value ={email} onChange = {(e) =>setEmail(e.target.value)} type="email" placeholder="email@yahoo.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value ={password} onChange = {(e) =>setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log in</button>
            </form>
            <button className="linkButton" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        )
}
export default Login;