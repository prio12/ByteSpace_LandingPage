import { Link } from "react-router-dom";
import AuthField from "./AuthField";

const AuthForm = ({
  eyebrow,
  title,
  fields,
  submitLabel,
  footer,
  className = "",
  children,
}) => {
  return (
    <div
      className={`flex w-[453px] flex-col justify-between font-[family-name:Satoshi] ${className}`}
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-[18px] leading-[29px] text-[#003BE2]">{eyebrow}</p>
          <h1 className="font-[family-name:Poppins] text-[44px] font-semibold leading-[53px] tracking-[-0.01em] text-[#242528]">
            {title}
          </h1>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          {fields.map((field) => (
            <AuthField key={field.name} {...field} />
          ))}
          <button
            type="submit"
            className="cursor-pointer self-end rounded-3xl bg-[#D4FB20] px-6 py-3 text-[18px] font-medium leading-[22px] text-[#242528]"
          >
            {submitLabel}
          </button>
        </form>
      </div>

      {children}

      <p
        className={`flex gap-1 self-center text-[16px] leading-[26px] ${footer.textClassName}`}
      >
        <span>{footer.text}</span>
        <Link to={footer.to} className="text-[#003BE2]">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
