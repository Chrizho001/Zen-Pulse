import BlogItem from "../Utilities/BlogItem";
import BlogPost from "../Utilities/BlogPost";
import { useState, useEffect } from "react";
import api from "../axios/api";
import { toast } from "react-toastify";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Spinner } from "flowbite-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async (url = "/api/blog") => {
    setLoading(true);
    try {
      const response = await api.get(url);
      setLoading(false);
      setBlogs(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);

      
    } catch (error) {
      
      toast.error("failed to fetch blogs");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (blogs.length < 1) {
    return (
      <section
        id="#blog"
        className="container mx-auto mt-8 py-3 px-2 flex flex-col gap-y-4 items-center justify-center"
      >
        <p className="text-lg  text-black font-raleway">No Blogs Available</p>
      </section>
    );
  }

  return (
    <section
      id="#blog"
      className="container mx-auto mt-8 py-3 px-2 flex flex-col gap-y-4"
    >
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner
            color="success"
            aria-label="Success spinner example"
            size="lg"
          />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-y-4">
          <h1 className="text-3xl font-bold font-raleway py-6 text-black">
            Read Our Daily Blogs
          </h1>
          <div className="flex flex-col lg:flex-row py-2 gap-3 w-full items-start justify-center">
            {blogs.at(0) && <BlogPost data={blogs.at(0)} />}

            <div className="w-full flex flex-col gap-y-6 justify-center items-center">
              {blogs.length > 0 ? (
                blogs
                  .slice(1)
                  .map((blog) => <BlogItem key={blog.id} data={blog} />)
              ) : (
                <p>No blog posts available</p>
              )}
            </div>
          </div>
          <div className="flex flex-row  gap-x-6 w-full items-center justify-center">
            {previous && (
              <button
                onClick={() => fetchBlogs(previous)}
                className="bg-black text-white px-4 py-2 text-sm font-raleway flex gap-x-3 items-center justify-center"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span>Previous</span>
              </button>
            )}
            {next && (
              <button
                onClick={() => fetchBlogs(next)}
                className="bg-black text-white px-4 py-2 text-sm font-raleway flex gap-x-3 items-center justify-center"
              >
                <span>Next</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
