import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import logo from "@/assets/R2_LOGO-removebg-preview.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-gradient-to-b from-[#e5c7c5] to-[#af7778] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="VAAH Logo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-40 md:h-52 w-auto object-contain"
            />

            {/* Name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative left-[16px] md:left-[22px] mt-1 text-lg md:text-xl tracking-[0.28em] uppercase font-body font-light text-[#4a2f2f]/80 leading-none"
            >
              By Anjana V A H
            </motion.p>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="h-[1px] bg-[#4a2f2f] mt-6"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
