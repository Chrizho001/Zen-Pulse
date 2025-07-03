import { HiMenuAlt3 } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuth()

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = async () => {
    const url = "http://localhost:8000/api/auth/logout/";
    try {
      const response = await axios.post(url, {
        refresh: localStorage.getItem("refresh_token"),
      });
      if (response.status == 200) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setAuth({ isAuthenticated: false, user: null });
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error.response);
      toast.error("logout failed");
    }
  };

  return (
    <nav className="bg-gray-600/20 backdrop-blur-lg px-8 py-3 mb-8 rounded-full flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center justify-center w-fit gap-2">
        <h3 className="text-xl font-semibold font-raleway">
          Zen<span className="text-white">Pulse</span>
        </h3>
      </div>
      {/* hamburger menu icon */}
      <div className="md:hidden">
        <DropdownMenu />
      </div>
      {/* menu items */}
      <div className="hidden md:flex">
        <ul className="flex flex-row md:gap-x-4 lg:gap-x-6 items-center text-white font-semibold font-raleway">
          <li
            onClick={() => scrollToSection("#home")}
            className="text-lg hover:text-gray-300 font-raleway cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("#about")}
            className="text-lg hover:text-gray-300 font-raleway cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("#blog")}
            className="text-lg hover:text-gray-300 font-raleway cursor-pointer"
          >
            Blog
          </li>

          <NavLink to={"/booking"}>
            <li
              
              className="text-lg hover:text-gray-300 font-raleway cursor-pointer"
            >
              Reservation
            </li>
          </NavLink>

          <li
            onClick={() => scrollToSection("#testimonial")}
            className="text-lg hover:text-gray-300 font-raleway cursor-pointer"
          >
            Testimonial
          </li>
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="hidden md:flex px-4 py-2 bg-gray-500 text-white  text-sm cursor-pointer rounded-full"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
