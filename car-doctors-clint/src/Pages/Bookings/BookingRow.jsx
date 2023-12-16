import React from 'react';

const BookingRow = ({ booking }) => {
    console.log(booking)
    const {customerName, date, email,img, price, service_title}=booking

    return (
        <tr>
            <th>
                <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img&& <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>

            
            <td>{service_title}</td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default BookingRow;