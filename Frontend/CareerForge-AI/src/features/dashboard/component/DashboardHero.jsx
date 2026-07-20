import { Upload, ArrowRight, Sparkles } from "lucide-react";

const DashboardHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950/30 p-8">
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <Sparkles size={16} />
            AI Resume Assistant
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">
            Welcome back,
            <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Prakhar 👋
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Upload your resume to receive an ATS score, AI suggestions,
            keyword analysis, and personalized career recommendations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-medium text-white transition hover:scale-[1.02]">
              <Upload size={18} />
              Upload Resume
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10">
              View Reports
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-95">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Latest ATS Score</p>

            <h2 className="mt-2 text-4xl font-bold text-emerald-400">
              87
            </h2>

            <p className="mt-2 text-xs text-zinc-500">
              Excellent Resume
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Total Resumes</p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              12
            </h2>

            <p className="mt-2 text-xs text-zinc-500">
              Uploaded
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Best Score</p>

            <h2 className="mt-2 text-4xl font-bold text-violet-400">
              91
            </h2>

            <p className="mt-2 text-xs text-zinc-500">
              ATS Rating
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Success Rate</p>

            <h2 className="mt-2 text-4xl font-bold text-cyan-400">
              82%
            </h2>

            <p className="mt-2 text-xs text-zinc-500">
              Resume Match
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;