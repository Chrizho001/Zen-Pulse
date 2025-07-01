import blogImage from "../assets/journ.jpg";
import { FaArrowRight } from "react-icons/fa6";

const BlogPost = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full  mb-8">
      {/* image */}
      <div
        style={{
          backgroundImage: `url(${blogImage})`,
        }}
        className="bg-center bg-cover w-full h-[300px] md:h-[400px]"
      ></div>
      {/* content */}
      <div className="flex flex-col gap-y-2 w-fit">
        <div>
          <h2 className="text-2xl font-semibold font-raleway">
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

export default BlogPost;
