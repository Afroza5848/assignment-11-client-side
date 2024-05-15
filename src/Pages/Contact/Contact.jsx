import { Helmet } from 'react-helmet-async';
import bg from '../../assets/image/5.jpg'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="hero w-full h-[90vh]" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay "></div>
                <div className="lg:w-[40%] w-[90%] mx-auto  text-neutral-content">

                    <section className="p-6 border dark:text-gray-800">
                        <form className="w-full  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                            <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                            <div>
                                <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                                <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow dark:bg-gray-100"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-yellow-500 focus:dark:ring-yellow-500 hover:dark:ring-yellow-500 dark:text-gray-50">Send</button>
                            </div>
                        </form>
                    </section>

                </div>
            </div>

        </div>
    );
};

export default Contact;