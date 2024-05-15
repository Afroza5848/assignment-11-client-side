
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../../Components/Review/Review';

const Room = ({ room }) => {
    //posted review---------------------------------
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://stay-spot.vercel.app/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
   
    const reviewCount = reviews.filter(review => review.room_name === room.name)
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">


            </div>
            <div className="space-y-4">
                <div className="space-y-2 relative">
                    <Link to={`/rooms/${room._id}`}>
                        <img src={room.photo1} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </Link>
                    <div className="flex items-center text-xl">
                        <span className='text-2xl slab font-semibold'>{room.name}</span>
                    </div>
                    <p className={room.status === "Available" ? 'text-green-600 font-semibold text-xl' : 'text-red-500 font-semibold text-xl'} >{room.status}</p>
                    <span className="absolute px-4 py-2 bg-[#949433b9] border border-gray-300 text-white slab top-2 left-3">Per Night Price ${room.price}</span>
                    <span className='text-xl font-bold mulish'>Total Review: {reviewCount.length}</span>
                </div>
                {
                    room.status === "Unavailable" ? <button className="btn bg-yellow-500" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Review</button>
                        :
                        <button className="btn bg-yellow-500" disabled onClick={() => document.getElementById('my_modal_3').showModal()}>Add Review</button>
                }
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">

                            <button className="btn btn-sm btn-circle bg-yellow-500 absolute right-2 top-2">✕</button>
                        </form>
                        <Review></Review>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.object
};

export default Room;