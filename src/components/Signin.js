import React, { useRef } from 'react';
import { auth } from '../firebase';
import './Signin.css';

const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(user => console.log(user))
        .catch(err => console.error(err));
    };
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(user => console.log(user))
        .catch(err => console.error(err));
    };
    return (
    <div className="signin">
        <form>
            <h1>Sign in</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={signIn}>Sign in</button>
            <h6>Not yet register? <span className='signin__link' onClick={(e) =>{signUp(e)}}>Sign up</span></h6>
        </form>
    </div>
  )
}

export default Signin;