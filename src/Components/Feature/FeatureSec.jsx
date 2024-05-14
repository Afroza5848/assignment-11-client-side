

import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const FeatureSec = ({ data }) => {
    
    const [features, setFeatures] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/room/${data.feature}`)
    //     .then(response => {
    //         setFeatures(response.data); // Access response data using response.data
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // },[data.feature])
    // console.log(features);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 container mx-auto'>
            {
                features.map(feature => <div key={feature._id} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={feature.photo1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{feature.name}</h2>
                            <p className="dark:text-gray-800">{feature.massage}</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>)
            }
        </div>
    );
};

FeatureSec.propTypes = {
    data: PropTypes.object
};

export default FeatureSec;