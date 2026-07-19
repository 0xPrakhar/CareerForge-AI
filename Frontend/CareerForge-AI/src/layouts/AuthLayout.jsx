import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
  leftPanelExtra,
}) {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex overflow-hidden">
      {/* ================= LEFT PANEL ================= */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-14 bg-linear-to-br from-[#111827] via-[#0B1120] to-[#020617] border-r border-white/10">
        {/* Background Blobs */}
        <div className="absolute top-20 left-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px] animate-pulse delay-1000" />

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-tr from-cyan-500 to-indigo-500 font-bold text-white text-xl shadow-lg shadow-cyan-500/30">
              C
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                CareerForge AI
              </h2>
              <p className="text-sm text-gray-400">
                AI Resume Analyzer • ATS Checker • Career Assistant
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="relative z-10 max-w-lg space-y-6">
          <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/20">
            Build • Optimize • Get Hired
          </span>

          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Craft resumes that
              <span className="block text-cyan-400">land interviews.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Analyze your resume, boost ATS scores, generate AI-powered cover
              letters, detect skill gaps, and prepare for your dream job—all in
              one place.
            </p>
          </div>

          {leftPanelExtra}
        </div>

        {/* Footer */}
        <div className="relative z-10 text-sm text-gray-500">
          © {new Date().getFullYear()} CareerForge AI
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] transition hover:shadow-[0_12px_50px_-12px_rgba(0,0,0,0.7)]">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-gray-400">{subtitle}</p>
            </div>

            <div className="space-y-6">{children}</div>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-white/10" />
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Google Button */}
            <button
              disabled
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-gray-400 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-300">
                Coming Soon
              </span>
            </button>

            {/* Footer */}
            <p className="mt-8 text-center text-gray-400">
              {footerText}{" "}
              <Link
                to={footerLinkHref}
                className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
