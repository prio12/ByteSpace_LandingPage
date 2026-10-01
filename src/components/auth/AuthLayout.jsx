import { courses } from "../../data/courses";
import { authOrnaments } from "../../data/ornaments";
import CourseCard from "../home/CourseCard";
import HappyStudentsCard from "../home/cards/HappyStudentsCard";
import Ornaments from "../home/Ornaments";
import Navbar from "../common/Navbar";
import GridBackground from "../common/GridBackground";

const buildDigitalAsset = courses.find((c) => c.id === 2);
const bigData = courses.find((c) => c.id === 3);

const AuthLayout = ({ heading, description, children }) => {
  return (
    <section className="overflow-hidden bg-[#003BE2]">
      <div className="relative mx-auto h-[1024px] w-full max-w-[1440px]">
        <GridBackground />
        <Navbar logoOnly />
        <div className="absolute left-[122px] top-[120px] z-10 flex w-[475px] flex-col gap-4 text-[#F5F5F6]">
          <h2 className="font-[family-name:Poppins] text-[20px] font-semibold leading-6">
            {heading}
          </h2>
          <p className="font-[family-name:Satoshi] text-[18px] font-normal leading-[160%]">
            {description}
          </p>
        </div>

        <div className="absolute inset-0 z-[1]">
          <div className="absolute left-[122px] top-[394px] w-[373px]">
            <CourseCard course={buildDigitalAsset} variant="feature" />
          </div>
          <div className="absolute left-[233px] top-[305px] w-[373px]">
            <CourseCard course={bigData} variant="feature" />
          </div>
          <HappyStudentsCard
            variant="lime"
            compact
            className="left-[348px] top-[740px]"
          />
        </div>

        <Ornaments items={authOrnaments} />

        <div className="absolute left-[741px] top-[120px] z-10 h-[784px] w-[579px] rounded-3xl bg-white pl-[63px] pt-[61px]">
          <div className="w-[453px]">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
