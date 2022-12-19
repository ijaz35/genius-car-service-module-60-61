import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogIn from '../Login/SocialLogIn/SocialLogIn';
import Loading from '../Login/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();

    //update user profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    //create new user and send verification email
    const [createUserWithEmailAndPassword, user, loading,
        error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    //state for checkbox
    const [agree, setAgree] = useState(false);

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        navigate('/home')
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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms " id="" />
                <label className={agree ? 'ps-2 text-success' : 'ps-2 text-danger'} htmlFor="terms">Accept terms and conditions</label>

                <input
                    disabled={!agree}
                    type="submit" className="w-100 py-2 border-0 py-2 mt-2" value="Register" />

            </form>

            <p className='my-2'>Already have an account <Link className='text-decoration-none' to='/login'>Login</Link> </p>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Register;