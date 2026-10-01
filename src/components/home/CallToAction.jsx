import Ornaments from "./Ornaments";
import { ctaOrnaments } from "../../data/ornaments";
import GridBackground from "../common/GridBackground";

const CallToAction = () => {
  return (
    <section className="overflow-hidden bg-[#003BE2]">
      <div className="relative mx-auto h-[488px] w-full max-w-[1440px] px-4 pt-[85px] max-[1199px]:h-auto max-[1199px]:pb-16 max-[1199px]:pt-16">
        <GridBackground />
        <div className="max-[1199px]:hidden">
          <Ornaments items={ctaOrnaments} />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[964px] flex-col items-center gap-10 text-center text-[#F5F5F6] min-[1200px]:h-[319px]">
          <h2 className="max-w-[710px] font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] max-md:text-[32px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="w-full font-[family-name:Satoshi] text-[18px] font-normal leading-[160%] max-md:text-[16px]">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <a
            href="#"
            className="flex h-[46px] w-[172px] shrink-0 items-center justify-center rounded-3xl bg-[#D4FB20] px-6 py-3 font-[family-name:Satoshi] text-[18px] font-medium leading-[120%] text-[#242528]"
          >
            Join as Creator
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
