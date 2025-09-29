"use client";

import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

function SubmitButton({ pendingLabel, children }) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
        pending
          ? "bg-gradient-to-br from-surface-elevated via-surface to-background text-text-tertiary cursor-not-allowed scale-90"
          : "bg-gradient-to-r from-primary-dark via-primary-light to-secondary-light hover:from-primary-hover hover:to-secondary-hover text-text-secondary  hover:shadow-xl cursor-pointer duration-200 transition-all"
      }`}
    >
      {pending ? pendingLabel : children}
    </motion.button>
  );
}

export default SubmitButton;
