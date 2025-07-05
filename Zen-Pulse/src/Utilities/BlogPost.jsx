import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogPost = ({ data }) => {
  if (!data) return null;
  console.log(data.image);

  const cloudinaryBase = "https://res.cloudinary.com/djmgfxvhf/";
  const imageUrl = data.image.startsWith("http")
    ? data.image
    : `${cloudinaryBase}${data.image}`;

  return (
    <Link to={`/blog/${data.slug}`}>
      <div className="flex flex-col gap-y-2 w-full lg:w-[600px] mb-8">
        {/* image */}
        <div className=" w-full h-[300px] md:h-[400px] ">
          <img
            src={imageUrl}
            alt={data.title}
            className="w-[230px] h-[150px] object-cover rounded-md"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-y-2 w-fit">
          <div>
            <h2 className="text-2xl font-semibold font-raleway text-black">
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

export default BlogPost;
