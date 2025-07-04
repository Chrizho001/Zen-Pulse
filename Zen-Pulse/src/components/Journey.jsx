import journeyImage from "../assets/journ.jpg";
import journeyImage2 from "../assets/journ2.jpg";
import journeyImage3 from "../assets/journ3.jpg";

const Journey = () => {
  return (
    <section className="container mx-auto mt-12 py-6 flex flex-col gap-4">
      <div>
        <h1 className="py-6 text-3xl font-bold text-black font-raleway">
          Start Your Journey Today
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full gap-y-8 px-2 md:flex-col md:gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4">
        <div
          className="relative w-full h-[500px] rounded-2xl bg-center bg-cover"
          style={{ backgroundImage: `url(${journeyImage2})` }}
        >
          <div className="absolute bottom-0 h-[30%] bg-white/20 backdrop-blur-[4px] w-full blur-sm border-none"></div>
          <div className="absolute bottom-0 h-[25%] px-2 ">
            <h3 className="text-2xl font-semibold text-white font-raleway">
              Improved Flexibility
            </h3>
            <p className="text-wrap text-sm font-normal py-2 text-white">
              Loosen up stiff joints and muscles, move freely, and feel more
              comfortable in your own body.
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
              Build strength, boost circulation, and support your immune system
              — all through mindful movement.
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
              Calm your mind, lower anxiety, and find peace in the present
              moment through breath and flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
