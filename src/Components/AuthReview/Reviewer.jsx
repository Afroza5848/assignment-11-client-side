

// eslint-disable-next-line react/prop-types
const Reviewer = ({ review }) => {
    // eslint-disable-next-line react/prop-types
    const { username, rating, comment, timestamp, photoURL } = review;
    return (
        <div>
            <div className="flex flex-col max-w-xl  my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-yellow-600">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p>{comment}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-yellow-500-">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-yellow-600 dark:text-gray-50">
                    <img src={photoURL} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 " />
                    <p className="text-xl font-semibold leading-tight">{username}</p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className="text-sm uppercase">{rating}</p>
                    <p className="text-sm uppercase">{timestamp}</p>
                </div>
            </div>


        </div>
    );
};

export default Reviewer;