import background from"../../assets/background.jpg"
import about from"../../assets/about.jpg"
const About = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="bg-black bg-opacity-50 px-4 md:px-36 py-36">
                <p className="font-bold text-2xl text-white font-sans">About Us</p>
                <h1 className="mt-2 font-bold font-sans text-2xl md:text-5xl text-white">About Us - Who We Are?</h1>
                </div>
            </div>
            <div className="mt-12 flex flex-col-reverse  md:flex-row justify-between items-center gap-6 px-4 md:px-12">
                <div className="w-full md:w-1/2">
                <h1 className=" text-2xl font-bold font-serif">Our Agency Story</h1>
                <p className="text-gray-500">Check out our company story and work process</p>
                <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn bg-green-500 rounded-full text-xl font-bold text-white px-8 hover:bg-green-400">More About Us</button>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={about} alt="" className=" rounded-md hover:scale-105 duration-500"/>
                </div>
            </div>
        </div>
    );
};

export default About;