import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MyBookings = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const [control, setControl] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
          axios.get(`http://localhost:5000/bookings/${user.email}`)
            .then(data => {
                setData(data.data)
            })
    }, [user])
    // handle delete------------------------
    const handleCancel = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/bookings/${_id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            setControl(!control);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    // patch-------------------------------
    const handleUpdate = (e) => {
        {/* Open the modal using document.getElementById('ID').showModal() method */ }
        e.preventDefault();
        axios.patch(`http://localhost:5000/bookings/${data[0]._id}`,{startDate})
        .then(data => {
            console.log(data.data);
            
        })
    }


    return (
        <div className="container mx-auto px-2 my-8">
            <div className="overflow-x-auto">
                <table className="table bg-slate-50">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl bg-gray-200">
                            <th></th>
                            <th className="text-gray-900 mulish bg-gray-200">Room Image</th>
                            <th className="text-gray-900 mulish bg-gray-200">Name</th>
                            <th className="text-gray-900 mulish bg-gray-200">Room Size</th>
                            <th className="text-gray-900 mulish bg-gray-200">Price Per Night</th>
                            <th className="text-gray-900 mulish bg-gray-200">Date</th>
                            <th className="text-gray-900 mulish bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((booking, idx) => <tr key={booking._id} className="text-xl ">
                                <td>{idx + 1}</td>
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
                                <td>$ {booking.startDate}</td>
                                <td className=" flex flex-col items-center justify-center">
                                    <div className=" flex items-center gap-3 justify-center lg:flex-row flex-col lg:mt-10">
                                        <button onClick={() => handleCancel(booking._id)} className="btn btn-error text-white">Cancel</button>
                                        <button className="btn btn-success text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Update Date</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <div className="">
                                                    <h2 className="text-xl pb-1 mulish">select Booking Date:</h2>
                                                    <form onSubmit={handleUpdate}>
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
                                        {/* <button onClick={handleUpdate} className="btn btn-success text-white">Update</button> */}
                                        <button className="btn bg-yellow-500 text-white">Add Review</button>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBookings;