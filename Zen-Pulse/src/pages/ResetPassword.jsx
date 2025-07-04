import { IoMdPerson } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const location = useLocation();
  const emailFromState = location.state?.email;
  const url = "http://localhost:8000/api/auth/reset-password-confirm/";
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
    email: "",
    otp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(url, formData);
      toast.success("password reset successful");
      setErrors({});
      navigate("/auth/login");
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (emailFromState) {
      setFormData((prev) => ({ ...prev, email: emailFromState }));
      console.log("Email from state:", emailFromState); //
    }
  }, [emailFromState]);

  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center md:overflow-y-auto md:py-4">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[600px] flex flex-col justify-start items-start gap-y-2 md:rounded-lg ">
        <div className="w-full py-4 px-6 ">
          <button
            onClick={() => navigate("/auth/login")}
            className=" p-2 rounded-full w-fit bg-white"
          >
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-4 px-6 w-full h-full py-6">
          <div className="flex flex-col items-center justify-center w-full gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-3xl font-semibold  text-gray-600">
                Reset Password
              </h1>
              <span className="text-sm font-raleway text-gray-600 text-center">
                Enter your OTP code sent to {formData.email} and your new password
              </span>
            </div>
            <div className="flex w-full">
              {/* otp form */}
              <div className="flex flex-col  w-full">
                <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                  <IoMdPerson className="text-2xl text-black" />
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    placeholder="OTP code"
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                    id=""
                    className="outline-none border-none focus:ring-0 focus:outline-none text-sm text-black font-raleway w-full"
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm mt-1">{errors.otp[0]}</p>
                  )}
                </div>
              </div>
            </div>

            {/* password form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  placeholder="Enter your new password"
                  onChange={(e) =>
                    setFormData({ ...formData, new_password: e.target.value })
                  }
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm text-black  w-full"
                />
                {!passwordVisible ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordVisible(true);
                    }}
                  >
                    <FaEye className="text-2xl text-black" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordVisible(false);
                    }}
                  >
                    <FaEyeSlash className="text-2xl text-black" />
                  </button>
                )}
              </div>
              {errors.new_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.new_password[0]}
                </p>
              )}
            </div>

            {/* confirmpassword form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <input
                  type={password2Visible ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm password"
                  value={formData.confirm_password}
                  id=""
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirm_password: e.target.value,
                    })
                  }
                  className="outline-none border-none focus:ring-0 focus:outline-none text-black text-sm w-full"
                />
                {!password2Visible ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPassword2Visible(true);
                    }}
                  >
                    <FaEye className="text-2xl text-black" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPassword2Visible(false);
                    }}
                  >
                    <FaEyeSlash className="text-2xl text-black" />
                  </button>
                )}
              </div>
              {errors.confirm_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirm_password[0]}
                </p>
              )}
            </div>
            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-2">
                {errors.non_field_errors[0]}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col py-8">
            {!loading ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full text-white mt-3"
              >
                Reset Password
              </button>
            ) : (
              <div className="flex w-full items-center justify-center ">
                <Spinner
                  color="success"
                  aria-label="Success spinner example"
                  size="lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
