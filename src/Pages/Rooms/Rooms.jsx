import { useEffect, useState } from "react";
import axios from 'axios'
import Room from "./Room";
import { Helmet } from "react-helmet-async";
import Search from "../../Components/Search/Search";

const Rooms = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [rooms, setRooms] = useState([]);
    console.log(typeof maxPrice);
    console.log(typeof minPrice);

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios.get('https://stay-spot.vercel.app/rooms')
        setRooms(data)
    }


    console.log(rooms);
    const handleFilter = async () => {
        const data = await axios.get(`https://stay-spot.vercel.app/all_rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
        setRooms(data.data);
    }
    
    return (
        <div className="container mx-auto px-2">
            <h1 className="text-center text-5xl slab my-16 font-semibold">My Bookings Rooms</h1>
            <div className="flex justify-between items-center lg:flex-row flex-col">
                <div className="my-10 px-2 flex lg:flex-row flex-col gap-4">

                    <label>
                        Min Price:
                        <input className="border py-3 rounded mx-3"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Max Price:
                        <input className="border py-3 rounded mx-3"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                        />
                    </label>
                    <button onClick={handleFilter} className="btn bg-yellow-500">Filter</button>
                </div>
                
                {/*  search functionality */}
                <Search setRooms={setRooms}></Search>
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