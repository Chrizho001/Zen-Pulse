import welcomeImage from "../assets/welcome.jpg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <section
      style={{
        backgroundImage: `url(${welcomeImage})`,
      }}
      className="w-full h-screen flex flex-col py-12 bg-cover bg-center justify-center items-center  "
    >
      <div className="flex flex-col  justify-center gap-y-12 w-full h-full md:w-[500px] px-2">
        <h1 className="text-4xl font-bold text-gray-200 tracking-wide font-raleway md:text-5xl ">
          Enjoy Yoga At It's Very Best
        </h1>
        <div className="flex flex-col px-4 gap-y-3 mt-14">
          <button onClick={() => navigate('/auth/login')} className="w-full py-2 bg-white/50 rounded-full backdrop-blur-lg text-lg font-semibold text-gray-600 cursor-pointer">
            Sign in
          </button>
          <button onClick={() => navigate('/auth/signup')} className="text-sm font-bold font-raleway text-gray-100 cursor-pointer ">
            Create an account
          </button>
        </div>
      </div>
    </section>  
  );
};

export default Welcome;
