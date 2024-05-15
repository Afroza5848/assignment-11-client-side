import axios from "axios";
import { useEffect, useState } from "react";


const PostedReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://stay-spot.vercel.app/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    console.log(reviews);
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-4">Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <div>
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                                <p className="text-lg font-semibold">{review.username}</p>
                                <p className="text-gray-500 mb-2">{review.timestamp}</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 mr-1">{'★'.repeat(review.rating)}</span>
                                    <span className="text-gray-400">{'★'.repeat(5 - review.rating)}</span>
                                </div>
                                <p className="mt-2">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default PostedReview;