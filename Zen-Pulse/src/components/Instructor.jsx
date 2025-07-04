import journeyImage from "../assets/jj.jpg";
import journeyImage2 from "../assets/jj2.jpg";
import journeyImage3 from "../assets/jj3.jpg";

const Instructor = () => {
  return (
    <section className="container mx-auto mt-12 py-6 flex flex-col gap-2">
      <div className="px-2 py-2">
        <h1 className="py-6 text-3xl font-bold text-black font-raleway">
          Meet Our Expert Instructors
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full gap-y-8 px-2 md:gap-y-8 lg:flex-row lg:gap-x-6">
        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage2})` }}
        >
          <div className="absolute bottom-0 h-[20%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[15%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Kate Perry
            </h3>
            
          </div>
        </div>

        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage})` }}
        >
          <div className="absolute bottom-0 h-[20%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[15%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Alexa Bliss
            </h3>
            
          </div>
        </div>

        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage3})` }}
        >
          <div className="absolute bottom-0 h-[20%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[15%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Hermione Granger
            </h3>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
