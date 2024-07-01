import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { GiLetterBomb } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
import profile1 from "../../assets/alone-boy-5411144_1280.jpg"
import profile2 from "../../assets/alone-boy-6129399_1280.jpg"
import profile3 from "../../assets/cute-7441224_1280.jpg"
import profile4 from "../../assets/girl-7543957_1280.jpg"
import profile5 from "../../assets/very-pic-so-very-pic-8097947_1280.jpg"
import profile6 from "../../assets/man-1161337_1280.jpg"
import { Link } from "react-router-dom";
const dataList = [
    {
        id:1,
        listings:"50 Listings",
        img:profile1,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> Liverpool, Canada</div>,
        name:"Sargam S. Singh",
    },
    {
        id:2,
        listings:"70 Listings",
        img:profile2,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> Montreal, Canada</div>,
        name:"Harijeet M. Siller",
    },
    {
        id:3,
        listings:"80 Listings",
        img:profile3,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> Denever, USA</div>,
        name:"Anna K. Young",
    },
    {
        id:4,
        listings:"51 Listings",
        img:profile4,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> 2272 Briarwood Drive</div>,
        name:"Michael P. Grimaldo",
    },
    {
        id:5,
        listings:"42 Listings",
        img:profile5,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> 2272 Briarwood Drive</div>,
        name:"Michael P. Grimaldo",
    },
    {
        id:6,
        listings:"38 Listings",
        img:profile6,
        location:<div className="flex justify-center items-center gap-2 text-gray-400"><IoLocationSharp size={20}/> Montreal, USA</div>,
        name:"Adam K. Jollio",
    }
] 

const Agents = () => {
    return (
        <div className="bg-slate-200 py-6">
            {/* header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-5xl font-mono font-bold">Our Featured Agents</h1>
                <div className="flex justify-center">
                <p className="text-gray-400 md:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 gap-4 mt-12">
                {
                    dataList.map((data) => <div key={data.id} className="p-6 bg-white rounded-md">
                        <button className="btn px-6 rounded-full bg-orange-500 text-white">{data.listings}</button>
                        <div className="flex justify-center my-4">
                        <img src={data.img} alt="" className="w-32 h-32 rounded-full border-2 border-gray-300 p-3"/>
                        </div>
                        <p>{data.location}</p>
                        <h1 className="text-center mt-2 text-xl font-bold">{data.name}</h1>
                        <div className="flex justify-center gap-4 mt-4">
                            <Link>
                            <FaFacebookF className="bg-gray-100 p-2 rounded-full" size={30} color="gray"/>
                            </Link>
                            <Link>
                            <FaLinkedin className="bg-gray-100 p-2 rounded-full" size={30} color="gray"/>
                            </Link>
                            <Link>
                            <FaTwitter className="bg-gray-100 p-2 rounded-full" size={30} color="gray"/>
                            </Link>
                            <Link>
                            <FaInstagram className="bg-gray-100 p-2 rounded-full" size={30} color="gray"/>
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center gap-6">
                            <button className="btn bg-green-400 text-white hover:bg-green-600"><GiLetterBomb size={30}/> Massage</button>
                            <button className="btn bg-black text-white hover:bg-slate-600"><FaPhone size={30}/></button>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Agents;