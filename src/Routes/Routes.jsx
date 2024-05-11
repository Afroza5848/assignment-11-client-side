import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddRoom from "../Pages/AddRoom/AddRoom";


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
        }
      ]
    },
  ]);

  export default router