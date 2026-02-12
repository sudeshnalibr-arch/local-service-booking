import AuthShell from "@/components/authentication/authcomponents/authShell";
import SignupForm from "@/components/authentication/authcomponents/signUpForm";


export default function SignupPage() {
  return (
    <AuthShell mode="signup">
      <SignupForm />
    </AuthShell>
  );
}
