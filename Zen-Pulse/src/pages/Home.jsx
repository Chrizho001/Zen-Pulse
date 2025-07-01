import Hero from "../components/Hero";
import Journey from "../components/Journey";
import About from "../components/About";
import Instructor from "../components/Instructor";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-6">
      <Hero />
      <Journey />
      <About />
      <Instructor />
      <Reviews />
      <Blog />
    </main>
  );
};

export default Home;
