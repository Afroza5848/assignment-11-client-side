import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

//import axios from "axios";


const AddRoom = () => {
    const {user} = useContext(AuthContext)
    const [feature , setFeature] = useState('');
    const [status,setStatus] = useState('');
   
    const handleAddRoom = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const massage = form.massage.value;
        const photo1 = form.thumbnail1.value;
        const photo2 = form.thumbnail2.value;
        const photo3 = form.thumbnail3.value;
        const photo4 = form.thumbnail4.value;
        const price = parseInt(form.price.value);
        const size = form.size.value;
        const offer = form.offer.value;
        const user_name = user?.displayName;
        const user_email = user?.email;

        const rooms = { name, massage, photo1,photo2,photo3,photo4, price, size, offer,status,feature, user_name, user_email };
        console.log(rooms);


            fetch('https://stay-spot.vercel.app/rooms', {
                method: "POST",
                headers:{
                    'content-type': "application/json",
                },
                body: JSON.stringify(rooms)
            })
                .then(res => res.json())
                .then(data => {
                   if(data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "Add New Art&Craft item Successfully.",
                        icon: "success"
                    });
                    form.reset();
                   }
                })
    }
    const handleFeature = e => {
        setFeature(e.target.value)
    }
    const handleStatus = e => {
        setStatus(e.target.value)
    }


    return (
        <div>
            <Helmet>
                <title>AddRooms</title>
            </Helmet>
            <section className="p-6 my-8 text-gray-900  py-10">
                <form onSubmit={handleAddRoom} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="bg-[#cece4b19] border-2 border-yellow-400 shadow-xl lg:w-7/12 w-11/12 mx-auto p-8 rounded-md ">
                        <div className="space-y-2 text-center">
                            <p className="font-medium poppins text-3xl poppins text-yellow-600">Add Room Information</p>
                            <p className="text-sm">Click on the Add Room button to initiate the process of adding a new item.!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl poppins">Name</label>
                                <input id="itemName" type="text" name="name" placeholder=" Write Item Name" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="lastname" className="text-xl poppins">Short description</label>
                                <textarea id="bio" cols="6" rows="8" name="massage" placeholder="Write short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 bg-white focus:dark:ring-orange-600 dark:border-gray-300 pt-2 pl-2 "></textarea>
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl mulish">Thumbnail One</label>
                                <input id="itemName" type="text" name="thumbnail1" placeholder=" Write your Thumbnail URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl mulish">Thumbnail Two</label>
                                <input id="itemName" type="text" name="thumbnail2" placeholder=" Write your Thumbnail URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl mulish">Thumbnail Three</label>
                                <input id="itemName" type="text" name="thumbnail3" placeholder=" Write your Thumbnail URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="itemName" className="text-xl mulish">Thumbnail Four</label>
                                <input id="itemName" type="text" name="thumbnail4" placeholder=" Write your Thumbnail URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-xl mulish">Per Night Price</label>
                                <input id="itemName" type="number" name="price" placeholder=" Write your price" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-xl mulish">Room Size</label>
                                <input id="itemName" type="text" name="size" placeholder=" Write your Room size" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="lastname" className="text-xl mulish">Featured</label>
                                <select onChange={handleFeature} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                    <option className="" disabled selected>Select Feature</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-xl poppins">special Offer</label>
                                <input id="itemName" type="text" name="offer" placeholder=" Write your special offer" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl poppins">Stock Status</label>
                                <select onChange={handleStatus} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                    <option className="" disabled selected>Select Stock status</option>
                                    <option value="Available">Available</option>
                                </select>
                            </div>

                            <div className="col-span-full ">
                                <input className="bg-yellow-500 font-bold slab text-white py-4 px-2 w-full rounded-md mx-auto text-xl text-center" type="submit" value="Add Room" />
                            </div>

                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddRoom;