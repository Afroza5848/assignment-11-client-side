import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import { IoCaretDownSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLink = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        } ><a>Home</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>

        <NavLink to="/bookings" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        }><a>My Bookings</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>

        <NavLink to="/rooms" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        }><a>Rooms</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>
        <NavLink to="/addRoom" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        }><a>Add Rooms</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        }><a>About Us</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive
                ? "text-yellow-500 font-medium text-xl eb-serif border-b-2 flex items-center justify-center gap-1  border-yellow-500"
                : isPending
                    ? "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
                    : "text-white flex items-center justify-center gap-1 font-semibold text-xl mulish"
        }><a>Contact Us</a><IoCaretDownSharp className='text-sm text-yellow-500 mt-2' /></NavLink>
    </>

    return <>
        {/* top navbar */}
        <div className='bg-yellow-500'>
            <div className="navbar container mx-auto px-2">
                <div className="lg:flex flex-1 items-center lg:gap-4 gap-2 lg:flex-row flex-col hidden">
                    <span className='flex items-center gap-2 text-white font-medium text-lg'><IoMdCall className='text-gray-800' />Need Support? +00-4X6-634-781</span>
                    <span className='flex items-center gap-2 text-white font-medium text-lg'><FaEnvelope className='text-gray-800' />info@themevessel.com</span>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end flex justify-center items-center gap-4 ">
                        <div>
                            {
                                user ? <Link to="/login" onClick={() => logOut()} className="px-4 py-2 rounded-md text-white border bg-transparent  hover:bg-white hover:text-yellow-500 eb-serif font-medium text-xl">Logout</Link>
                                    :
                                    <div className="space-x-3 flex  gap-2">
                                        <Link to="/login" className="px-4 py-2 rounded-md text-white border bg-transparent  hover:bg-white hover:text-yellow-500 eb-serif font-medium text-xl">Login</Link>
                                        <Link to="/register" className="px-4 py-2 rounded-md text-white border bg-transparent  hover:bg-white hover:text-yellow-500 eb-serif font-medium text-xl">Register</Link>
                                    </div>
                            }
                        </div>

                        {
                            user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>

        {/* nav link */}
        <div className='bg-gray-900 py-2'>
            <div className="navbar container mx-auto px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52  bg-gray-900 space-y-5">
                            {navLink}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='md:w-[20%] w-[35%]' src={logo} alt="" />
                        <h2 className='lg:text-4xl text-2xl font-normal text-yellow-500'>Stay<span className='slab text-white lg:text-5xl text-4xl'>Spot</span></h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end lg:flex hidden">
                    <a href="#_" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-500 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative mulish font-semibold">Booking System</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </div>
            </div>
        </div>
    </>;
};

export default Navbar;