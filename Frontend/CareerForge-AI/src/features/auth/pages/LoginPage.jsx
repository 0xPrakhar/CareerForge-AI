import { Lock, LogIn, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../components/Input.jsx";
import Button from "../../../components/Button.jsx";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to continue improving your resume"
      footerText="Don't have an account? "
      footerLinkText="Register"
      footerLinkHref="/register"
    >
      <div className="flex flex-col gap-6">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          leftElement={<Mail className="size-4 text-slate-400" />}
        />

        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftElement={<Lock className="size-4 text-slate-400" />}
          />
          <Link
            to="/forgot-password"
            className="font-medium text-cyan-300 text-sm leading-5 self-end"
          >
            Forgot Password?
          </Link>
        </div>

        <Button className="bg-[linear-gradient(135deg,#6366F1_0%,#06B6D4_100%)] shadow-[0_12px_30px_rgba(99,102,241,0.28)] transition-all font-semibold rounded-xl text-white border-indigo-400/30 border border-solid w-full h-11">
          <LogIn className="size-4 mr-2" />
          Login
        </Button>
      </div>
    </AuthLayout>
  );
}