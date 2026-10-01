import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
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
    autoComplete: "new-password",
  },
];

export default function Register() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthForm
        className="h-[672px]"
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        fields={fields}
        submitLabel="Continue"
        footer={{
          text: "Already have an account?",
          linkLabel: "Login",
          to: "/login",
          textClassName: "text-[#4B4C53]",
        }}
      />
    </AuthLayout>
  );
}
