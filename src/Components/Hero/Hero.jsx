import bgimg from "../../assets/istockphoto-2074574922-612x612.jpg"
import { FiSearch } from "react-icons/fi";
const Hero = () => {
    return (
        <div>
            <div className=" h-screen w-full flex flex-col items-center justify-center bg-center" style={{backgroundImage:`url(${bgimg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-6xl font-bold text-white">Search Your Next</h1>
                <h1 className="text-3xl md:text-6xl font-bold text-white">Home</h1>
                <p className="text-white">Find new & featured property located in your local city.</p>
                </div>
                <div className="rounded-md bg-white p-4 gap-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mt-4">
                    <p className="text-gray-400">City/Street</p>
                    <input
  type="text"
  placeholder="Location"
  className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="mt-4">
                    <p className="text-gray-400">Property Type</p>
                    <input
  type="text"
  placeholder="Property Type"
  className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="mt-4">
                    <p className="text-gray-400">Price Range</p>
                    <input
  type="text"
  placeholder="Price Range"
  className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div className="flex justify-between items-center gap-3 mt-4">
                        <p className="font-medium text-xl">Advance Filter</p>
                        <button className="btn bg-green-400 text-white"><FiSearch size={20}/></button>
                    </div>
                </div>
              
            </div>
        </div>

    );
};

export default Hero;