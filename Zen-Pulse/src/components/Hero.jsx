import heroImage from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "../Utilities/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="#home"
      className="w-full h-screen md:h-screen flex flex-col  bg-cover bg-center bg-fixed mb-8 "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto relative flex flex-col backdrop-blur-[2px] py-3 px-2 h-full ">
        <Navbar />
        {/* Hero content div */}
        <div className="flex flex-col gap-y-6 md:gap-y-3 justify-center w-full md:w-[750px] md:tracking-widest mt-6 ">
          <h1 className="text-[50px] md:text-[50px] lg:text-[60px] font-raleway font-bold text-gray-700 py-2  tracking-tight leading-tight lg:py-8">
            Meditations change your lifestyle
          </h1>
          <Link to={'/booking'}>
            <button className="w-fit bg-gray-100 px-4 py-2 text-lg text-black font-semibold font-raleway rounded-full flex items-center justify-center gap-3">
              Get in touch{" "}
              <span className="bg-black rounded-full p-3">
                <FaArrowRight className="text-white" />
              </span>
            </button>
          </Link>
        </div>
        {/* stats div */}
        <div className="absolute bottom-10 md:bottom-4 px-3 flex flex-wrap gap-4  ">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-gray-200 font-bold text-3xl md:text-2xl lg:text-4xl">
              60+
            </span>
            <span className="text-gray-200 font-light  text-sm">
              Successful Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-3">
            <span className="text-gray-200 font-bold text-3xl md:text-2xl lg:text-4xl">
              80+
            </span>
            <span className="text-gray-200 font-light text-sm">
              Happy Clients
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-3">
            <span className="text-gray-200 font-bold text-3xl md:text-2xl lg:text-4xl">
              100%
            </span>
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
