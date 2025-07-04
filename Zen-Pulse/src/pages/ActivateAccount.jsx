import OTPInput from "../Utilities/OTPInput";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { useAuth } from "../Utilities/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const ActivateAccount = () => {
  const [otp, setOtp] = useState("");
  const { auth } = useAuth();
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (otp.length === 6) {
      const url = "https://zenpulse.onrender.com/api/auth/verify-otp/";
      try {
        setIsOpen(true);
        const response = await axios.post(url, {
          otp: otp,
          email: auth.user.email,
        });
        setErrors({}); // clear old errors if success
        console.log(response);
        if (response.status == 200) {
          navigate("/auth/login");
        }
      } catch (error) {
        setIsOpen(false);
        console.log(error.response);
        setErrors(error.response.data);
        console.log(errors.error);
      }
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [otp]);

  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center md:overflow-y-auto md:py-4">
      <div className="bg-gray-100 relative w-full h-full md:w-[400px] md:h-[500px] flex flex-col justify-start items-start gap-y-2 md:rounded-lg ">
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
                An OTP was sent to {auth.user.email}, enter the OTP to activate
                your account
              </span>
            </div>
            <div className="flex justify-between gap-x-2">
              {/* otp field */}
              <div className="flex flex-col items-center w-full ">
                <OTPInput length={6} onChange={setOtp} />

                {errors.error && (
                  <p className="text-red-500 text-sm mt-2">{errors.error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* pop up */}
        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-600 opacity-50">
            <span>
              <Spinner
                color="success"
                aria-label="Success spinner example"
                size="xl"
              />
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivateAccount;
