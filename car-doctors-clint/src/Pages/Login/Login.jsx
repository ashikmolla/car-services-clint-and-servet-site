
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const hanleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                
                // console.log(user)
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }
    return (

        <div className="hero min-h-screen bg-base-200 mt-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 me-10">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold  text-center">Login now!</h1>
                        <form onSubmit={hanleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-orange-700 text-center text-sm mb-4'></p>

                                <input className="btn btn-primary" type="submit" value="Login" />
                                <span>{error}</span>
                            </div>
                        </form>
                        <p className='text-center mt-4'>New to car Doctor <Link className='text-orange-500 font-bold' to="/signUp">  Sign Up</Link></p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;