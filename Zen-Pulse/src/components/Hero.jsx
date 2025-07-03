import heroImage from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "../Utilities/Navbar";

const Hero = () => {
  return (
    <section
      className="w-full h-screen md:h-screen flex flex-col  bg-cover bg-center bg-fixed mb-8 "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto relative flex flex-col backdrop-blur-[2px] py-3 px-2 h-full ">
        <Navbar />
        {/* Hero content div */}
        <div className="flex flex-col gap-y-6 justify-center w-full md:w-[700px] md:tracking-widest mt-6 ">
          <h1 className="text-[50px] md:text-[70px] font-raleway font-bold text-gray-700 py-2  tracking-tight leading-tight">
            Meditations change your lifestyle
          </h1>
          <button className="w-fit bg-gray-100 px-4 py-2 text-lg font-semibold font-raleway rounded-full flex items-center justify-center gap-3">
            Get in touch{" "}
            <span className="bg-black rounded-full p-3">
              <FaArrowRight className="text-white" />
            </span>
          </button>
        </div>
        {/* stats div */}
        <div className="absolute bottom-10 px-3 flex flex-wrap gap-4  ">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-gray-200 font-bold text-3xl md:text-5xl">60+</span>
            <span className="text-gray-200 font-light  text-sm">
              Successful Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-3">
            <span className="text-gray-200 font-bold text-3xl md:text-5xl">80+</span>
            <span className="text-gray-200 font-light text-sm">
              Happy Clients
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-3">
            <span className="text-gray-200 font-bold text-3xl md:text-5xl">100%</span>
            <span className="text-gray-200 font-light text-sm">
              Customer Satisfaction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
