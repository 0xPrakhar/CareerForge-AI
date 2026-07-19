import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import Hero from "../pages/component/Hero.jsx";
import Features from "../pages/component/Features.jsx";
import HowItWorks from "../pages/component/HowITWorks.jsx";
import FAQ from "../pages/component/FAQ.jsx";
import CTA from "../pages/component/CTA.jsx";

const HomePage = () => {
  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update mouse position relative to the container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Spotlight gradient
  const spotlight = useMotionTemplate`
    radial-gradient(
      500px circle at ${mouseX}px ${mouseY}px,
      rgba(139, 92, 246, 0.15),
      transparent 80%
    )
  `;

  return (
    <div onMouseMove={handleMouseMove} className="group relative overflow-clip">
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: spotlight,
        }}
      />

      {/* Content */}
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </div>
  );
};

export default HomePage;