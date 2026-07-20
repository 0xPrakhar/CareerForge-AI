import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {  ArrowRight } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Logo } from "./Logo";

// --- Constants ---
const navItems = [
  { label: "Features", to: "/#features" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contact", to: "/#" },
];

// Reusable class strings for consistent styling and easier maintenance.
const navLinkClasses =
  "relative px-3 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white";

const ctaButtonClasses =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";



// --- Framer Motion Variants ---
const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-10%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { opacity: 0, y: "-10%", transition: { duration: 0.2, ease: "easeInOut" } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

// --- Main Component ---
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize and handle body scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const handleMobileLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/65 px-6 shadow-lg backdrop-blur-lg">
        {/* Logo */}
       <Logo/>

        {/* Desktop Navigation */}
        <LayoutGroup id="desktop-nav">
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `${navLinkClasses} ${isActive ? "text-white" : ""}`}
              >
                {item.label}
                {/* Active link indicator with a smooth layout animation */}
                {({ isActive }) =>
                  isActive && (
                  <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      layoutId="desktop-active-link-indicator"
                    />
                  )}
              </NavLink>
            ))}
          </nav>
        </LayoutGroup>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className={`${ctaButtonClasses} text-zinc-400 hover:text-white`}
          >
            Login
          </Link>

          <Link
            to="/register"
            className={`${ctaButtonClasses} border border-white/10 bg-white/5 text-white hover:bg-white/10`}
          >
            Register
          </Link>

          {/* Enhanced CTA with a more engaging hover effect */}
          <motion.div whileHover={{ y: -2, transition: { duration: 0.2 } }}>
            <Link
              to="/register"
              className={`${ctaButtonClasses} gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]`}
            >
              Start Free
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-50 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 md:hidden"
        >
          <motion.div animate={{ rotate: open ? 45 : 0, y: open ? 1 : 0 }} className="absolute h-0.5 w-4 bg-white" />
          <motion.div animate={{ opacity: open ? 0 : 1 }} className="absolute h-0.5 w-4 bg-white" />
          <motion.div animate={{ rotate: open ? -45 : 0, y: open ? -1 : 0 }} className="absolute h-0.5 w-4 bg-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 flex flex-col bg-zinc-950 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item, i) => (
                <motion.div key={item.label} custom={i} variants={mobileLinkVariants}>
                  <NavLink
                    to={item.to}
                    onClick={handleMobileLinkClick}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-lg font-medium ${isActive ? "bg-white/5 text-white" : "text-zinc-400"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <motion.div className="mt-auto flex flex-col gap-4 border-t border-white/10 p-4">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" onClick={handleMobileLinkClick} className={`${ctaButtonClasses} bg-white/5 text-center text-white`}>
                  Login
                </Link>
                <Link to="/register" onClick={handleMobileLinkClick} className={`${ctaButtonClasses} bg-white/5 text-center text-white`}>
                  Register
                </Link>
              </div>
              <Link
                to="/register"
                onClick={handleMobileLinkClick}
                className={`${ctaButtonClasses} gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-center text-white`}
              >
                Start Free
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;