import {
  FileCheck,
  CheckCircle2,

 ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";

const tips = [
  "Upload PDF format only",
  "Maximum file size 5 MB",
  "One resume per upload",
  "Keep ATS-friendly formatting",
  "Avoid images and complex tables",
  "Use clear section headings",
];

const UploadTips = () => {
  return (
    <Card className="h-full rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
          <ShieldCheck className="h-6 w-6 text-violet-400" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Upload Tips
          </h2>

          <p className="text-sm text-zinc-400">
            Improve your ATS score before uploading.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {tips.map((tip) => (
          <div
            key={tip}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />

            <p className="text-sm leading-6 text-zinc-300">
              {tip}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-linear-to-r from-violet-600/20 to-fuchsia-600/20 p-5">
        <div className="flex items-start gap-3">
          <FileCheck className="mt-1 h-6 w-6 text-violet-400" />

          <div>
            <h3 className="font-semibold text-white">
              Pro Tip
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Upload the same resume you actually submit to recruiters so the AI
              analysis matches real-world ATS systems.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UploadTips;