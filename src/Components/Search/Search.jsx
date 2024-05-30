
import axios from 'axios';
import PropTypes from 'prop-types';

const Search = ({setRooms}) => {
    // handle search functionality
    const handleSearch = async (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log('search', search);
        const { data } = await axios.get(`https://stay-spot.vercel.app/search_room?search=${search}`)
        setRooms(data);
        e.target.reset();
    }
    return (
        <form onSubmit={handleSearch} className="join ">
            <input className="input input-bordered join-item" name="search" placeholder="Property Name" />
            <input type="submit" className="btn join-item bg-yellow-500" value="Search" />
        </form>
    )
};

Search.propTypes = {
    setRooms:PropTypes.func
};

export default Search;