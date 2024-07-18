"use client"

import { motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motion-transitions";

const TransitionPage = () => {
  return (
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
      variants={transitionVariantsPage}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
    />
  );
}

export default TransitionPage;