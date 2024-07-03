import Packege from "../../Components/Packege/Packege";
import background from"../../assets/pricing.jpg"

const Pricing = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="bg-center">
                <div className="bg-black bg-opacity-50 px-4 md:px-36 py-36">
                <p className="text-xl text-white font-sans">30 days money back guarantee</p>
                <h1 className="mt-2 font-bold font-sans text-2xl md:text-5xl text-white">No Extra Fees. Friendly Support</h1>
                </div>
            </div>
            <Packege/>
            
        </div>
    );
};

export default Pricing;