import welcomeImage from "../assets/welcome.jpg";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center ">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[600px] flex flex-col justify-start items-start gap-y-4 md:rounded-lg">
        <div
          style={{
            backgroundImage: `url(${welcomeImage})`,
          }}
          className="bg-cover bg-center w-full h-[280px] rounded-br-[60px] py-4 px-6 "
        >
          <button className=" p-2 rounded-full w-fit bg-white">
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-between px-6 w-full h-full py-8">
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-3xl font-semibold  text-gray-600">
                Welcome Back
              </h1>
              <span className="text-sm font-raleway text-gray-600">
                Login to your account
              </span>
            </div>
            {/* email form */}
            <div className="flex flex-col  w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <IoMdPerson className="text-2xl text-black" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway"
                />
              </div>
            </div>

            {/* password form */}
            <div className="flex flex-col py-4 w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <FaLock className="text-2xl text-black" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway"
                />
              </div>
            </div>
            <div className="flex w-full justify-end items-center gap-x-3 ">
              <button className="cursor-pointer font-bold text-gray-600">
                forgot password?
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col py-4">
            <button className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full text-white mt-3">
              Login
            </button>
            <div className="flex justify-center items-center gap-x-3 py-2">
              <span className="text-sm font-normal text-gray-500">
                Don't have an account?
              </span>
              <button className="underline cursor-pointer font-bold text-gray-600">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
