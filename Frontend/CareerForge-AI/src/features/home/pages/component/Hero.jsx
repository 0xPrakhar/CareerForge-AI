import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="container-page flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur">
          <Sparkles size={16} />
          AI Powered Resume Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Build Better Resumes.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Land More Interviews.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          CareerForge AI analyzes your resume, improves ATS compatibility,
          identifies missing skills, and provides personalized AI suggestions
          to help you stand out and secure more interviews.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
          >
            Start Free
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">

          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-400" size={18} />
            AI Powered
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-400" size={18} />
            ATS Optimized
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-purple-400" size={18} />
            Secure & Private
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;