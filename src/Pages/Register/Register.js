import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form ' >
            <h2 className='text-primary text-center my-4'>Please Register!!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter your email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Enter your password' required />
                <br />
                <button className="w-100 py-2 border-0 py-2" type="submit">Register</button>
            </form>
            <p className='my-2'>Already have an account <Link className='text-decoration-none' to='/login'>Login</Link> </p>
        </div>
    );
};

export default Register;