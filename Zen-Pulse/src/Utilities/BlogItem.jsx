import blogPic from "../assets/journ.jpg";
import { FaArrowRight } from "react-icons/fa6";

const BlogItem = () => {
  return (
    <div className="w-full flex flex-row gap-x-2 justify-center items-center">
      {/* blog pic */}
      <div
        className="w-[230px] h-[150px] bg-center bg-cover  "
        style={{
          backgroundImage: `url(${blogPic})`,
        }}
      >
        h
      </div>
      {/* contents */}
      <div className="flex flex-col gap-y-2 w-fit">
        <div>
          <h2 className="text-lg font-semibold font-raleway">
            The Power of lemonade
          </h2>
        </div>
        <p className="text-sm text-wrap font-normal font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit
          amet, consectetur
        </p>
        <button className="w-fit text-sm font-bold text-orange-300 flex items-center gap-2">
          Read more{" "}
          <span>
            <FaArrowRight className="text-xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
