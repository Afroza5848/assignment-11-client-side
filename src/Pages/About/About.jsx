import { Helmet } from 'react-helmet-async';
import image1 from '../../assets/image/1.jpg'
import image2 from '../../assets/image/2.jpg'

const About = () => {
    return (
        <div className="">
            <div >
                <section className=" dark:text-gray-800">
                    <Helmet>
                        <title>About Us</title>
                    </Helmet>
                    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900 slab">About Us</h2>
                            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Welcome to Borecello Hotel, where comfort meets luxury and every stay is a memorable experience. Nestled in the heart of London, our hotel offers a perfect blend of modern elegance and timeless charm.</p>
                        </div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900 slab">Our Story</h3>
                                <p className="mt-3 text-lg dark:text-gray-600">Borecello was established in 1987 with the vision of creating a sanctuary where guests can escape the hustle and bustle of everyday life. Inspired by the rich cultural heritage and stunning natural beauty of [Location], our founders set out to design a hotel that reflects the unique character and warmth of its surroundings.</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Our Rooms and Suites</h4>
                                            <p className="mt-2 dark:text-gray-600">Each of our rooms and suites is thoughtfully designed to offer the ultimate in comfort and style. From plush bedding and spacious bathrooms to state-of-the-art amenities and breathtaking views, every detail has been carefully curated to ensure your stay is nothing short of exceptional. </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Dining Experience</h4>
                                            <p className="mt-2 dark:text-gray-600">At Stay spot, we believe that dining is an integral part of the travel experience. Our on-site restaurant, Borecello, offers a delectable menu featuring both local and international cuisine, crafted with the freshest ingredients</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Amenities and Services</h4>
                                            <p className="mt-2 dark:text-gray-600">We pride ourselves on offering a range of amenities designed to enhance your stay. Enjoy a refreshing dip in our outdoor pool, stay active in our fully-equipped fitness center, or indulge in a rejuvenating treatment at our spa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="mt-10 lg:mt-0">
                                <img src={image1} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div className="lg:col-start-2">
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900 slab">Our Commitment to Sustainability</h3>
                                    <p className="mt-3 text-lg dark:text-gray-600">we are dedicated to promoting sustainable tourism practices. From energy-efficient lighting and water conservation initiatives to sourcing local and organic products for our restaurant, we strive to minimize our environmental impact and support the local community.</p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Luxarious Room</h4>
                                                <p className="mt-2 dark:text-gray-600">For those traveling on business, our state-of-the-art conference facilities and business center provide everything you need to stay connected and productive.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Beautiful Senarios</h4>
                                                <p className="mt-2 dark:text-gray-600"> Over the years, we have grown and evolved, but our commitment to excellence and our passion for hospitality remain unchanged.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-500 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Join Us</h4>
                                                <p className="mt-2 dark:text-gray-600">Discover the perfect blend of luxury, comfort, and hospitality at Borecello. Whether you are planning a weekend getaway, a family vacation, or a corporate event, we look forward to welcoming you and making your stay with us truly unforgettable.

</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                    <img src={image2} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;