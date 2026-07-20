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
        {/* Email Input */}
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          leftElement={<Mail className="size-4 text-slate-400" />}
        />

        {/* Password Input + Forgot Link */}
        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftElement={<Lock className="size-4 text-slate-400" />}
          />
          <Link
            to="/forgot-password"
            className="font-medium text-fuchsia-300 text-sm leading-5 self-end"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button className="bg-linear-to-br from-violet-600 to-fuchsia-600 shadow-[0_12px_30px_rgba(124,58,237,0.28)] transition-all font-semibold rounded-xl text-white border-violet-400/30 border border-solid w-full h-11 flex items-center justify-center gap-2">
  <LogIn className="w-4 h-4" />
  <span>Login</span>
</Button>


        {/* Divider */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="grow border-t border-gray-700" />
          <span>or</span>
          <span className="grow border-t border-gray-700" />
        </div>

        {/* Google Button (Coming Soon) */}
        <Button
          disabled
          className="bg-white text-gray-700 font-semibold rounded-xl w-full h-11 border border-gray-300 flex items-center justify-center gap-2 cursor-not-allowed"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Continue with Google (Coming Soon)
        </Button>
      </div>
    </AuthLayout>
  );
}
