import Navbar from "../common/Navbar";
import HeroContent from "./HeroContent";
import Ornaments from "./Ornaments";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[#003be2]">
      <div className="relative mx-auto h-[1024px] w-full max-w-[1440px]">
        <Navbar />
        <HeroContent />
        <Ornaments />
      </div>
    </section>
  );
};

export default Banner;
