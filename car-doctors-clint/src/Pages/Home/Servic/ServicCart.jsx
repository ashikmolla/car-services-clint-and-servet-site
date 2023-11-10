import React from 'react';
import { Link } from 'react-router-dom';

const ServicCart = ({service}) => {
    const {_id, title, img, price } = service;
    return (
        <div className="mb-8">



            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="h-[208px]"><img src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-3xl font-bold mb-5">{title}</h2>

                    <div className="card-actions justify-end">
                        <p className='text-orange-500 font-bold text-xl'>Price:- ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-circle  btn-error btn-outline  border-none  btn-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>

                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicCart;