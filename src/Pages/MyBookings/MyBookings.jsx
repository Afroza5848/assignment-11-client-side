import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/bookings/${user.email}`)
            .then(data => {
                setData(data.data)
            })
    }, [user])
    console.log(data);
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
                                <td className=" flex flex-col items-center justify-center">
                                    <div className=" flex items-center gap-3 justify-center lg:flex-row flex-col lg:mt-10">
                                        <button className="btn btn-error text-white">Cancel</button>
                                        <button className="btn btn-success text-white">Update</button>
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