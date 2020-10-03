import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../images/brandLogo.png'
import googleIcon from '../../images/icons/google.png'
import './Login.css'

const Login = () => {

    const handleGoogleLogin = () => {

    }

    const createAccount = () => {
        console.log('clicked')
    }

    return (
        <div>
            <div className="login-container d-flex align-items-center flex-column">
                <Link to="/home" className='brand-img mb-5'>
                    <img style={{ height: '50px' }} className='mt-5' src={brandImg} alt="" />
                </Link>
                <div className='login-card-container p-5 d-flex align-items-center'>
                    <div className='login-card'>
                        <div className='login-card-text'>
                            <h3 className='text-center mb-4'>Login With</h3>
                        </div>

                        <button onClick={handleGoogleLogin} className='btn btn-block btn-outline-dark border rounded-pill px-4'>
                            <div className='d-flex align-items-center justify-content-around'>
                                <div>
                                    <img className='mr-3' style={{ height: '30px' }} src={googleIcon} alt="" />
                                </div>
                                <div>
                                    <p className='m-0'>Continue with Google</p>
                                </div>
                            </div>
                        </button>

                        <div className='mt-3'>
                           <span>Don't have an account?</span> <Link onClick={() => createAccount()}>Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;