// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination } from 'swiper/modules'

import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureSec = () => {

    const [features, setFeatures] = useState([]);
    useEffect(() => {
        axios.get(`https://stay-spot.vercel.app/rooms-s`)
            .then(response => {
                setFeatures(response.data); // Access response data using response.data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])


    console.log(features);
    return <>
        <div className='mt-14 mb-10'>
            <h2 className='text-5xl slab text-center font-semibold '>Our Features Rooms</h2>
            <p className='text-center'>Wake up dull living room walls with creative decor ideas. Transform stark, sterile spaces by adding warm, welcoming accents that will make <br /> the living room the most inviting space in the house.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 container mx-auto my-12'>

            {
                features.map(feature => <div key={feature._id} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    {/* <img src={feature.photo1} alt=""  /> */}
                    {/* swiper */}
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            // shadow: true,
                            // slideShadows: true,
                            // shadowOffset: 20,
                            // shadowScale: 0.94,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[ Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src={feature.photo1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src={feature.photo2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src={feature.photo3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src={feature.photo4} />
                        </SwiperSlide>
                    </Swiper>
                    {/* swiper */}
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{feature.name}</h2>
                            <p className="dark:text-gray-800">{feature.massage.slice(0,200)}</p>
                        </div>
                        <Link to={`/rooms/${feature._id}`}>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-yellow-500 dark:text-gray-50">Book Now</button>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    </>;
};

FeatureSec.propTypes = {
    data: PropTypes.object
};

export default FeatureSec;