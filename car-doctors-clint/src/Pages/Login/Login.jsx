
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const{signIn}=useContext(AuthContext)

    const hanleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;

                
                console.log(loggedUser);
                // navigate(from, { replace: true });

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
                            </div>
                        </form>
                        <p className='text-center mt-4'>New to car Doctor <Link className='text-orange-500 font-bold' to="/signUp">  Sign Up</Link></p>
                        {/* <SocilaLogin></SocilaLogin> */}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;