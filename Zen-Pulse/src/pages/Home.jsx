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
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ZenPulse
          </p>
        </aside>
      </footer>
    </main>
  );
};

export default Home;
