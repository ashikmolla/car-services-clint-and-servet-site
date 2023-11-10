import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import logo from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-4">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg-w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
                    <img src={logo} className="w-1/2 absolute shadow-2xl border-8 rounded-lg 
                     right-5 top-1/2" />
                </div>

                <div className='lg-w-1/2'>

                    <h1 className="text-3xl text-[#FF3811] font-bold mb-4">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                  
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                     <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do nott look even slightly believable. </p>
                    <button className="btn bg-orange-600 border-none ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;