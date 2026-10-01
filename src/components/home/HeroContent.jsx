import SearchBar from "../common/SearchBar";

const HeroContent = () => {
  return (
    <div className="relative z-10 mx-auto mt-[49px] flex min-h-[345px] w-full max-w-[1200px] flex-col items-center gap-[60px] px-4 max-md:gap-10">
      <div className="flex w-full max-w-[935px] flex-col items-center gap-8 text-center max-md:gap-5">
        <h1 className="font-[family-name:Poppins] text-[72px] font-semibold leading-[120%] tracking-[-0.01em] text-white max-lg:text-[56px] max-md:text-[40px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="max-w-[819px] font-[family-name:Satoshi] text-[18px] font-normal leading-[160%] text-[#E5E6E8] max-md:text-[16px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      <SearchBar />
    </div>
  );
};

export default HeroContent;
