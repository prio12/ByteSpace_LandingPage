import student from "../../assets/images/LaptopHolderImageSmiling.png";
import CategoryCard from "./cards/CategoryCard";
import ProgressCard from "./cards/ProgressCard";
import HappyStudentsCard from "./cards/HappyStudentsCard";

const HeroVisuals = () => {
  return (
    <>
      <div className="absolute left-1/2 top-0 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        <div
          aria-hidden
          className="absolute left-[145px] top-[582px] z-[1] size-[1149px] rounded-full border-[320px] border-solid border-[#CBFC01]"
        />
        <img
          src={student}
          alt="Smiling student holding a laptop"
          className="absolute left-[431px] top-[512px] z-[6] h-[541px] w-[578px] max-w-none"
        />
        <ProgressCard className="left-[842px] top-[651px] z-[7]" />
        <HappyStudentsCard className="left-[328px] top-[837px] z-[7]" />
        <CategoryCard className="left-[404px] top-[639px] z-[8]" />
      </div>

      <div className="relative z-10 mx-auto mt-12 w-full max-w-[420px] px-6 lg:hidden">
        <img
          src={student}
          alt="Smiling student holding a laptop"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default HeroVisuals;
