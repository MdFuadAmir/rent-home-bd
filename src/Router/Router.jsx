import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Pricing from "../Pages/Pricing/Pricing";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    }
])
export default router;
