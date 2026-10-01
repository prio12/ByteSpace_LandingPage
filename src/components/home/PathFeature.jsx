import CourseCard from "./CourseCard";
import ProgressCard from "./cards/ProgressCard";
import { courses } from "../../data/courses";
import student from "../../assets/images/LaptopHolderImageSmiling.png";
import spiral from "../../assets/icons/featureSpiral.png";
import FitBox from "../common/FitBox";
const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const PathFeature = () => {
  return (
    <div className="flex w-full max-w-[1258px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[63px] min-[1380px]:h-[552px]">
      <div className="flex w-full flex-col gap-10 lg:min-w-0 lg:flex-1 min-[1380px]:w-[574px] min-[1380px]:flex-none">
        <h2 className="w-full font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528] max-[1379px]:text-[36px] max-md:text-[30px] min-[1380px]:w-[577px] min-[1380px]:max-w-none">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="w-full font-[family-name:Satoshi] text-[18px] leading-[160%] text-[#4B4C53] min-[1380px]:w-[477px]">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="flex gap-14">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-[family-name:Poppins] text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]">
                {value}
              </p>
              <p className="font-[family-name:Satoshi] text-[18px] leading-[160%] text-[#4B4C53]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FitBox
        width={621}
        height={552}
        className="mx-auto w-full lg:mx-0 lg:w-1/2 lg:shrink-0 min-[1380px]:w-[621px]"
      >
        <div id="path-feature-visual" className="relative h-[552px] w-[621px]">
          <div className="absolute left-0 top-0 w-[373px]">
            <CourseCard course={courses[0]} variant="feature" />
          </div>
          <img
            src={student}
            alt="Smiling student holding a laptop"
            className="absolute left-0 top-3 h-[540px] w-[577px] max-w-none"
            style={{ filter: "drop-shadow(25px 37px 36px rgba(0,0,0,0.1))" }}
          />
          <ProgressCard
            tall
            className="left-[345px] top-[213px] backdrop-blur-[20px]"
          />
          <img
            src={spiral}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[406px] top-[67px] size-[215px] max-w-none"
          />
        </div>
      </FitBox>
    </div>
  );
};

export default PathFeature;
