import BlogItem from "../Utilities/BlogItem";
import BlogPost from "../Utilities/BlogPost";

const Blog = () => {
  return (
    <section className="container mx-auto mt-8 py-3 px-2 flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold font-raleway py-6">
        Read Our Daily Blogs
      </h1>
      <div className="flex flex-col md:flex-row py-2 gap-3 w-full items-start justify-center">
        <BlogPost />

        <div className="w-full flex flex-col gap-y-4  justify-center items-center">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </section>
  );
};

export default Blog;
