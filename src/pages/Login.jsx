import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";

import fbLogo from "../assets/images/fbVector.png";
import googleLogo from "../assets/images/googlevector.png";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "current-password",
  },
];

const SocialButtons = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex h-[29px] w-[453px] items-center gap-[11px]">
        <span className="h-px w-[200px] bg-[#D1D1D1]" />

        <span className="w-[17px] text-center text-[18px] font-normal leading-[29px] text-[#888888]">
          or
        </span>

        <span className="h-px w-[200px] bg-[#D1D1D1]" />
      </div>

      <div className="flex h-[72px] w-[160px] self-center gap-4">
        <button
          type="button"
          className="grid size-[72px] place-items-center rounded-3xl border border-[#D1D1D1] bg-white"
        >
          <img src={googleLogo} alt="" className="size-10" />
        </button>

        <button
          type="button"
          className="grid size-[72px] place-items-center rounded-3xl border border-[#D1D1D1] bg-white"
        >
          <img src={fbLogo} alt="" className="size-10" />
        </button>
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <AuthLayout
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm
        className="h-[683px]"
        eyebrow="Sign In"
        title="Welcome Back"
        fields={fields}
        submitLabel="Sign In"
        footer={{
          text: "New user?",
          linkLabel: "Create an account",
          to: "/register",
          textClassName: "text-[#888888]",
        }}
      >
        <SocialButtons />
      </AuthForm>
    </AuthLayout>
  );
}
