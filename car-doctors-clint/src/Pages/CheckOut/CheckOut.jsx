import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const CheckOut = () => {
    const service = useLoaderData();
    // console.log(service)
    const { title, price, services_id,_id, img } = service;
    const { user } = useContext(AuthContext)



    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const massage = form.massage.value;
        const booking = { 
            customerName: name,
            email,
            date,
            img,
            service_title: title,
            services_id:_id,
            price: price,
            massage,

        }
        console.log(booking);
        fetch('http://localhost:2000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // ait amni dila na caile dibona 
            if(data.insertedId){
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'success'
                )
            }
        })

    }
    return (
        <div>

            <div>
                <h1>Book services{title}</h1>



                <form onSubmit={handleBookService}>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Faist Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>

                            <input type="text" name='price' value={"$" + price} className="input input-bordered" />

                        </div>


                    </div>
                    <div className="card-body  gap-6 mt-0 pt-0" >
                        <div className="form-control ">
                            <input className=" input input-bordered h-32 text-start" type="text" name='massage' placeholder="Your Massage" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Order Confiram" className='btn btn-primary btn-block' />
                        </div>
                    </div>

                </form>





            </div>
        </div>
    );
};

export default CheckOut;