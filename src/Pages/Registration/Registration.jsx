import { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerLotte from '../../assets/image/register.json';
import logo from '../../assets/image/logo.png';
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useForm } from "react-hook-form"

const Registration = () => {
  const options = {
    animationData: registerLotte,
    loop: true
  };
  const { View } = useLottie(options);

  const { createUser, user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, photo } = data;

    if (password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 6 characters or longer.',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: "Your password should have at least one upperCase and one lowerCase characters",
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    }


    createUser(email, password, name, photo)
      .then(result => {
        console.log(result.user);
        //createUpdateProfile(name,photo)
        Swal.fire("User Create Successfully.");
        updateProfile(auth.currentUser, {
          ...user,
          displayName: name,
          photoURL: photo
        })
        navigate("/login")

      })
      .catch(error => {
        console.log(error.message)
        //Swal.fire(error.message);
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      })

  }
  return (
    <div className='flex justify-center items-center py-16 '>
      <div className='bg-gray-900 flex items-center  lg:flex-row flex-col gap-8 mx-auto overflow-hidden  rounded-lg shadow-lg w-7/12 py-10 '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-[15%] h-[10%] '
              src={logo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Get Your Free Account Now.
          </p>


          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text' {...register("name", { required: true })}
              />
              {errors.name && <span className='text-red-600 p-5'>This field is required</span>}
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text' {...register("photo", { required: true })}
              />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email' {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className='mt-4'>
              <div className='flex justify-between relative'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-10 right-4 text-yellow-500 text-xl'>
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPassword ? "text" : "password"} {...register("password", { required: true })}
              />
               {errors.password && <span>This field is required</span>}
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div className=' lg:w-1/2'>
          {View}
        </div>
      </div>
    </div>
  )
}

export default Registration