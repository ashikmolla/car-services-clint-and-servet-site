import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true)
    const searchRef=useRef(null);
    const [search, setSearch]=useState('')
    useEffect(() => {
        fetch(`https://my-car-doctors-server.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
  
}, [asc, search])

    const handleSerch=event=>{
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }
    return (
        <div className='mt-8'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-700'>Service</h3>
                <h3 className='text-5xl font-bold mb-4 mt-2'>Our Service Area</h3>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.
                </p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSerch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button className='btn btn-primary'
                    onClick={() => setAsc(!asc)}>{asc ? 'Price: Hight to Low' : 'Price :Low to Hight'}</button>

            </div>
            <div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8 p-4'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;