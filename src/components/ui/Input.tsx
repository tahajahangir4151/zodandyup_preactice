import { motion } from "framer-motion";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  theme?: "blue" | "purple";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, theme = "blue", ...props }, ref) => {
    return (
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <input
          ref={ref}
          {...props}
          className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
            placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-${theme}-400 transition`}
        />
        {error && <p className="mt-1 text-sm text-red-200">{error}</p>}
      </motion.div>
    );
  }
);
