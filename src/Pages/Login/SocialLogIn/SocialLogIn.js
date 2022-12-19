import React from 'react';
import googleLogo from '../../../images/socialIcon/google.png'
import facebook from '../../../images/socialIcon/Facebook.png'
import github from '../../../images/socialIcon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogIn = () => {
    // const [signInWithXXX, user, loading, error] = useSignInWithXXX(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    let loadingElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p>{error?.message} {error1?.message}</p>

    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>

            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='p-4'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>

            <div>
                <p>{loadingElement}</p>
                <p>{errorElement}</p>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-lg w-50  d-block mx-auto'>
                    <img style={{ width: '40px' }} className='pe-2' src={googleLogo} alt="" />
                    <span>Login with google</span>
                </button>
                <button className='btn btn-info btn-lg w-50 my-3 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='pe-2' src={facebook} alt="" />
                    <span>Login with facebook</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-secondary btn-lg w-50  d-block mx-auto'>
                    <img style={{ width: '40px' }} className='pe-2' src={github} alt="" />
                    <span>Login with github</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogIn;