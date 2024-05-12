import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddRoom from "../Pages/AddRoom/AddRoom";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";


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
          element: <RoomDetails></RoomDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router