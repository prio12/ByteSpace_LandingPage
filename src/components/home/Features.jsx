import GlowBackground from "../common/GlowBackground";
import ManageFeature from "./ManageFeature";
import PathFeature from "./PathFeature";

const Features = () => {
  return (
    <section className="relative mt-[120px] h-[1460px] overflow-hidden bg-[#FAFAFA]">
      <GlowBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-[72px] pl-[121px] pt-[120px]">
        <PathFeature />
        <ManageFeature />
      </div>
    </section>
  );
};

export default Features;
