import {
  FileText,
  TrendingUp,
  Award,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    title: "Total Resumes",
    value: "12",
    change: "+2 this month",
    icon: FileText,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Average ATS",
    value: "84%",
    change: "+6%",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Best Score",
    value: "91",
    change: "Highest",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Interviews",
    value: "5",
    change: "+1",
    icon: Briefcase,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const StatsCards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-zinc-900"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {item.value}
                </h2>

                <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  {item.change}
                </span>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={`h-7 w-7 ${item.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCards;