
import { Link, useLoaderData } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import PostedReview from "../../Components/PostedReview/PostedReview";
import { Helmet } from "react-helmet-async";
//import toast from "react-hot-toast";


const RoomDetails = () => {
    //const navigate = useNavigate()
    

    useEffect(() => {

        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios('https://stay-spot.vercel.app/rooms')
        console.log(data);
    }
    const room = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const { _id, name, massage, photo1, photo2, photo3, photo4, price, size, offer, status } = room;
    // const  = new Date(startDate).toLocaleDateString();
    // swiper
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  
    const handleConfirm = (id, preStatus, status) => {
        axios.patch(`https://stay-spot.vercel.app/rooms/${id}`, { status })
            .then(res => {
                console.log(res.data);
                toast.success('Booked confirmed!')
                getData();
            })
        const myRoom = {
            name,
            massage,
            photo1,
            photo2,
            photo3,
            photo4,
            price,
            size,
            offer,
            status,
            user_email: user?.email,
            user_name: user?.displayName,
            startDate: new Date().toLocaleDateString().split('/').join('-'),
            room_id:_id
        }
        axios.post('https://stay-spot.vercel.app/bookings', myRoom)
            .then(data => {
                console.log(data.data);
            })
    }

    return (
        <div className="container mx-auto px-2 grid lg:grid-cols-4 grid-cols-1 gap-6 my-12">
            <Helmet>
                <title>Room Details</title>
            </Helmet>
            <div className="rounded-md shadow-md col-span-3  dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-600">Somewhere</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>


                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="md:h-[60vh] h-[40vh] w-full rounded" src={photo1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="md:h-[60vh] h-[40vh] w-full rounded" src={photo2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="md:h-[60vh] h-[40vh] w-full rounded" src={photo3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="md:h-[60vh] h-[40vh] w-full rounded" src={photo4} alt="" />
                    </SwiperSlide>


                    <div className="autoplay-progress w-12 h-12 absolute bottom-12 z-20 right-4 bg-transparent" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" ></circle>
                        </svg>
                        <span className="border-2 border-slate-900 px-3 py-2 rounded-full" ref={progressContent}></span>
                    </div>
                </Swiper>

                {/* swiper */}

                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" title="Like post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Add a comment" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Share post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" title="Bookmark post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h2 className="text-5xl slab font-bold">{name}</h2>
                        <p>{massage}</p>

                    </div>
                    <div className="space-y-3">
                        <p className="text-2xl">
                            For 1 Night
                            <span className="text-4xl font-semibold text-yellow-500 slab"> BDT {price}</span>
                        </p>
                        <p className="text-xl">
                            Room Size :
                            <span className="text-2xl font-semibold text-yellow-500 slab"> {size} Sq Fit </span>
                        </p>
                        <p className="text-2xl">
                            Availability :
                            <span className="text-xl font-semibold text-white px-3 py-1 ml-4 bg-green-500 rounded slab"> {status}  </span>
                        </p>
                        <p className="text-2xl">
                            Special Offer :
                            <span className="text-xl font-semibold text-yellow-500 px-3  ml-2  rounded slab"> {offer ? offer : 'No Offer Available'}  </span>
                        </p>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {
                            status === 'Unavailable' ? <Link to={user || "/login"}> <button id="book" className="btn px-5 py-3 bg-yellow-500" disabled onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button></Link> 
                            :
                            <Link to={user || "/login"}> <button id="book" className="btn px-5 py-3 bg-yellow-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button></Link>
                        }
                       {/* <Link to={user || "/login"}> <button id="book" className="btn px-5 py-3 bg-yellow-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button></Link> */}

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{name}</h3>
                                <p className="py-4">{massage}</p>
                                <p className="text-2xl">
                                    For 1 Night
                                    <span className="text-4xl font-semibold text-yellow-500 slab"> BDT {price}</span>
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal  */}
                                        <button onClick={() => handleConfirm(_id, status, 'Unavailable')} className="btn bg-yellow-600">Confirm</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-gray-100 p-10 rounded shadow-lg">
                <div className="">
                    <h2 className="text-xl pb-1 mulish">select Booking Date:</h2>
                    <DatePicker className="w-full rounded border px-4 py-3" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div>
                    <PostedReview></PostedReview>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;