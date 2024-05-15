import axios from "axios";
import { useEffect, useState } from "react";


const AuthReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/review-s')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    console.log(reviews);
    return (
        <div>
            
        </div>
    );
};

export default AuthReview;