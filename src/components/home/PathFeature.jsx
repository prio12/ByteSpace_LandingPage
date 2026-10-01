import CourseCard from "./CourseCard";
import ProgressCard from "./cards/ProgressCard";
import { courses } from "../../data/courses";
import student from "../../assets/images/LaptopHolderImageSmiling.png";
import spiral from "../../assets/icons/featureSpiral.png";
const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const PathFeature = () => {
  return (
    <div className="flex h-[552px] w-[1258px] gap-[63px]">
      <div className="flex w-[574px] shrink-0 flex-col gap-10 self-center">
        <h2 className="w-[577px] max-w-none font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="w-[477px] font-[family-name:Satoshi] text-[18px] leading-[160%] text-[#4B4C53]">
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

      <div
        id="path-feature-visual"
        className="relative h-[552px] w-[621px] shrink-0"
      >
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
    </div>
  );
};

export default PathFeature;
