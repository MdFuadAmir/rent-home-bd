import img1 from "../../assets/h1.png"
import img2 from "../../assets/h2.png"
import img3 from "../../assets/h3.png"
import img4 from "../../assets/h4.png"
import img5 from "../../assets/h6.png"


const datalist =[
    {
        id:1,
        img:img1,
        name:"Family House",
        proparty:"122 Property"
    },
    {
        id:2,
        img: img2,
        name:"House & Villa",
        proparty:"155 Property"
    },
    {
        id:3,
        img: img3,
        name:"Apartment",
        proparty:"300 Property"
    },
    {
        id:4,
        img: img4,
        name:"Office & Studio",
        proparty:"80 Property"
    },
    {
        id:5,
        img: img5,
        name:"Villa & Condo",
        proparty:"80 Property"
    },
]
const Featured = () => {
    return (
        <div className="my-24">
            {/* header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-5xl font-mono font-bold">Featured Property Types</h1>
                <p className="text-gray-400">Find All Type of Property.</p>
            </div>
            {/* card section */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-12 gap-4">
                {
                    datalist.map((data) => <div key={data.id} className="bg-white p-4 rounded-md items-center text-center flex flex-col justify-center space-y-3 hover:bg-green-400 hover:text-white duration-700 shadow-md">
                        <img src={data.img} alt="" className="w-24 h-24"/>
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <p className="text-lg text-gray-600">{data.proparty}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Featured;