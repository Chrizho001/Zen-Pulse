import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center md:overflow-y-auto md:py-4">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[600px] flex flex-col justify-start items-start gap-y-2 md:rounded-lg ">
        <div className="w-full py-4 px-6 ">
          <button className=" p-2 rounded-full w-fit bg-white">
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-4 px-6 w-full h-full py-6">
          <div className="flex flex-col items-center justify-center w-full gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-3xl font-semibold  text-gray-600">
                Reset Password
              </h1>
              <span className="text-sm font-raleway text-gray-600">
                Enter your OTP code and your new password
              </span>
            </div>
            <div className="flex w-full">
              {/* first_name form */}
              <div className="flex flex-col  w-full">
                <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                  <IoMdPerson className="text-2xl text-black" />
                  <input
                    type="text"
                    name="email"
                    placeholder="OTP code"
                    id=""
                    className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                  />
                </div>
              </div>
            </div>

            {/* email form */}
            <div className="flex flex-col  w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <FaEnvelope className="text-2xl text-black" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                />
              </div>
            </div>

            {/* password form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <FaLock className="text-2xl text-black" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                />
              </div>
            </div>

            {/* password form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <FaLock className="text-2xl text-black" />
                <input
                  type="password"
                  name="password1"
                  placeholder="Confirm password"
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-8">
            <button className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full text-white mt-3">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
