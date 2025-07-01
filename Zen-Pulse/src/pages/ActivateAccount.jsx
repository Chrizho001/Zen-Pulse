import OTPInput from "../Utilities/OTPInput";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const ActivateAccount = () => {
  const [otp, setOtp] = useState("");
  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center md:overflow-y-auto md:py-4">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[500px] flex flex-col justify-start items-start gap-y-2 md:rounded-lg ">
        <div className="w-full py-4 px-6 ">
          <button className=" p-2 rounded-full w-fit bg-white">
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-between px-6 w-full h-full py-6">
          <div className="flex flex-col items-center justify-center w-full gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-3xl font-semibold  text-gray-600">
                Verify Your Email
              </h1>
              <span className="text-sm font-raleway text-gray-600 py-2">
                An OTP was sent to your email, enter OTP to activate your
                account
              </span>
            </div>
            <div className="flex justify-between gap-x-2">
              {/* otp field */}
              <div className="flex flex-col items-center ">
                <OTPInput length={6} onChange={setOtp} />
                <p className="mt-4 text-gray-600">You entered: {otp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivateAccount;
