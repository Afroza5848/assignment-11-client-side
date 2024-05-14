import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Review = () => {

    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();


       
        // Generate timestamp
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formatDate = `${day}/${hours}:${minutes}:${seconds}`
        console.log(formatDate);
        // Create review object
        const review = {
            username: user?.displayName,
            rating,
            comment,
            formatDate
        };
        console.log(review);

        axios.post('http://localhost:5000/review', review)
            .then(res => {
                console.log(res.data);
                toast.success('Post Review Successfully');
            })


        // Reset form fields
        setRating(1);
        setComment('');

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        defaultValue={user?.displayName}
                        disabled
                        required
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating (1-5):
                    </label>
                    <input
                        id="rating"
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Math.max(1, Math.min(5, parseInt(e.target.value))))}
                        min={1}
                        max={5}
                        required
                        className="mt-1 border v p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Comment:
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        className="mt-1 p-2 border block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Submit Review
                    </button>
                </div>

            </form>
            <Toaster />
        </div>
    );
};

export default Review;