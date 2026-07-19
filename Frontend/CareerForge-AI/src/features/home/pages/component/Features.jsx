import {
  FileText,
  Target,
  Sparkles,
  History,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Resume Analysis",
    description:
      "Upload your resume and receive detailed AI feedback highlighting strengths, weaknesses, and missing skills.",
  },
  {
    icon: Target,
    title: "ATS Optimization",
    description:
      "Increase your ATS score with actionable suggestions that help your resume pass recruiter screening systems.",
  },
  {
    icon: Sparkles,
    title: "Personalized Suggestions",
    description:
      "Receive AI-powered recommendations tailored to your career goals and industry.",
  },
  {
    icon: History,
    title: "Resume History",
    description:
      "Access previous analyses anytime and monitor your resume improvements over time.",
  },
  {
    icon: Briefcase,
    title: "Interview Preparation",
    description:
      "Generate interview questions based on your resume and practice with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your resumes remain protected with secure storage and privacy-first processing.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To Build A Winning Resume
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            CareerForge AI helps you analyze, optimize, and improve your resume
            using intelligent AI tools designed for modern hiring.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl justify-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex max-w-md flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="max-w-sm text-base leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;