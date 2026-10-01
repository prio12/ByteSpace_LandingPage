const AuthField = ({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[14px] font-medium leading-[17px] text-[#242528]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="h-[52px] w-full rounded-xl border border-[#E5E6E8] bg-white px-[23px] text-[18px] leading-[29px] text-[#242528] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
      />
    </div>
  );
};

export default AuthField;
