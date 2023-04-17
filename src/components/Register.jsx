import React, { useState } from "react"
import './styles/Auth.css'

export const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')
        setName('')
    }
    return (
        <div className="auth-form-container">
            <form onSubmit = {handleSubmit}>
                <label htmlFor=""> Full Name</label>
                <input value={name} onChange = {(e) =>setName(e.target.value)} name="name" id="name" placeholder="Full name" />
                <label htmlFor="email">Email</label>
                <input value ={email} onChange = {(e) =>setEmail(e.target.value)} type="email" placeholder="email@yahoo.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value ={password} onChange = {(e) =>setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Register here</button>
            </form>
            <button className="linkButton" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    )
}

export default Register