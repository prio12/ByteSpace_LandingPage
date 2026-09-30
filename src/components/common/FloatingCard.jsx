const FloatingCard = ({ className = "", children }) => {
  return (
    <div
      className={`absolute flex flex-col gap-2 rounded-2xl bg-white p-4 font-[family-name:Satoshi] text-[#242528] ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
