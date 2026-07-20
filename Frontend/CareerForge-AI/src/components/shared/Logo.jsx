import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Link to="/" className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-violet-600 to-fuchsia-600">
          <Sparkles className="h-4 w-4 text-white" />
        </span>
        <span className="text-lg font-semibold tracking-tight text-white">
          CareerForge{" "}
          <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            AI
          </span>
        </span>
        <span className="ml-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          Beta
        </span>
      </Link>
    </motion.div>
  );
};