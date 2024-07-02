import { BiCheck } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const dataList =[
    {
        id:1,
        name: <h1 className="text-xl font-bold">Start Basic</h1>,
        price: "29",
        month:"per user, per month",
        uptime:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>99.5% Uptime Guarantee</div>,
        bandwidth:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>120GB CDN Bandwidth</div>,
        storage:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>5GB Cloud Storage</div>,
        support:<div className="flex gap-2 items-center"><div className="bg-red-100 rounded-full"><IoCloseSharp size={25} color="red"/></div>Personal Help Support</div>,
        sla:<div className="flex gap-2 items-center"><div className="bg-red-100 rounded-full"><IoCloseSharp size={25} color="red"/></div>Enterprise SLA</div>,
        button:<div className="w-full text-green-400 font-senibold rounded-full border-2 border-green-200 bg-white hover:bg-slate-50 text-xl btn">Start Basic</div>
    },
    {
        id:2,
        name: <button className="btn px-6 bg-orange-500 text-white text-lg font-bold rounded-full">Start Basic</button>,
        standard:"Standard",
        price: "49",
        month:"per user, per month",
        uptime:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>99.5% Uptime Guarantee</div>,
        bandwidth:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>150GB CDN Bandwidth</div>,
        storage:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>10GB Cloud Storage</div>,
        support:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>Personal Help Support</div>,
        sla:<div className="flex gap-2 items-center"><div className="bg-red-100 rounded-full"><IoCloseSharp size={25} color="red"/></div>Enterprise SLA</div>,
        button:<div className="w-full text-white font-senibold rounded-full border-2 border-green-200 bg-green-400 hover:bg-green-500 text-xl btn">Start Standard</div>
    },
    {
        id:3,
        name:<h1 className="text-xl font-bold">Platinum</h1>,
        price: "79",
        month:"2 user, per month",
        uptime:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>99.5% Uptime Guarantee</div>,
        bandwidth:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>120GB CDN Bandwidth</div>,
        storage:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>5GB Cloud Storage</div>,
        support:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>Personal Help Support</div>,
        sla:<div className="flex gap-2 items-center"><div className="bg-green-100 rounded-full"><BiCheck size={25} color="green"/></div>Enterprise SLA</div>,
        button:<div className="w-full text-green-400 font-senibold rounded-full border-2 border-green-200 bg-white hover:bg-slate-50 text-xl btn">Start Platinum</div>
    },
]

const Packege = () => {
    return (
        <div className="mt-12">
            {/* header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-5xl font-mono font-bold">Select Your Package</h1>
                <div className="flex justify-center">
                <p className="text-gray-400 md:w-1/2 text-center">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-24 mt-12">
                {
                    dataList.map((data) => <div key={data.id} className="py-8 px-6 text-center bg-white rounded-md">
                        <div>{data.name}</div>
                        <h3 className="mt-4 font-bold text-xl">{data.standard}</h3>
                        <h1 className="text-3xl md:text-6xl font-bold my-3">${data.price}</h1>
                        <p>{data.month}</p>
                        <div className="space-y-4 my-6 text-lg text-left">
                        <div>{data.uptime}</div>
                        <div>{data.bandwidth}</div>
                        <div>{data.storage}</div>
                        <div>{data.support}</div>
                        <div>{data.sla}</div>
                        </div>
                        <div>{data.button}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Packege;