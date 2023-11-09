// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const NavBar = () => {

    // const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {

    //         })
    //         .catch(error => console.log(error))

    // }



    // html code with dainamic
    const naveItems = <>

        {/* <li className='items-center text-green-500'>
            {
                user &&
                user.email
            }

        </li> */}

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>

        <li><Link to='/blog'>Blog</Link></li>

        {/* <li><Link to='/login'>Login</Link></li> */}


        {/* {
            user?.email ? <>
                <li><Link to='/myBooking'>MyBooking</Link></li>
                <li> <button onClick={handleLogOut}> Log Out</button> </li>
            </>
                : <li> <Link to='/login'>Login</Link>  </li>
        } */}


        <li><Link to='/'>Home</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 h-20 mt-5 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {naveItems}
                    </ul>
                </div>
                <Link to="/" className="mt-3"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {naveItems}
                </ul>
            </div>


            <div className="navbar-end">
                <p>Ashik</p>


                <div className="tooltip" data-tip={'Ashik'}>
                    <button className="btn btn-circle btn-outline"> Pro
                    </button>

                </div>
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