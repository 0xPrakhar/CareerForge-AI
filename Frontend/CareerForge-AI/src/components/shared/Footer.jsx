import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// --- Data ---
const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "ATS Analysis", href: "/#ats-analysis" },
  { label: "Resume Builder", href: "/builder" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Roadmap", href: "/roadmap" },
];

const resourceLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Careers", href: "/careers" },
];

const footerColumns = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourceLinks },
  { title: "Company", links: companyLinks },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/careerforge-ai", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/company/careerforge-ai", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com/careerforgeai", icon: FaTwitter },
  { label: "Email", href: "mailto:hello@careerforge.ai", icon: FaEnvelope },
];

// --- Reusable pieces ---
const FooterLinkColumn = ({ title, links }) => (
  <nav aria-label={title}>
    <h3 className="text-sm font-medium text-white">{title}</h3>
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.href}
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialIcon = ({ label, href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={label}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors duration-200 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
  >
    <Icon className="h-4 w-4" />
  </motion.a>
);

// --- Main Component ---
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,black,transparent)]"
      >
        <div className="absolute left-1/2 top-0 h-96 w-2xl -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      {/* Signature scan line — nods to ATS document scanning */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">
        <motion.div
          className="h-px w-1/3 bg-linear-to-r from-transparent via-violet-400 to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] md:gap-8">
          {/* Brand column */}
          <div className="max-w-xs text-center md:text-left">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                CareerForge{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  AI
                </span>
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                Beta
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Turn a resume nobody reads into one that clears every ATS filter
              and lands the interview.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <SocialIcon key={social.label} {...social} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.title} {...column} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-zinc-500">
            &copy; {year} CareerForge AI. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Built for job seekers, powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;