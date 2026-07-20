import { Link } from "react-router-dom";
import { Logo } from "../components/shared/Logo.jsx";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}) {
  return (
    <div
      className="
        min-h-screen bg-black relative overflow-hidden
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-size-[48px_48px]
      "
    >
      {/* ================= Top Logo Bar ================= */}
      <div className="relative z-10 px-8 py-6">
        <Logo />
      </div>

      {/* ================= Card (centered) ================= */}
      <div className="relative z-10 flex justify-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
            </div>

            <div className="space-y-6">{children}</div>
          </div>

          {/* ================= Footer Link (outside card) ================= */}
          <p className="mt-3 text-center text-gray-400 text-sm">
            {footerText}{" "}
            <Link
              to={footerLinkHref}
              className="font-semibold text-white hover:text-cyan-300 transition-colors"
            >
              {footerLinkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
