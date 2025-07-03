import { Outlet } from "react-router-dom";
import Navbar from "../Utilities/Navbar";

const RootLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default RootLayout;
