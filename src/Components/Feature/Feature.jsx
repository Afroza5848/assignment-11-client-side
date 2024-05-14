import { useEffect, useState } from "react";
import axios from 'axios'
import FeatureSec from "./FeatureSec";

const Feature = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('https://stay-spot.vercel.app/rooms')
            setRooms(data)
        }
        getData()
    }, [])

    //console.log(rooms[0].feature);
    // axios.get(`https://stay-spot.vercel.app/rooms/${rooms[]}`)
    return (
        <>
            {
                rooms.map(data => <FeatureSec key={data._id} data={data}></FeatureSec>)
            }
        </>
    );
};

export default Feature;