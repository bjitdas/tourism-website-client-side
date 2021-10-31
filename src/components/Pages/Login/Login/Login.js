import React from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const { setUser, setError, setIsLoading, signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()

            .then(result => {
                setUser(result.user)
                setIsLoading(true)
                history.push(url)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    }

    return (
        <div className="login-container">
            <h1 className="text-success my-4">Please Log in</h1>
            <div className="d-flex border border-1 boder-primary rounded w-25 mx-auto">
                <p className="px-1 mx-1 fs-2"><FcGoogle /></p><button className="btn btn-primary w-100 fs-5" onClick={handleGoogleSignIn}>  Log in with Google</button>
            </div>
        </div>
    );
};

export default Login;