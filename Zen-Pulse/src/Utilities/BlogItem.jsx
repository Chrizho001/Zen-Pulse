import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  if (!data) return null;

  const cloudinaryBase = "https://res.cloudinary.com/djmgfxvhf/";
  const imageUrl = data.image.startsWith("http")
    ? data.image
    : `${cloudinaryBase}${data.image}`;

  return (
    <Link to={`/blog/${data.slug}`}>
      <div className="w-full flex flex-row gap-x-2 justify-center items-center">
        {/* blog pic */}
        <div className="w-[230px] h-[150px]  max-h-[150px] ">
          <img
            src={imageUrl}
            alt={data.title}
            className="w-[230px] h-[150px] object-cover rounded-md"
          />
        </div>
        {/* contents */}
        <div className="flex flex-col gap-y-2 w-fit">
          <div>
            <h2 className="text-lg text-black font-semibold font-raleway">
              {data.title}
            </h2>
          </div>
          <p className="text-sm text-black text-wrap font-normal font-raleway line-clamp-2">
            {data.content}
          </p>
          <button className="w-fit text-sm font-bold text-orange-300 flex items-center gap-2">
            Read more{" "}
            <span>
              <FaArrowRight className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
