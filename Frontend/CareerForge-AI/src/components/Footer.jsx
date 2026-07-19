import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Beta Program"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press Kit"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "ATS Handbook", "Help Center", "Status"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-(image:--gradient-brand)">
                <HiSparkles className="h-4 w-4 text-white" />
              </span>

              <span className="text-[15px] font-semibold tracking-tight">
                CareerForge AI
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI resume co-pilot that scores, analyzes, and helps you build
              ATS-friendly resumes to land your dream job.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2">
              {[ FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold">{column.title}</h4>

              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CareerForge AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>

            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;