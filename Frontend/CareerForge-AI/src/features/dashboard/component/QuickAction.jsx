import {
  Upload,
  Sparkles,
  BarChart3,
  FileText,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Upload Resume",
    description: "Upload a new resume for ATS analysis.",
    icon: Upload,
    gradient: "from-violet-600 to-fuchsia-600",
  },
  {
    title: "AI Resume Builder",
    description: "Create a professional ATS-friendly resume.",
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "ATS Reports",
    description: "View detailed AI analysis and reports.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "My Resumes",
    description: "Manage all uploaded resumes in one place.",
    icon: FileText,
    gradient: "from-orange-500 to-amber-600",
  },
];

const QuickActions = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-zinc-400">
          Everything you need is one click away.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${action.gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />

              <div className="relative">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${action.gradient}`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {action.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400">
                  Open

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;