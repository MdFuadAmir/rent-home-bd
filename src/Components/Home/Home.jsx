import Agents from "../Agents/Agents";
import Awards from "../Awards/Awards";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import Location from "../Location/Location";
import Packege from "../Packege/Packege";
import Questions from "../Questions/Questions";
import RecentPoparty from "../RecentProparty/RecentPoparty";


const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Featured/>
            <RecentPoparty/>
            <Awards/>
            <Location/>
            <Agents/>
            <Packege/>
            <Questions/>
        </div>
    );
};

export default Home;