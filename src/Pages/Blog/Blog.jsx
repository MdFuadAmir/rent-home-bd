import RecentPoparty from "../../Components/RecentProparty/RecentPoparty";
import background from"../../assets/blog.jpg"

const Blog = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="bg-center mb-12">
                <div className="bg-black bg-opacity-50 px-4 md:px-36 py-36">
                <p className="font-bold text-2xl text-white font-sans">Blog</p>
                <h1 className="mt-2 font-bold font-sans text-2xl md:text-5xl text-white">Blog Grid - Our Blogs</h1>
                </div>
            </div>
            <RecentPoparty/>
        </div>
    );
};

export default Blog;