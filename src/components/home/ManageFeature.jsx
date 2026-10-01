import { MdCheckCircle } from "react-icons/md";
import FitBox from "../common/FitBox";
import HappyStudentsCard from "./cards/HappyStudentsCard";
import spiral from "../../assets/icons/featureSpiral2.png";
import personImage from "../../assets/images/featureGirlImage.png";

const personShadow = {
  filter: "drop-shadow(25px 37px 36px rgba(0, 0, 0, 0.1))",
};

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const Badge = () => (
  <span className="grid h-6 place-items-center rounded-3xl bg-[#CBFC01] px-2 py-[2px] text-[10px] font-medium leading-5 text-[#242528]">
    +12$
  </span>
);

const ManageFeature = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[79px] min-[1380px]:h-[596px]">
      <FitBox
        width={541}
        height={596}
        className="mx-auto w-full lg:mx-0 lg:w-[45%] lg:shrink-0 min-[1380px]:w-[541px]"
      >
        <div
          id="manage-feature-visual"
          className="relative h-[596px] w-[541px]"
        >
          <div className="absolute left-0 top-[44px] z-[1] flex w-[232px] flex-col gap-2 rounded-2xl bg-[#003BE2] p-4 font-[family-name:Satoshi] text-[#F5F5F6] backdrop-blur-[20px]">
            <div>
              <p className="text-[16px] font-medium leading-[19px]">
                Total Revenue
              </p>
              <p className="text-[10px] leading-3">July 1-28</p>
            </div>
            <div className="flex w-[200px] items-center justify-between">
              <p className="font-[family-name:Poppins] text-[24px] font-semibold leading-8">
                $120.29
              </p>
              <Badge />
            </div>
            <div className="h-2 w-[200px] rounded-3xl bg-white">
              <div className="h-full w-[112px] rounded-3xl bg-[#D4FB20]" />
            </div>
          </div>

          <div className="absolute left-0 top-[194px] z-[1] flex w-[134px] flex-col gap-2 rounded-2xl bg-[#003BE2] p-4 font-[family-name:Satoshi] text-[#F5F5F6] backdrop-blur-[20px]">
            <div>
              <p className="whitespace-nowrap text-[16px] font-medium leading-[19px]">
                Year to Date
              </p>
              <p className="text-[10px] leading-3">2023</p>
            </div>
            <p className="whitespace-nowrap font-[family-name:Poppins] text-[24px] font-semibold leading-8">
              $1,200.38
            </p>
            <div className="self-start">
              <Badge />
            </div>
          </div>

          <img
            src={personImage}
            alt=""
            style={personShadow}
            className="absolute left-7 top-0 z-[2] h-[596px] w-[435px] max-w-none object-cover"
          />

          <HappyStudentsCard
            compact
            className="left-[283px] top-[413px] z-[3] backdrop-blur-[20px]"
          />

          <img
            src={spiral}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[305px] top-[114px] z-[4] size-[215px] max-w-none"
          />
        </div>
      </FitBox>

      <div className="flex w-full flex-col gap-10 lg:min-w-0 lg:flex-1 min-[1380px]:w-[580px] min-[1380px]:flex-none">
        <h2 className="max-w-[391px] font-[family-name:Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528] max-md:text-[32px]">
          Create & Manage Courses Easily.
        </h2>
        <p className="w-full font-[family-name:Satoshi] text-[18px] font-bold leading-7 text-[#4B4C53] min-[1380px]:h-[58px] min-[1380px]:w-[574px]">
          ByteSpace supports individuals or entities in the creation,
          publication, and administration of educational courses.
        </p>
        <ul className="flex w-[231px] flex-col gap-4">
          {perks.map((label) => (
            <li key={label} className="flex h-6 items-center gap-2">
              <MdCheckCircle className="size-6 shrink-0 text-[#003BE2]" />
              <span className="whitespace-nowrap font-[family-name:Satoshi] text-[18px] font-medium leading-[120%] text-[#242528]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageFeature;
