import axios from "axios";
import { useEffect, useState } from "react";


const AuthReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://stay-spot.vercel.app/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    //console.log(reviews);
    return (
        <div>
            
        </div>
    );
};

export default AuthReview;