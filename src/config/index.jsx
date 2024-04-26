import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement: <NotFound />
    }
])