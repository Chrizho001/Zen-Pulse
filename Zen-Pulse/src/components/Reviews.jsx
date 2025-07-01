import ReviewItem from "../Utilities/ReviewItem";

const Reviews = () => {
  const reviews = [
    {
      title: "Superb Results",
      author: "Orlando Virgil",
      location: "Abuja",
      review:
        "ZenPulse has completely transformed my mornings. I feel more centered, energized, and my lower back pain has almost vanished. Highly recommend for anyone new to yoga.",
    },
    {
      title: "Peace Like Never Before",
      author: "Mariam Sule",
      location: "Lagos",
      review:
        "Before ZenPulse, I was constantly stressed and disconnected from myself. The guided sessions are gentle but powerful — now I sleep better and wake up with purpose.",
    },
    {
      title: "A Daily Habit I Love",
      author: "Chukwuemeka Okafor",
      location: "Enugu",
      review:
        "I started using ZenPulse during lockdown, and it’s now a non-negotiable part of my day. The instructors are calming, and the routines are beginner-friendly but effective.",
    },
  ];

  return (
    <section className="container mx-auto px-4  py-6 mt-12 flex flex-col gap-4 items-center justify-center">
      <div className="w-full text-start items-start justify-start">
        <h1 className="text-3xl font-bold text-black font-raleway">
          What Our Customers Are Saying
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-x-8 md:px-12 py-8">
        {reviews.map((item, index) => (
          <ReviewItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
