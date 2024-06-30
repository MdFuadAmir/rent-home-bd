import img1 from "../../assets/p-1.png"
import img2 from "../../assets/p-2.png"
import img3 from "../../assets/p-4.png"
import img4 from "../../assets/p-5.png"
import img5 from "../../assets/p-6.png"
import img6 from "../../assets/p-7.png"
import { MdFavorite } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
const cardData = [
    {
        id:1,
        img:img1,
        name: "Red Carpet Real Estate",
        location: " 210 Zirak Road, Canada",
        sell:<div className="px-4 py-1 bg-orange-100 text-orange-400 font-bold rounded-md">For Rent</div>,
        price:"$3,700 /sqft",
        home:"Apartment"
    },
    {
        id:2,
        img:img2,
        name: "Fairmount Properties",
        location: " 5698 Zirak Road, NewYork",
        sell:<div className="px-4 py-1 bg-green-100 text-green-400 font-bold rounded-md">For Sale</div>,
        price:"$9,750 /sqft",
        home:"Condos"
    },
    {
        id:3,
        img:img3,
        name: "The Real Estate Corner",
        location: " 5624 Mooker Market, USA",
        sell:<div className="px-4 py-1 bg-orange-100 text-orange-400 font-bold rounded-md">For Rent</div>,
        price:"$5,860 /sqft",
        home:"Offices"
    },
    {
        id:4,
        img:img4,
        name: "Herringbone Realty",
        location: " 5621 Liverpool, London",
        sell:<div className="px-4 py-1 bg-green-100 text-green-400 font-bold rounded-md">For Sale</div>,
        price:"$7,540 /sqft",
        home:"Homes & Villas"
    },
    {
        id:5,
        img:img5,
        name: "Brick Lane Realty",
        location: " 210 Montreal Road, Canada",
        sell:<div className="px-4 py-1 bg-orange-100 text-orange-400 font-bold rounded-md">For Rent</div>,
        price:"$4,850 /sqft",
        home:"Commercial"
    },
    {
        id:6,
        img:img6,
        name: "Banyon Tree Realty",
        location: " 210 Zirak Road, Canada",
        sell:<div className="px-4 py-1 bg-green-100 text-green-400 font-bold rounded-md">For Sale</div>,
        price:"$2,742 /sqft",
        home:"Apartment"
    },
]

const RecentPoparty = () => {
    return (
        <div className="mb-24">
            {/* header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-5xl font-mono font-bold">Recent Property Listed</h1>
                <div className="flex justify-center">
                <p className="text-gray-400 md:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            {/* card section */}
            <div className="px-4 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cardData.map((data) => <div key={data.id} className=" rounded-md bg-white pb-4">
                        <img src={data.img} alt="" className=" rounded-t-md"/>
                        <div className="flex justify-between items-center mt-8 px-6">
                            <div>{data.sell}</div>
                            <MdFavorite size={25} color="#bec7d8"/>
                        </div>
                        <div className="px-6 mt-2 mb-6">
                            <h1 className="font-bold text-xl">{data.name}</h1>
                            <p className="flex items-center text-gray-400 gap-2"><FaLocationPin size={20}/>{data.location}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between px-6 gap-2 my-4 items-center">
                            <button className="btn bg-green-400 text-white fnt-bold text-xl hover:bg-green-600">{data.price}</button>
                            <p className="text-green-500 font-medium">{data.home}</p>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default RecentPoparty;