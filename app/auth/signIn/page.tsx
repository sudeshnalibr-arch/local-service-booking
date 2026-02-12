import AuthShell from "@/components/authentication/authcomponents/authShell";
import LoginForm from "@/components/authentication/authcomponents/loginForm";


export default function LoginPage() {
  return (
    <AuthShell mode="login">
      <LoginForm />
    </AuthShell>
  );
}
