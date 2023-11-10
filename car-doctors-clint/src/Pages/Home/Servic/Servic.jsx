import React, { useEffect, useState } from 'react';
import ServicCart from './ServicCart';

const Servic = () => {

    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('servises.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h3 className='text-2xl font-bold text-orange-700'>Service</h3>
            <h3 className='text-5xl font-bold mb-4 mt-2'>Our Service Area</h3>
            <p>
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.
            </p>
        </div>
       <div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8 p-4'>
        {
            services.map(servic => <ServicCart
            key={servic.service_id}
            service={servic}
            >

            </ServicCart>)
        }
       </div>
        </div >
    );
};

export default Servic;