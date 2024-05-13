

import axios from 'axios';
import PropTypes from 'prop-types';

const FeatureSec = ({ data }) => {
    const { feature } = data;
    console.log(feature);
    axios.get(`http://localhost:5000/rooms?feature=${feature}`)
        .then(response => {
            console.log(response.data); // Access response data using response.data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    return (
        <div>

        </div>
    );
};

FeatureSec.propTypes = {
    data: PropTypes.object
};

export default FeatureSec;