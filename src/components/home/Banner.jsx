import GridBackground from "../common/GridBackground";
import Navbar from "../common/Navbar";
import HeroContent from "./HeroContent";
import HeroVisuals from "./HeroVisuals";
import Ornaments from "./Ornaments";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[#003BE2]">
      <div className="relative mx-auto h-[1024px] w-full max-w-[1440px] max-lg:h-auto max-lg:pb-16">
        <GridBackground />
        <Navbar />
        <HeroContent />
        <HeroVisuals />
        <div className="max-lg:hidden">
          <Ornaments />
        </div>
      </div>
    </section>
  );
};

export default Banner;
