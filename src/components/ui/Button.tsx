import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "social";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  type = "button",
  disabled,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2";
  const variantStyles = {
    primary:
      "w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    social: "p-2 bg-white/10 hover:bg-white/20",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: variant === "primary" ? 1.02 : 1.1 }}
      whileTap={{ scale: variant === "primary" ? 0.98 : 0.9 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
