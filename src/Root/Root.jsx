import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import Questions from "../Components/Questions/Questions";


const Root = () => {
    return (
        <div className="mx-w-7xl">
            <Navber/>
            <Outlet/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default Root;