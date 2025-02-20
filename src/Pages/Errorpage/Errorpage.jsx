import { useLottie } from 'lottie-react';
import error from '../../assets/image/error.json';
import { Link } from 'react-router-dom';


const Errorpage = () => {
    const options = {
        animationData: error,
        loop: true
    };
    const { View } = useLottie(options);
    
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center container mx-auto dark:bg-gray-50 my-8">
            <diV>
                <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                                <span className="sr-only">Error</span>404
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                            <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                            <Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-orange-600 dark:text-gray-50">Back to homepage</Link>
                        </div>
                    </div>
                </section>
            </diV>
            <diV>
                {View}
            </diV>
        </div>
    );
};

export default Errorpage;