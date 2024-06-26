import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Root = () => {
    return (
        <div className="mx-w-7xl">
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;