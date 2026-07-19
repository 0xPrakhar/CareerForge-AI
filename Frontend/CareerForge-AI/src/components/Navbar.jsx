import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Features", to: "/#features" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Blog", to: "/#", soon: true },
  { label: "Roadmap", to: "/#", soon: true },
  { label: "About", to: "/#" },
  { label: "Contact", to: "/#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-(image:--gradient-brand) shadow-(--shadow-glow)">
            <Sparkles className="h-4 w-4 text-white" />
          </span>

          <span className="text-[15px] font-semibold tracking-tight">
            CareerForge <span className="text-muted-foreground">AI</span>
          </span>

          <span className="ml-1 rounded-full border border-border-strong bg-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Beta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="group relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}

              {link.soon && (
                <span className="ml-1.5 rounded-full bg-surface px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                  Soon
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/login"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg border border-border-strong bg-surface px-3.5 py-2 text-sm font-medium transition-colors hover:bg-surface-elevated"
          >
            Register
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg bg-(image:--gradient-brand) px-3.5 py-2 text-sm font-medium text-white shadow-(--shadow-glow) transition-transform hover:-translate-y-px"
          >
            Analyze Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface md:hidden"
        >
          {open ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {link.label}

                {link.soon && (
                  <span className="ml-1.5 text-[10px] uppercase text-muted-foreground/70">
                    Soon
                  </span>
                )}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Link
                to="/login"
                className="rounded-lg border border-border-strong bg-surface px-3.5 py-2 text-center text-sm"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg border border-border-strong bg-surface px-3.5 py-2 text-center text-sm"
              >
                Register
              </Link>

              <Link
                to="/dashboard"
                className="rounded-lg bg-(image:--gradient-brand) px-3.5 py-2 text-center text-sm font-medium text-white"
              >
                Analyze Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;