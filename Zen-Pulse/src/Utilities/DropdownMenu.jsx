import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const navigation = [
  { name: "Home", to: "#home", type: "anchor" },
  { name: "About", to: "#about", type: "anchor" },
  { name: "Blog", to: "#blog", type: "anchor" },
  { name: "Reservation", to: "booking", type: "page" },
  { name: "Testimonial", to: "#testimonial", type: "anchor" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

export default function DropdownMenu() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = async () => {
    const url = "https://zenpulse.onrender.com/api/auth/logout/";
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
      toast.error("logout failed");
    }
  };
  return (
    <div className="relative inline-block text-left z-50">
      <Menu as="div" className="relative">
        <div>
          <MenuButton className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-700 transition focus:outline-0 border-none data-active:bg-gray-700">
            <HiOutlineMenuAlt3 className="text-2xl text-white" />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2 space-y-1">
              {navigation.map((item) => (
                <MenuItem key={item.to}>
                  {() =>
                    item.type === "anchor" ? (
                      <button
                        onClick={() => scrollToSection(item.to)}
                        className={`block px-4 py-2 text-sm rounded-lg 
                         data-focus:bg-gray-100 data-focus:text-secondary text-gray-700
                      `}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={`${item.to}`}
                        className={`block px-4 py-2 text-sm rounded-lg 
                         data-focus:bg-gray-100 data-focus:text-secondary text-gray-700
                      `}
                      >
                        {item.name}
                      </Link>
                    )
                  }
                </MenuItem>
              ))}
              <div className="p-2">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-500 text-white  text-sm cursor-pointer rounded-full"
                >
                  Logout
                </button>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
