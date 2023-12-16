import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:'/',
                element:<Home />
            },{
                path:'login',
                element:<Login/>
            },{
                path:'signUp',
                element:<SignUp/>
            },{
                path:'checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=> fetch(`http://localhost:2000/services/${params.id}`)
            },{
                path:'bookings',
                element:<PrivateRoute><Bookings/></PrivateRoute>
            }
        ]
    }
]);
export default router