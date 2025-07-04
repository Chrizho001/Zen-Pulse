import welcomeImage from "../assets/welcome.jpg";
import { IoMdPerson } from "react-icons/io";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utilities/AuthContext";

const Login = () => {
  const url = "https://zenpulse.onrender.com/api/auth/login/";
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading2(true);
    const url = "https://zenpulse.onrender.com/api/auth/reset-password/";
    try {
      const response = await axios.post(url, { email: formData.email });
      console.log(response);
      navigate("/auth/reset-password", { state: { email: formData.email } });
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
      setLoading2(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
      console.log("Saving tokens...");
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      setAuth({ isAuthenticated: true, user: { email: formData.email } });

      navigate("/");
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center ">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[600px] flex flex-col justify-start items-start gap-y-4 md:rounded-lg">
        <div
          style={{
            backgroundImage: `url(${welcomeImage})`,
          }}
          className="bg-cover bg-center w-full h-[280px] rounded-br-[60px] py-4 px-6 "
        >
          <button
            onClick={() => navigate("/auth/signup")}
            className=" p-2 rounded-full w-fit bg-white"
          >
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-between px-6 w-full h-full py-8"
        >
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
                <FaEnvelope className="text-xl text-black" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm text-black font-raleway w-full"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div>

            {/* password form */}
            <div className="flex flex-col py-4 w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <input
                  value={formData.password}
                  type={passwordVisible ? "text" : "password"}
                  name="email"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm text-black font-raleway w-full"
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
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password[0]}
                </p>
              )}
            </div>
            <div className="flex w-full justify-end items-center gap-x-3 ">
              {!loading2 ? (
                <button
                  onClick={handleForgotPassword}
                  className="cursor-pointer font-bold text-gray-600 w-fit"
                >
                  forgot password?
                </button>
              ) : (
                <div className="flex w-fit items-center justify-center ">
                  <Spinner
                    color="success"
                    aria-label="Success spinner example"
                    size="lg"
                  />
                </div>
              )}
            </div>
            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-2">
                {errors.non_field_errors[0]}
              </p>
            )}
            {errors.error && (
              <p className="text-red-500 text-sm mt-2">{errors.error}</p>
            )}
            {errors.detail && (
              <p className="text-red-500 text-sm mt-2">{errors.detail}</p>
            )}
          </div>
          <div className="w-full flex flex-col py-4">
            {!loading ? (
              <button
                type="submit"
                className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full text-white mt-3"
              >
                Sign in
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
            <div className="flex justify-center items-center gap-x-3 py-2">
              <span className="text-sm font-normal text-gray-500">
                Don't have an account?
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/auth/signup");
                }}
                className="underline cursor-pointer font-bold text-gray-600"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
