import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const url = `https://my-car-doctors-server.vercel.app/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                } else {
                    navigate('/')
                }
            })
    }, [])


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`https://my-car-doctors-server.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })

        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://my-car-doctors-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
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
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Bookings;