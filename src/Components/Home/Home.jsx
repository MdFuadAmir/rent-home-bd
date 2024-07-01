import Awards from "../Awards/Awards";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import Location from "../Location/Location";
import RecentPoparty from "../RecentProparty/RecentPoparty";


const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Featured/>
            <RecentPoparty/>
            <Awards/>
            <Location/>
        </div>
    );
};

export default Home;