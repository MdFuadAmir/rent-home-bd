
const links =[
  {
      id: 1,
      name: "Home",
      path: "/"
  },
  {
      id: 2,
      name: "About",
      path: "/about"
  },
  {
      id: 3,
      name: "Services",
      path: "/services"
  },
  {
      id: 4,
      name: "Blog",
      path: "/blog"
  },
  {
      id: 5,
      name: "Pricing",
      path: "/pricing"
  },
  {
      id: 6,
      name: "Contact",
      path: "/contact"
  }

]
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-4 md:px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
          {
            links.map((link) => <li key={link.id}><a className="" href={link.path}>{link.name}</a></li>)
          }
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-mono">RENT<span className="text-4xl text-green-400">UP</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-center">
         {
            links.map((link) => <li key={link.id}><a className="" href={link.path}>{link.name}</a></li>)
          }
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn bg-green-400 text-white px-8">Sign In</button>
  </div>
</div>
            
        </div>
    );
};

export default Navber;