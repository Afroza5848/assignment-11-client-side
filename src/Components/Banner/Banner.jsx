// import video from '../../assets/image/video.mp4'

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-[80vh]">
                {/* Video Background */}
                <video autoPlay loop muted className="w-full h-full object-cover">
                    {/* <source className='w-full' src="https://res.cloudinary.com/dehz2y6fq/video/upload/v1715343868/video_s6prca.mp4" type="video/mp4" /> */}
                    
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#33333363] "></div>

                {/* Text */}
                <div className="absolute inset-0 flex container mx-auto px-2 items-center ">
                    <div className=" text-left">
                        <h1 className="md:text-7xl text-5xl font-bold text-white mulish md:leading-[86px]">Get Your <span className='text-yellow-500 slab font-extrabold'>Dream</span><br />Hotel Room</h1>
                        <p className="mt-4 text-xl text-white"> We are the best hotel. We have experienced have 30 years.  Do not worry <br /> about our service</p>
                        <a href="#_" className="relative inline-block text-lg group mt-5">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-500 transition-colors duration-300 ease-out border-2 border-yellow-500 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-500 group-hover:-rotate-180 ease"></span>
                                <span className="relative mulish font-semibold">Explore Now</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;