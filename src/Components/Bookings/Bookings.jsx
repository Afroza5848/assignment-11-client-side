import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import Review from "../Review/Review";
import toast from "react-hot-toast";

const Bookings = ({ booking,fetchBookings }) => {
    //const [update,setUpdate] = (data);
    const { status, room_id,name } = booking;
    const [startDate, setStartDate] = useState(new Date());
   
   console.log(booking);
    // handle delete------------------------
    const handleCancel = (_id, room_id, preStatus, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            //  room available
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://stay-spot.vercel.app/bookings/${_id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            axios.patch(`https://stay-spot.vercel.app/room-s/${room_id}`, { status })
                                .then(res => {
                                    console.log(res.data);
                                    Swal.fire({
                                        title: "Cancel!",
                                        text: "Your Ordered Canceled.",
                                        icon: "success"
                                    });
                                    fetchBookings();
                                })
                        }
                    })
            }
        });
    }
    // patch-------------------------------
    const handleUpdate = (e) => {
        {/* Open the modal using document.getElementById('ID').showModal() method */ }
        e.preventDefault();
        console.log(startDate);
        axios.patch(`https://stay-spot.vercel.app/bookings/${booking._id}`, { startDate })
            .then(data => {
                console.log(data.data);
                fetchBookings(fetchBookings);
                toast.success('update successfully')
            })
    }

    return (
        <tbody>
            {/* row 1 */}
            <tr className="text-xl ">

                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-32 h-32 rounded ">
                                <img src={booking.photo1} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold ">{booking.user_name}</div>
                            <div className="text-sm opacity-50">{booking.user_email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="text-xl">{booking.name}</span>
                </td>
                <td>{booking.size} sq Ft</td>
                <td>$ {booking.price}</td>
                <td>{booking.startDate}</td>
                <td className=" flex flex-col items-center justify-center">
                    <div className=" flex items-center gap-3 justify-center lg:flex-row flex-col lg:mt-10">
                        <button onClick={() => handleCancel(booking._id, room_id, status, 'Available')} className="btn btn-error text-white">Cancel</button>
                        {/* modal update */}
                        <button className="btn btn-success text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Update Date</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="">
                                    <h2 className="text-xl pb-1 mulish">select Booking Date:</h2>
                                    <form onSubmit={handleUpdate} className=" flex items-center gap-3">
                                        <DatePicker className="w-full rounded border px-4 py-3" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <input className="btn btn-success" type="submit" value="Update" />
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">

                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">X</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Review</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">

                                    <button className="btn btn-sm btn-circle bg-yellow-500 absolute right-2 top-2">✕</button>
                                </form>
                               { <Review name={name}></Review>}
                            </div>
                        </dialog>
                    </div>
                </td>
            </tr>


        </tbody>
    );
};

Bookings.propTypes = {
    booking: PropTypes.object,
    fetchBookings:PropTypes.func
    
};

export default Bookings;