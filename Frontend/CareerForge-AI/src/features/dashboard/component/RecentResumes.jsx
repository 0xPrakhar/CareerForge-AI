import {
  FileText,
  Eye,
  Download,
  Trash2,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const resumes = [
  {
    title: "Frontend Developer Resume",
    date: "20 July 2026",
    score: "87",
    status: "Analyzed",
  },
  {
    title: "Backend Developer Resume",
    date: "18 July 2026",
    score: "82",
    status: "Analyzed",
  },
  {
    title: "Software Engineer Resume",
    date: "15 July 2026",
    score: "74",
    status: "Pending",
  },
];

const RecentResumes = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Recent Resumes
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            View your latest uploaded resumes and AI reports.
          </p>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:bg-white/10">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {resumes.map((resume) => (
          <div
            key={resume.title}
            className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-zinc-900 md:flex-row md:items-center md:justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
                <FileText className="h-7 w-7 text-violet-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {resume.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {resume.date}
                  </span>

                  <span
                    className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                      resume.status === "Analyzed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    <BadgeCheck className="h-3 w-3" />
                    {resume.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  ATS
                </p>

                <h2 className="text-3xl font-bold text-violet-400">
                  {resume.score}
                </h2>
              </div>

              <button className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10">
                <Eye className="h-5 w-5 text-zinc-300" />
              </button>

              <button className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10">
                <Download className="h-5 w-5 text-zinc-300" />
              </button>

              <button className="rounded-xl border border-red-500/20 p-3 transition hover:bg-red-500/10">
                <Trash2 className="h-5 w-5 text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentResumes;