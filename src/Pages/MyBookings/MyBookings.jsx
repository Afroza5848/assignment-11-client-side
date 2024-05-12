import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/bookings/${user.email}`)
        .then(data => {
            setData(data.data)
        })
    },[user])
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default MyBookings;