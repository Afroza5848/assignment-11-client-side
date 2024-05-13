import { useEffect, useState } from "react";
import axios from 'axios'
import FeatureSec from "./FeatureSec";

const Feature = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('http://localhost:5000/rooms')
            setRooms(data)
        }
        getData()
    }, [])

    //console.log(rooms[0].feature);
    // axios.get(`http://localhost:5000/rooms/${rooms[]}`)
    return (
        <>
            {
                rooms.map(data => <FeatureSec key={data._id} data={data}></FeatureSec>)
            }
        </>
    );
};

export default Feature;