import React, { useState } from 'react';

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ cPassword, setCPassword ] = useState("");
    return (
        <div>
            <form>
                <div>
                    <h1>
                        Create Account
                    </h1>
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange = { (event) => setFirstName(event.target.value) }/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange = { (event) => setLastName(event.target.value) }/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange = { (event) => setEmail(event.target.value) }/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange = { (event) => setPassword(event.target.value) }/>
                </div>
                <div>
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input type="password" name="cPassword" onChange = { (event) => setCPassword(event.target.value) }/>
                </div>
            </form>
            <div>
                <h1>
                    Your Account Information
                </h1>
                <p>
                    <em>First Name:</em> {firstName}
                </p>
                <p>
                    <em>Last Name:</em> {lastName}
                </p>
                <p>
                    <em>Email:</em> {email}
                </p>
                <p>
                    <em>Password:</em> {password}
                </p>
                <p>
                    <em>Confirm Password:</em> {cPassword}
                </p>
            </div>
        </div>
        
    )
}

export default Form;