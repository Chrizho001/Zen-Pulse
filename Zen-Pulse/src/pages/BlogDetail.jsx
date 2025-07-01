import myImage from "../assets/hero.jpg";

const blogData = {
  image: myImage,
  date: "13 January 2025",
  title: "Benefits Of Kegel Excercises",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
};

const BlogDetail = () => {
  return (
    <section className="container mx-auto flex flex-col py-2 px-2 gap-y-2">
      {/* blog image */}
      <div className="">
        <div
          style={{
            backgroundImage: `url(${blogData.image})`,
          }}
          className="bg-center bg-cover w-full h-[350px]"
        ></div>
      </div>
      {/* blog content */}
      <div className="w-full py-2 flex flex-col justify-start text-start">
        <h1 className="text-3xl font-bold font-raleway text-black tracking-tight py-2">
          {blogData.title}
        </h1>
        <span className="text-sm font-normal text-black">{blogData.date}</span>
        <p className="py-8 mt-2 text-lg font-normal text-wrap">
          {blogData.body}
        </p>
      </div>
    </section>
  );
};

export default BlogDetail;
