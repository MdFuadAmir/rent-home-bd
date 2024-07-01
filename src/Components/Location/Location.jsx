import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"
import bg4 from "../../assets/bg4.jpg"
import bg5 from "../../assets/bg5.jpg"
import bg6 from "../../assets/bg6.jpg"
const dataList =[
    {
        id:1,
        location:"New Orleans, Louisiana",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg1,
    },
    {
        id:2,
        location:"Jerrsy, United State",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg2,
    },
    {
        id:3,
        location:"Liverpool, London",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg3,
    },
    {
        id:4,
        location:"NewYork, United States",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg4,
    },
    {
        id:5,
        location:"Montreal, Canada",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg5,
    },
    {
        id:6,
        location:"California, USA",
        villas:"12 Villas",
        office:"07 Offices",
        apartments:"10 Apartments",
        bgImg: bg6,
    },
]

const Location = () => {
    return (
        <div className="my-24">
            {/* header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-5xl font-mono font-bold">Explore By Location</h1>
                <div className="flex justify-center">
                <p className="text-gray-400 md:w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
                {
                    dataList.map((data) => <div key={data.id} className=" bg-center rounded-md" style={{backgroundImage:`url(${data.bgImg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <div className="bg-black bg-opacity-40 text-white rounded-md text-center px-20 py-20">
                            <h1 className="font-bold text-xl">{data.location}</h1>
                            <div className="flex items-center text-center gap-4 justify-center">
                                <p>{data.villas}</p>
                                <p>{data.office}</p>
                                <p>{data.apartments}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Location;