import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import journeyImage from "../assets/ggg.jpg";

const About = () => {
  return (
    <section
      id="#about"
      className="container mx-auto flex flex-col lg:flex-row py-6 mt-6 px-2 items-center gap-8"
    >
      {/* About div */}
      <div className="flex flex-col gap-4 w-full justify-start">
        <h1 className="text-3xl text-black font-bold font-raleway py-3">
          Your Life For Greater Self Of Yoga
        </h1>
        <div className="flex py-2 items-center justify-center gap-x-3">
          <div className="bg-purple-300 p-3 rounded-full">
            <FaChalkboardTeacher className="text-white text-3xl" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-black font-raleway">
              Expert Instructors
            </h3>
            <p className="text-wrap text-sm font-raleway text-gray-700">
              Our certified instructors bring years of experience, compassion,
              and deep knowledge of yoga philosophy.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-500" />

        <div className="flex py-2 items-center justify-center gap-x-3">
          <div className="bg-blue-300 p-3 rounded-full">
            <FaPeopleRoof className="text-white text-3xl" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-black font-raleway">
              Welcoming Community
            </h3>
            <p className="text-wrap text-sm font-raleway text-gray-700">
              No egos. No judgment. Just real people like you on a journey to
              feel better, move better, and live better. You’ll find
              encouragement, friendship, and a sense of belonging the moment you
              step through our doors.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-500" />

        <div className="flex py-2 items-center justify-center gap-x-3">
          <div className="bg-green-300 p-3 rounded-full">
            <MdOutlineSportsGymnastics className="text-white text-3xl" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-black font-raleway">
              Transformative Power Of Yoga
            </h3>
            <p className="text-wrap text-sm font-raleway text-gray-700">
              Experience how consistent practice transforms your body, calms
              your mind, and awakens your spirit. From improving posture and
              digestion to reducing anxiety and boosting mood — yoga changes
              everything, inside and out.
            </p>
          </div>
        </div>
      </div>
      {/* about image */}
      <div
        className="relative w-full h-[500px] rounded-xl bg-center bg-cover "
        style={{ backgroundImage: `url(${journeyImage})` }}
      ></div>
    </section>
  );
};

export default About;
