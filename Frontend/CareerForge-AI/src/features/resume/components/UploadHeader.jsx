import { UploadCloud } from "lucide-react";

const UploadHeader = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-900 to-violet-950/30 p-8">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
            <UploadCloud className="h-4 w-4" />
            AI Resume Analysis
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">
            Upload Your Resume
          </h1>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Upload your latest resume and receive an AI-powered ATS score,
            keyword analysis, improvement suggestions, and personalized career
            insights in seconds.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm text-zinc-400">
            Supported Format
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            PDF
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Maximum file size: 5 MB
          </p>
        </div>
      </div>
    </section>
  );
};

export default UploadHeader;