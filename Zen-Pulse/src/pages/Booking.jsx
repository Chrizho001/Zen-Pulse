import image from "../assets/spot.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import api from "../axios/api";
import { toast } from "react-toastify";

const Booking = () => {
  // Get current time in HH:mm format
  const now = new Date();
  const defaultTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  const [formData, setFormData] = useState({
    start_date: "",
    start_time: defaultTime,
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = "http://localhost:8000/api/sessions/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(url, formData);
      setErrors({});
      console.log(response);
      toast.success(response.data.message);
      setLoading(false);
      setFormData({
        start_date: "",
        start_time: defaultTime,
        description: "",
      });
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setErrors(error.response.data);
    }
  };

  return (
    <section className="w-full mx-auto h-screen flex flex-col overflow-y-auto">
      <div className="w-full flex flex-col px-2 items-center justify-center">
        {/* pictured div */}
        <div
          className="w-full bg-center bg-cover h-[300px] md:h-[400px] py-4 px-6 md:w-[50%]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <button
            onClick={() => navigate("/")}
            className=" p-2 rounded-full w-fit bg-white"
          >
            <IoIosArrowBack className="text-2xl text-black" />
          </button>
        </div>
        {/* form div */}
        <div className="flex flex-col gap-4 py-4 mt-2 items-center justify-center w-full md:w-[40%] ">
          <div className="flex flex-col text-center items-center justify-center w-full">
            <h1 className="text-gray-600 text-4xl  font-bold font-raleway">
              Online Reservation
            </h1>
            <span className="text-gray-600 font-raleway text-sm font-semibold ">
              Reserve a spot at our exclusive yoga club today
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6 w-full"
          >
            {/* username div */}
            <div className="">
              <input
                type="text"
                required={true}
                name="name"
                placeholder="Name"
                className=" bg-gray-400 py-3 px-2 focus:ring-2 focus:outline-gray-600 text-sm font-raleway w-full text-white font-semibold"
              />
            </div>
            {/* date and time  */}
            <div className="flex items-center justify-start w-full gap-x-3">
              <div className="flex flex-col w-full">
                <input
                  type="time"
                  value={formData.start_time}
                  onChange={(e) =>
                    setFormData({ ...formData, start_time: e.target.value })
                  }
                  name="time"
                  className=" bg-gray-400 py-3 px-2 focus:ring-2 focus:outline-gray-600 text-sm font-raleway font-semibold w-full"
                />
                {errors.start_time && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.start_time[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <input
                  value={formData.start_date}
                  type="date"
                  onChange={(e) =>
                    setFormData({ ...formData, start_date: e.target.value })
                  }
                  className=" bg-gray-400 py-3 px-2 focus:ring-2 focus:outline-gray-600 text-sm font-raleway font-semibold w-full"
                />
                {errors.start_date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.start_date[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                value={formData.description}
                name="message"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Message"
                className=" bg-gray-400 py-3 px-2 focus:ring-2 focus:outline-gray-600 text-sm font-raleway w-full text-white font-semibold"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description[0]}
                </p>
              )}
            </div>
            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-2">
                {errors.non_field_errors[0]}
              </p>
            )}
            {!loading ? (
              <button
                type="submit"
                className="w-full font-semibold text-sm py-3 bg-gray-600 rounded-full  text-white mt-3"
              >
                Reserve A Spot
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
          </form>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ZenPulse
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Booking;
