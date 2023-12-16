// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))

    }



    // html code with dainamic
    const naveItems = <>

        <li className=' text-green-500 mt-2'>
          
           {
                user &&
                user.email
            }
           
        </li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>

        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.email ? <>
                <li><Link to='/bookings'>MyBooking</Link></li>
                <li><Link to='/login'><button onClick={handleLogOut}> Log Out</button></Link></li>
            </>
                : <li> <Link to='/login'>Login</Link>  </li>
        }


    </>
    return (
        <div className="navbar bg-base-100 h-20 mt-5 mb-4">
            <Link to="/" className="mt-3"><img src={logo} alt="" /></Link>
            <div className="navbar-start">


                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content ms-1 p-2 shadow bg-base-100 rounded-box w-52 absolute  border">
                        {naveItems}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal gap-2">
                    {naveItems}
                </ul>
            </div>


            <div className="navbar-end gap-3">

                <p>Ashik</p>

                <div className="tooltip" data-tip='Your Name'>
                    <button className='btn  btn-circle'>
                        P
                    </button>
                </div>


            </div>




        </div>
    );
};

export default NavBar;