const SectionIntro = ({ title, description, titleClassName = "" }) => {
  return (
    <div className="mx-auto flex w-full max-w-[917px] flex-col items-center gap-4 text-center">
      <h2
        className={`font-[family-name:Poppins] font-semibold text-[#040819] ${titleClassName}`}
      >
        {title}
      </h2>
      <p className="w-full font-[family-name:Satoshi] text-[18px] font-normal leading-[160%] text-[#82868E]">
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
