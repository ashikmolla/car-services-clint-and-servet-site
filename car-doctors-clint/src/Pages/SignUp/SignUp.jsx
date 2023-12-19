import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState(null)
    const { createUser } = useContext(AuthContext)

    const hanleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)

                // navigate(from,{replace: true})
                event.target.reset();

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
                        <h1 className="text-3xl font-bold  text-center">Sign Up now!</h1>
                        <form onSubmit={hanleSignUp}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" />
                            </div>
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
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <p className='text-orange-700 text-center text-sm mb-4'>{error}</p>

                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <p className='text-l text-center'>Or Sign Up with</p>



                            <p className='text-center my-4'>Have an account ? <Link className='text-orange-500 font-bold' to="/login">  Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;