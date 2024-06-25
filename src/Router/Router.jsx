import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Root/>
            }
            ]
    }
])
export default router;
