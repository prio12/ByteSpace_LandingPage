import SectionIntro from "../common/SectionIntro";

const ExploreIntro = () => {
  return (
    <section className="flow-root bg-white px-4">
      <div className="mt-[72px]">
        <SectionIntro
          title="Explore Diverse Learning Paths at Bytespace"
          titleClassName="min-[840px]:whitespace-nowrap text-[36px] max-md:text-[28px] leading-[120%] tracking-[-0.01em]"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
      </div>
    </section>
  );
};

export default ExploreIntro;
