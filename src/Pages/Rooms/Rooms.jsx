import { useEffect, useState } from "react";
import axios from 'axios'
import Room from "./Room";

const Rooms = () => {
    // const rooms = useLoaderData();
    // console.log(rooms);
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios('https://stay-spot.vercel.app/rooms')
            setRooms(data)
        }
        getData()
    },[])
    console.log(rooms);
    
    return (
        <div className="container mx-auto px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-8">
            {
                rooms?.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
    );
};

export default Rooms;