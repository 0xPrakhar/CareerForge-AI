import { Eye, Lock, Mail, User, UserPlus } from "lucide-react";
import AuthLayout from "../../../layouts/AuthLayout.jsx";
import Input from "../../../components/Input.jsx";
import Button from "../../../components/Button.jsx";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start building a resume recruiters want."
      footerText="Already have an account? "
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <div className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          leftElement={<User className="size-4 text-slate-400" />}
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          leftElement={<Mail className="size-4 text-slate-400" />}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          leftElement={<Lock className="size-4 text-slate-400" />}
          rightElement={
            <Eye className="size-4 cursor-pointer text-slate-400 hover:text-white transition-colors" />
          }
        />

        <Button className="w-full h-12 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-semibold flex items-center justify-center gap-2">
          <UserPlus className="mr-2 size-4" />
          Create Account
        </Button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-6">
        <span className="grow border-t border-gray-700" />
        <span>or</span>
        <span className="grow border-t border-gray-700" />
      </div>

      {/* Google Button (Coming Soon) */}
      <Button
        disabled
        className="bg-white text-gray-700 font-semibold rounded-xl w-full h-11 border border-gray-300 flex items-center justify-center gap-2 cursor-not-allowed mt-4"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        Continue with Google (Coming Soon)
      </Button>
    </AuthLayout>
  );
}
