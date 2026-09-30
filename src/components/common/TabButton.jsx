const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-3xl px-4 py-3 font-[family-name:Satoshi] text-[16px] font-medium leading-[19px] ${
        active ? "bg-[#D4FB20] text-[#242528]" : "bg-[#F5F5F6] text-[#4B4C53]"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
