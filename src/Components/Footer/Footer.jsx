

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-800 px-4 md:px-12 py-10">
            <form>
            <a className="btn text-white btn-ghost text-3xl font-mono">RENT<span className="text-5xl text-green-400">UP</span></a>
    <h6 className="text-white font-bold text-2xl">Do You Need Help With Anything?</h6>
    <p className="text-gray-400">Receive updates, hot deals, tutorials, discounts sent straignt in <br /> your inbox every month</p>
   <div className="my-2">
   <input type="email" placeholder="Enter your email" className="px-2 py-2"/>
   <button className="px-2 py-2 bg-green-400 text-white font-bold">Subscribe</button>
   </div>
  </form>
  <nav className="space-y-3">
    <h6 className="text-lg text-white">LAYOUTS</h6>
    <a className="link link-hover text-gray-400">Home Page</a>
    <a className="link link-hover text-gray-400">About Page</a>
    <a className="link link-hover text-gray-400">Service Page</a>
    <a className="link link-hover text-gray-400">Property Page</a>
    <a className="link link-hover text-gray-400">Contact Page</a>
    <a className="link link-hover text-gray-400">Single Blog</a>
  </nav>
  <nav className="space-y-3">
    <h6 className="text-lg text-white">ALL SECTIONS</h6>
    <a className="link link-hover text-gray-400">Headers</a>
    <a className="link link-hover text-gray-400">Features</a>
    <a className="link link-hover text-gray-400">Attractive</a>
    <a className="link link-hover text-gray-400">Testmonials</a>
    <a className="link link-hover text-gray-400">Videos</a>
    <a className="link link-hover text-gray-400">Footers</a>
  </nav>
  <nav className="space-y-3">
    <h6 className="text-lg text-white">COMPANY</h6>
    <a className="link link-hover text-gray-400">About</a>
    <a className="link link-hover text-gray-400">Blog</a>
    <a className="link link-hover text-gray-400">Pricing</a>
    <a className="link link-hover text-gray-400">Affiliate</a>
    <a className="link link-hover text-gray-400">Login</a>
    <a className="link link-hover text-gray-400">Changelog</a>
  </nav>
</footer>

<footer className="footer footer-center bg-gray-800 text-gray-400 p-4 border-t">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Fuad Amir</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;