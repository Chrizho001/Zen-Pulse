const ReviewItem = ({data}) => {
  return (
    <div className="w-full h-[350px] flex flex-col space-y-3 px-2 py-2 bg-gray-300/50 rounded-lg justify-center">
      <span className="text-[50px] font-bold text-black p-0  ">&#34;</span>
      <h1 className="text-2xl font-bold text-black font-raleway ">
        {data.title}
      </h1>
      <p className="text-sm text-black font-normal text-wrap font-raleway">
        {data.review}
      </p>
      <hr className="border-t border-gray-500 my-3" />
      <div className="flex flex-col mt-3">
        <span className="text-black text-xl font-raleway font-semibold">
          {data.author}
        </span>
        <span className="text-black text-sm font-normal">{data.location}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
