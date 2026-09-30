import FloatingCard from "../../common/FloatingCard";

const CategoryCard = ({ className = "" }) => {
  return (
    <FloatingCard className={`w-[208px] ${className}`}>
      <div>
        <p className="text-[16px] font-medium leading-[19px]">UI/UX Design</p>
        <p className="flex items-center gap-2 text-[12px] leading-[19px] text-[#82868E]">
          <span>200 Courses</span>
          <span className="text-[10px]">•</span>
          <span>1000+ Students</span>
        </p>
      </div>
    </FloatingCard>
  );
};

export default CategoryCard;
