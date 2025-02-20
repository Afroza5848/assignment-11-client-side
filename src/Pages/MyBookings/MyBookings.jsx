import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import Bookings from "../../Components/Bookings/Bookings";
import { Helmet } from "react-helmet-async";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([]);

    const fetchBookings = () => {
        axios.get(`https://stay-spot.vercel.app/bookings/${user.email}`, { withCredentials: true })
        .then(res => {
            setData(res.data)
        })
    }
    useEffect(() => {
       fetchBookings();

    }, [user])


    console.log(data);
    return (
        <div className="container mx-auto px-2 my-8">
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table bg-slate-50">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl bg-gray-200">
                            <th className="text-gray-900 mulish bg-gray-200">Room Image</th>
                            <th className="text-gray-900 mulish bg-gray-200">Name</th>
                            <th className="text-gray-900 mulish bg-gray-200">Room Size</th>
                            <th className="text-gray-900 mulish bg-gray-200">Price Per Night</th>
                            <th className="text-gray-900 mulish bg-gray-200">Date</th>
                            <th className="text-gray-900 mulish bg-gray-200">Actions</th>
                        </tr>
                    </thead>

                    {
                        data?.map(booking => <Bookings key={booking._id} fetchBookings={fetchBookings} booking={booking}></Bookings>)
                    }


                </table>
            </div>
        </div>
    );
};

export default MyBookings;