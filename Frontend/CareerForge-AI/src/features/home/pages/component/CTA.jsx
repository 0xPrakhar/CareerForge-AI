import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-page relative z-10">
        {/* Background Glow */}
        <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
          <div className="h-[31.25rem] w-full max-w-7xl bg-gradient-to-r from-transparent via-violet-600/10 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Land More Interviews?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Upload your resume, receive AI-powered ATS analysis, and improve
            your chances of getting hired.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              Start Free
              <ArrowRight size={18} />
            </Link>
            <Link to="/#how-it-works" className="text-base font-semibold leading-6 text-zinc-300 transition-colors hover:text-white">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <Check size={16} className="text-green-500" />
            Free forever to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;