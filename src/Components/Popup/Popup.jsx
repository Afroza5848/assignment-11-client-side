import { useState, useEffect } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import offer from '../../assets/image/offer.json';
import { useLottie } from 'lottie-react';
const Popup = () => {
    const options = {
        animationData: offer,
        loop: true
      };
      const { View } = useLottie(options);   
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show the popup after 1 second
  
      return () => clearTimeout(timer);
    }, []);
  
    const closePopup = () => {
      setIsVisible(false);
    };
    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md mx-auto text-center">
                <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-800" onClick={closePopup}><IoCloseCircleSharp /></button>
                <h2 className="text-2xl font-bold mb-4 slab">Special Offer!</h2>
                <div>{View}</div>
                <p className='text-2xl'>Get 30% off on your first purchase. Use code: <strong className='text-yellow-500 slab'>WELCOME20</strong></p>
              </div>
            </div>
          )
        
    );
};

export default Popup;