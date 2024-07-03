import Featured from "../../Components/Featured/Featured";
import background from"../../assets/services.jpg"

const Services = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="bg-center">
                <div className="bg-black bg-opacity-50 px-4 md:px-36 py-36">
                <p className="font-bold text-2xl text-white font-sans">Services</p>
                <h1 className="mt-2 font-bold font-sans text-2xl md:text-5xl text-white">Services -All Services</h1>
                </div>
            </div>
            <Featured/>
        </div>
    );
};

export default Services;