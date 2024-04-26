import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Route from "../layout/Route"
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement: <NotFound />,
        children:[{
            index:true,
            element:<Home/>
        },
        {
           path: '/contacto',
           element: <Contact/> 
    }]
    }
])