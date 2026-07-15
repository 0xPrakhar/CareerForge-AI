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

        <div className="space-y-2">
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            leftElement={<Lock className="size-4 text-slate-400" />}
            rightElement={
              <Eye className="size-4 cursor-pointer text-slate-400 hover:text-white transition-colors" />
            }
          />

          <div className="flex items-center gap-2">
            <div className="flex flex-1 gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
              <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
              <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
              <div className="h-1.5 flex-1 rounded-full bg-white/10" />
            </div>
            <span className="text-xs font-medium text-cyan-300">Strong</span>
          </div>
        </div>

        <Button className="w-full h-12 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 text-white font-semibold">
          <UserPlus className="mr-2 size-4" />
          Create Account
        </Button>
      </div>
    </AuthLayout>
  );
}