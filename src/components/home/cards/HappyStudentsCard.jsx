import FloatingCard from "../../common/FloatingCard";
import { avatars } from "../../../data/avatars";

const variants = {
  default: {
    bg: "bg-white",
    star: "fill-[#D4FB20]",
    subtext: "text-[#82868E]",
    ring: "ring-white",
    count: "bg-[#D4FB20]",
  },
  lime: {
    bg: "bg-[#D4FB20]",
    star: "fill-[#003BE2]",
    subtext: "text-[#82868E]",
    ring: "ring-[#D4FB20]",
    count: "bg-[#242528] text-[#F5F5F6]",
  },
};

const Star = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`size-4 ${className}`} aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HappyStudentsCard = ({
  className = "",
  compact = false,
  variant = "default",
}) => {
  const v = variants[variant];

  return (
    <FloatingCard bg={v.bg} className={`w-[258px] ${className}`}>
      <div>
        <p
          className={`text-[16px] font-medium ${compact ? "leading-6" : "leading-[19px]"}`}
        >
          Happy Students
        </p>
        <p
          className={`flex items-center ${v.subtext} ${
            compact
              ? "h-4 text-[10px] leading-[15px]"
              : "text-[12px] leading-[19px]"
          }`}
        >
          4.5 (240)
          <Star className={v.star} />
        </p>
      </div>

      <div className="flex w-[232px] shrink-0 -space-x-4">
        {avatars.map(({ id, src }) =>
          src ? (
            <img
              key={id}
              src={src}
              alt=""
              className={`size-[43px] rounded-full object-cover ring-2 ${v.ring}`}
            />
          ) : (
            <div
              key={id}
              className={`size-[43px] rounded-full bg-[#CBD0D8] ring-2 ${v.ring}`}
            />
          ),
        )}
        <div
          className={`grid size-[43px] place-items-center rounded-full text-[12px] font-bold leading-[18px] ring-2 ${v.ring} ${v.count}`}
        >
          2K+
        </div>
      </div>
    </FloatingCard>
  );
};

export default HappyStudentsCard;
