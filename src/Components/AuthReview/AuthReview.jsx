import axios from "axios";
import { useEffect, useState } from "react";
import Reviewer from "./Reviewer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const AuthReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://stay-spot.vercel.app/review-s')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    console.log(reviews);
    return (
        <div className="container mx-auto px-2 my-20 ">
            <div className="my-10">
                <h2 className="text-center text-5xl slab font-semibold">People What Are Saying</h2>
            </div>
            <div className="w-full">
                <Swiper

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },

                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'1'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination , EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        reviews?.map((review, idx) => <SwiperSlide key={idx}>
                            <Reviewer review={review}></Reviewer>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>



        </div>
    );
};

export default AuthReview;