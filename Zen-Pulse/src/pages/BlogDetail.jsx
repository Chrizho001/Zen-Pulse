import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios/api"; // your axios instance
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const fetchBlogDetail = async () => {
    try {
      const response = await api.get(`/api/blog/${slug}`);
      setBlog(response.data);
      
    } catch (error) {
      toast.error("Failed to fetch blog post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (!blog) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <section className="w-full mx-auto flex flex-col  gap-y-2 items-center justify-center h-full pt-2.5 overflow-y-auto">
      {/* blog image */}
      <div className="flex w-full items-center justify-center px-2">
        {blog.image && (
          <div
            style={{
              backgroundImage: `url(${
                blog.image.startsWith("http")
                  ? blog.image
                  : `https://res.cloudinary.com/djmgfxvhf/${blog.image}`
              })`,
            }}
            className="bg-center bg-cover w-full h-[400px] md:w-[70%] lg:w-[60%] px-4 py-6"
          >
            <button
              onClick={() => navigate("/")}
              className=" p-2 rounded-full w-fit bg-white"
            >
              <IoIosArrowBack className="text-2xl text-black" />
            </button>
          </div>
        )}
      </div>
      {/* blog content */}
      <div className="w-full py-2 px-2 flex flex-col justify-start text-start md:w-[70%] lg:w-[60%]">
        <h1 className="text-3xl font-bold font-raleway text-black tracking-tight py-2">
          {blog.title}
        </h1>
        <span className="text-sm font-normal text-black">
          {formatDate(blog.created_at)}
        </span>
        <p className="py-8 mt-2 text-lg text-black font-normal text-justify font-raleway tracking-wide leading-normal">
          {blog.content}
        </p>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ZenPulse
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default BlogDetail;
