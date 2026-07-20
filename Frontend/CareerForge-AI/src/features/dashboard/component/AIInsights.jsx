import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    type: "success",
    title: "Strong Professional Summary",
    description: "Your resume introduction is clear and impactful.",
  },
  {
    type: "warning",
    title: "Missing Important Keywords",
    description: "Add Docker, Kubernetes and AWS for better ATS ranking.",
  },
  {
    type: "success",
    title: "Excellent Formatting",
    description: "Your resume layout is ATS-friendly.",
  },
  {
    type: "warning",
    title: "Experience Needs Numbers",
    description: "Include measurable achievements to increase credibility.",
  },
];

const AIInsights = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-violet-400" />

            <h2 className="text-2xl font-semibold text-white">
              AI Insights
            </h2>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Personalized suggestions generated from your latest resume.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
          Full Report

          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition hover:border-violet-500/30"
          >
            <div className="flex items-start gap-4">
              <div
                className={`mt-1 flex h-11 w-11 items-center justify-center rounded-xl ${
                  item.type === "success"
                    ? "bg-emerald-500/10"
                    : "bg-yellow-500/10"
                }`}
              >
                {item.type === "success" ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Card */}
      <div className="mt-6 rounded-2xl bg-linear-to-r from-violet-600/20 to-fuchsia-600/20 p-5">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-violet-400" />

          <div>
            <h3 className="font-semibold text-white">
              ATS Score can improve by 12%
            </h3>

            <p className="mt-1 text-sm text-zinc-300">
              Add missing keywords and quantify your achievements to boost your ranking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;