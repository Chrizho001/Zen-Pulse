import journeyImage from "../assets/journ.jpg";
import journeyImage2 from "../assets/journ2.jpg";
import journeyImage3 from "../assets/journ3.jpg";

const Instructor = () => {
  return (
    <section className="container mx-auto mt-12 py-6 flex flex-col gap-2">
      <div className="px-2 py-2">
        <h1 className="py-6 text-3xl font-bold text-black font-raleway">
          Meet Our Expert Instructors
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full gap-y-8 px-2 md:flex-row md:gap-y-0 md:gap-x-6">
        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage2})` }}
        >
          <div className="absolute bottom-0 h-[30%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[25%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Improved Flexibility
            </h3>
            <p className="text-wrap text-sm font-normal py-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat ipsa at quo mollitia harum animi dolore odio id{" "}
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage})` }}
        >
          <div className="absolute bottom-0 h-[30%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[25%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Healthy Body
            </h3>
            <p className="text-wrap text-sm font-normal py-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat ipsa at quo mollitia harum animi dolore odio id{" "}
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-[500px] rounded-xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage3})` }}
        >
          <div className="absolute bottom-0 h-[30%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[25%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Stress Reduction
            </h3>
            <p className="text-wrap text-sm font-normal py-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat ipsa at quo mollitia harum animi dolore odio id{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
