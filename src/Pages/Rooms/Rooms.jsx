import { useEffect, useState } from "react";
import axios from 'axios'
import Room from "./Room";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
    // const rooms = useLoaderData();
    // console.log(rooms);
    const [minPrice, setMinPrice] = useState(Number);
    const [maxPrice, setMaxPrice] = useState(Number);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios('https://stay-spot.vercel.app/rooms')
        setRooms(data)
    }
    
    console.log(rooms);
    const handleFilter = async () => {
        const data = await axios.get(`https://stay-spot.vercel.app/all_rooms?minPrice=${minPrice}&maxprice=${maxPrice}`)
        setRooms(data.data);
    }

    return (
        <div className="container mx-auto px-2">
            <div className="my-10">
                <h1 className="text-center text-5xl slab my-16 font-semibold">My Bookings Rooms</h1>
                <label>
                    Min Price:
                    <input className="border py-3 rounded mx-3"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </label>
                <label>
                    Max Price:
                    <input className="border py-3 rounded mx-3"
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </label>
                <button onClick={handleFilter} className="btn bg-yellow-500">Filter</button>
            </div>
            <div className="container mx-auto px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-8">
                <Helmet>
                    <title>Rooms</title>
                </Helmet>
                {
                    rooms?.map(room => <Room key={room._id} room={room}></Room>)
                }

            </div>
        </div>
    );
};

export default Rooms;