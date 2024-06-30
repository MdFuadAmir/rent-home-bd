import Awards from "../Awards/Awards";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import RecentPoparty from "../RecentProparty/RecentPoparty";


const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Featured/>
            <RecentPoparty/>
            <Awards/>
        </div>
    );
};

export default Home;