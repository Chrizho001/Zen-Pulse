import { IoMdPerson } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utilities/AuthContext";

const Signup = () => {
  const url = "http://localhost:8000/api/auth/register/";
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(url, formData);
      console.log(response);
      setErrors({}); // clear old errors if success
      setAuth({ isAuthenticated: false, user: { email: formData.email } });

      navigate("/auth/activate-account");
    } catch (error) {
      setLoading(false);
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center items-center md:overflow-y-auto md:py-4">
      <div className="bg-gray-100 w-full h-full md:w-[400px] md:h-[600px] flex flex-col justify-start items-start gap-y-2 md:rounded-lg ">
        <div className="w-full py-4 px-6 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/welcome");
            }}
            className=" p-2 rounded-full w-fit bg-white cursor-pointer"
          >
            <IoIosArrowBack className="text-3xl text-black" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-between px-6 w-full h-full py-6"
        >
          <div className="flex flex-col items-center justify-center w-full gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-3xl font-semibold  text-gray-600">
                Register
              </h1>
              <span className="text-sm font-raleway text-gray-600">
                Create your new account
              </span>
            </div>
            <div className="flex justify-between gap-x-2">
              {/* first_name form */}
              <div className="flex flex-col  w-full">
                <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                  <IoMdPerson className="text-2xl text-black" />
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    placeholder="First name"
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                  />
                </div>
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name[0]}
                  </p>
                )}
              </div>

              {/* last_name form */}
              <div className="flex flex-col  w-full">
                <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                  <IoMdPerson className="text-2xl text-black" />
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    placeholder="Last name"
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    id=""
                    className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                  />
                </div>
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name[0]}
                  </p>
                )}
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm font-raleway w-full"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div>

            {/* password form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  id=""
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm  w-full"
                />
                {!passwordVisible ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordVisible(true);
                    }}
                  >
                    <FaEye className="text-2xl" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordVisible(false);
                    }}
                  >
                    <FaEyeSlash className="text-2xl" />
                  </button>
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password[0]}
                </p>
              )}
            </div>

            {/* password2 form */}
            <div className="flex flex-col w-full">
              <div className="w-full py-3 flex px-2 gap-x-3 bg-gray-300 rounded-lg items-center justify-start">
                <input
                  type={password2Visible ? "text" : "password"}
                  name="password2"
                  placeholder="Confirm password"
                  value={formData.password2}
                  id=""
                  onChange={(e) =>
                    setFormData({ ...formData, password2: e.target.value })
                  }
                  className="outline-none border-none focus:ring-0 focus:outline-none text-sm w-full"
                />
                {!password2Visible ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPassword2Visible(true);
                    }}
                  >
                    <FaEye className="text-2xl" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPassword2Visible(false);
                    }}
                  >
                    <FaEyeSlash className="text-2xl" />
                  </button>
                )}
              </div>
              {errors.password2 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password2[0]}
                </p>
              )}
            </div>
            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-2">
                {errors.non_field_errors[0]}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col py-4">
            {!loading ? (
              <button
                type="submit"
                className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full text-white mt-3"
              >
                Sign up
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
                Already have an account?
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/auth/login");
                }}
                className="underline cursor-pointer font-bold text-gray-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
