import FloatingCard from "../../common/FloatingCard";
import { avatars } from "../../../data/avatars";

const Star = () => (
  <svg viewBox="0 0 24 24" className="size-4 fill-[#D4FB20]" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HappyStudentsCard = ({ className = "", compact = false }) => {
  return (
    <FloatingCard className={`w-[258px] ${className}`}>
      <div>
        <p
          className={`text-[16px] font-medium ${compact ? "leading-6" : "leading-[19px]"}`}
        >
          Happy Students
        </p>
        <p
          className={`flex items-center text-[#82868E] ${
            compact
              ? "h-4 text-[10px] leading-[15px]"
              : "text-[12px] leading-[19px]"
          }`}
        >
          4.5 (240)
          <Star />
        </p>
      </div>

      <div className="flex w-[232px] shrink-0 -space-x-4">
        {avatars.map(({ id, src }) =>
          src ? (
            <img
              key={id}
              src={src}
              alt=""
              className="size-[43px] rounded-full object-cover ring-2 ring-white"
            />
          ) : (
            <div
              key={id}
              className="size-[43px] rounded-full bg-[#CBD0D8] ring-2 ring-white"
            />
          ),
        )}
        <div className="grid size-[43px] place-items-center rounded-full bg-[#D4FB20] text-[12px] font-bold leading-[18px] ring-2 ring-white">
          2K+
        </div>
      </div>
    </FloatingCard>
  );
};

export default HappyStudentsCard;
