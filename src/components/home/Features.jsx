import GlowBackground from "../common/GlowBackground";
import PathFeature from "./PathFeature";
import ManageFeature from "./ManageFeature";

const Features = () => {
  return (
    <section className="relative mt-[120px] h-auto overflow-hidden bg-[#FAFAFA] pb-[120px] max-md:mt-16 max-md:pb-16 min-[1380px]:h-[1460px]">
      <GlowBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-[72px] px-6 pt-[120px] max-md:gap-12 max-md:pt-16 min-[1380px]:pl-[121px] min-[1380px]:pr-0">
        <PathFeature />
        <ManageFeature />
      </div>
    </section>
  );
};

export default Features;
