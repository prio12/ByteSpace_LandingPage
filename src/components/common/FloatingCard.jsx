const FloatingCard = ({ className = "", bg = "bg-white", children }) => {
  return (
    <div
      className={`absolute flex flex-col gap-2 rounded-2xl p-4 font-[family-name:Satoshi] text-[#242528] ${bg} ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
