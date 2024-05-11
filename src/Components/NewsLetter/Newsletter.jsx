import { useState } from "react";
import news from '../../assets/image/back.jpg';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your logic to subscribe the user here
        console.log('Subscribed with email:', email);
        // Clear the input field after submission
        setEmail('');
    };
    return (
        <div>

            <div className="hero h-[90vh]" style={{ backgroundImage: `url(${news})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content  text-neutral-content">
                    <div className="md:w-8/12">
                        <div className="bg-[#ffffffB9] border-2 border-white shadow-lg rounded-lg p-8 mx-auto">
                            <h2 className="text-4xl text-yellow-500 font-extrabold slab mb-4">Welcome!</h2>
                            <h2 className="text-2xl text-gray-900 font-bold mb-4">Subscribe to Our Newsletter</h2>
                            <p className="text-gray-900 mb-6 ">Stay updated with our latest updates, deals, and exclusive offers!Please enter your email address below and select the checkboxes next to the notices you would like to receive, then click the “Sign Up” button. For Brain Awareness Week, we collect information for “Region” as some email announcements are location specific.</p>
                            <hr />
                            <p className="text-gray-900 mt-5">We collect this data to comply with your request for information. We also use it, aggregated with that of others who give feedback, to compile statistics that we do not share publicly.</p>
                            <form onSubmit={handleSubmit} className="flex mt-6 flex-col items-center">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    value={email}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg"
                                    required
                                />
                                
                                <button type="submit" className="bg-yellow-500 text-white py-2 px-8 text-xl rounded-lg transition-colors duration-300 hover:bg-yellow-600">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;