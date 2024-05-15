import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddRoom from "../Pages/AddRoom/AddRoom";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Registration></Registration>
        },
        {
          path:"/addRoom",
          element: <AddRoom></AddRoom>
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
        },
        {
          path: "/rooms/:id",
          element:<RoomDetails></RoomDetails>,
          loader: ({params})=> fetch(`https://stay-spot.vercel.app/rooms/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
        
  
      ]
    },
  ]);

  export default router