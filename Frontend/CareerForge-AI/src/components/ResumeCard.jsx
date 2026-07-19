import { Link } from "react-router-dom";
import { FileText, MoreHorizontal } from "lucide-react";

const ResumeCard = ({ resume }) => {
  const tone =
    resume.atsScore >= 85
      ? "text-emerald-300"
      : resume.atsScore >= 70
      ? "text-amber-300"
      : "text-rose-300";

  return (
    <Link
      to={`/dashboard/resumes/${resume._id}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-strong"
    >
      {/* Glow Effect */}
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-(image:--gradient-brand) opacity-0 blur-3xl transition-opacity group-hover:opacity-15"
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface">
            <FileText className="h-4 w-4" />
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {resume.title}
            </p>

            <p className="truncate text-xs text-muted-foreground">
              {resume.originalFileName}
            </p>
          </div>
        </div>

        <MoreHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
      </div>

      {/* ATS Score */}
      <div className="relative mt-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            ATS Score
          </p>

          <p className={`mt-0.5 text-2xl font-semibold tracking-tight ${tone}`}>
            {resume.atsScore}
            <span className="text-sm text-muted-foreground"> /100</span>
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          {new Date(resume.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-background">
        <div
          className="h-full rounded-full bg-(image:--gradient-brand)"
          style={{
            width: `${resume.atsScore}%`,
          }}
        />
      </div>
    </Link>
  );
};

export default ResumeCard;