import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav className="bg-gray-600/20 backdrop-blur-lg px-3 py-3 mb-8 rounded-full flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center justify-center w-fit gap-2">
        <h3 className="text-xl font-semibold font-raleway">
          Zen<span className="text-white">Pulse</span>
        </h3>
      </div>
      {/* hamburger menu icon */}
      <button>
        <HiMenuAlt3 className="text-3xl text-white"/>
      </button>
    </nav>
  );
};

export default Navbar;
