import {
  UploadCloud,
  BrainCircuit,
  FileCheck2,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    icon: UploadCloud,
    title: "Upload Your Resume",
    description:
      "Upload your resume in PDF format. CareerForge AI securely processes your document within seconds.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "AI Analyzes Everything",
    description:
      "Our AI evaluates ATS compatibility, missing keywords, formatting, strengths, and improvement opportunities.",
  },
  {
    id: "03",
    icon: FileCheck2,
    title: "Improve & Apply",
    description:
      "Receive actionable recommendations, improve your resume, and confidently apply for your dream job.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-28 overflow-hidden">
      <div className="container-page">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            CareerForge AI makes resume improvement effortless.
            Upload your resume, let AI analyze it, and receive
            personalized recommendations in minutes.
          </p>

        </div>

        {/* Cards */}

        <motion.div 
          className="mx-auto mt-20 grid max-w-7xl justify-center gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >

          {steps.map((step) => {

            const Icon = step.icon;
            const cardVariants = {
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            };

            return (

              <motion.div
                key={step.id}
                className="relative flex max-w-md flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
                variants={cardVariants}
              >

                {/* Number */}

                <div className="absolute right-7 top-7 text-7xl font-bold text-white/5">
                  {step.id}
                </div>

                {/* Icon */}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">

                  <Icon className="h-7 w-7 text-white" />

                </div>

                {/* Title */}

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="max-w-sm text-base leading-relaxed text-zinc-400">
                  {step.description}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;