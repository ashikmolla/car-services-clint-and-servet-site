import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:2000/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:2000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                    if(data.deletedCount > 0){
                        const remaining= bookings.filter(booking=>booking._id !==id);
                        setBookings(remaining)
                    }
                })

        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                              
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Date</th>
                        <th>price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Bookings;