import FloatingCard from "../../common/FloatingCard";

const ProgressCard = ({ className = "" }) => {
  return (
    <FloatingCard className={`w-[232px] ${className}`}>
      <p className="text-[14px] font-medium leading-[17px]">
        Learning Progress
      </p>
      <p className="font-[family-name:Poppins] text-[48px] font-semibold leading-[58px]">
        55%
      </p>
      <div className="h-2 w-[200px] rounded-3xl bg-[#F6F6F6]">
        <div className="h-full w-[112px] rounded-3xl bg-[#D4FB20]" />
      </div>
    </FloatingCard>
  );
};

export default ProgressCard;
