import { MdFavorite } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import { BsFillHandbagFill } from "react-icons/bs";
const dataList =[
    {
        id:1,
        name:"Blue Burmin Award",
        total:"32 M",
        img: <IoTrophy/>,
    },
    {
        id:2,
        name:"Mimo X11 Award",
        total:"43 M",
        img: <BsFillHandbagFill/>,
    },
    {
        id:3,
        name:"Australian UGC Award",
        total:"51 M",
        img: <FaLightbulb/>,
    },
    {
        id:4,
        name:"IITCA Green Award",
        total:"42 M",
        img: <MdFavorite/>,
    },
]
const Awards = () => {
    return (
        <div className="py-12 bg-slate-800">
            <div>
                {/* header */}
            <div className="text-center flex flex-col justify-center items-center space-y-2">
                <p className="text-green-500">Our Awards</p>
                <h1 className="text-2xl md:text-3xl font-mono font-bold text-white w-full md:w-3/5">Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>
            </div>
            {/* awards */}
            <div className="my-12 px-4 md:px-12 gap-4 flex flex-col md:flex-row items-center justify-around">
                {
                    dataList.map((data) => <div key={data.id} className="flex flex-col justify-center items-center text-center">
                        <div className="text-white text-5xl p-4 mb-3 bg-gray-400 rounded-tr-badge bg-opacity-20 rounded-bl-badge">{data.img}</div>
                        <div className="text-ctnter">
                        <h1 className="text-white font-bold text-5xl">{data.total}</h1>
                        <p className="text-gray-400 mt-6">{data.name}</p>
                        </div>
                     </div>)
                }

            </div>

            </div>
            
        </div>
    );
};

export default Awards;