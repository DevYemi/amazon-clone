import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }
    const handleClick = (event, eventType) => {
        event.preventDefault();
        switch (eventType) {
            case "login":
                auth.signInWithEmailAndPassword(email, password)
                .then(auth => {
                 history.push("/");
                })
                .catch(e => alert(e))
                break;
            case "register":
                auth.createUserWithEmailAndPassword(email, password)
                .then(auth => {
                 history.push("/");
                })
                .catch(e => alert(e))
                break;

            default:
                console.warn("There is an error somewhere, please recheck your code")
                break;
        }
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo' />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input onChange={handleChange} value={email} type="email" name="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={handleChange} type="password" name="password" />
                    <button onClick={(e) => handleClick(e, "login")} type="submit" className='login__signInBtn'>Sign In</button>
                </form>
                <p>By signing you agree to amazon's condition for use and sale. Please see our Privacy Notice, Our Cookies Notice and Interest-Based Ad Notice notice</p>
                <button onClick={(e) => handleClick(e, "register")} className='login__registerBtn'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}
export default Login