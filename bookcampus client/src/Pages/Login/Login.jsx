// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useState  } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.config';
import {FaGoogle } from 'react-icons/fa';

const auth =getAuth(app);
const Login = () => {
    // const [error,setError]=useState([]);
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            
            
                Swal.fire(
                    'You logged in successfully!',
              
                )
            })
            .catch(error => console.log(error))
            // .catch(error => setError(error))

    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser)
            navigate(from, { replace: true });
            Swal.fire(
                ' SignUP  successfull!',
          
            )
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Login' />
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary gap-3"><FaGoogle></FaGoogle> Sign In With Google</button>

                        <p className='my-4 text-center'>New to BookMyCampus <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                {/* <p>hello{error}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Login;