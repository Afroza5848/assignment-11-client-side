import axios from "axios";
import { useEffect, useState } from "react";

const useRoomData = () => {
    const [rooms,setRooms] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios('http://localhost:5000/rooms')
            setRooms(data)
        }
        getData()
    },[])
    return (
       <>
        {
            rooms?.map(room => {
                return room;
            })
        }
       </>
    )
};

export default useRoomData;