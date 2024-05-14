import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import axios from 'axios'

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
    // posted review---------------------------------
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://stay-spot.vercel.app/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    
   
    return (
        <div className="container mx-auto px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-8">
            {
                rooms?.map(room => <Link to={`/rooms/${room._id}`} key={room._id} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">


                    </div>
                        <div className="space-y-4">
                            <div className="space-y-2 relative">
                                <img src={room.photo1} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="flex items-center text-xs">
                                    <span>6 min ago</span>
                                </div>
                                <span className="absolute px-4 py-2 bg-[#949433b9] border border-gray-300 text-white slab top-2 left-3">Per Night Price ${room.price}</span>
                                <span>{reviews.length}</span>
                            </div>

                        </div>
                </Link>)
            }
        </div>
    );
};

export default Rooms;