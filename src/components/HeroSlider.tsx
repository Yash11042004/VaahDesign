import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "@/assets/HOSPITALITY.png";
import hero2 from "@/assets/F & B.png";
import hero3 from "@/assets/COMMERCIAL.png";
import hero4 from "@/assets/EDUCATIONAL.png";
import hero5 from "@/assets/RESIDENTIAL.png";
import hero6 from "@/assets/RETAIL.png";

const slides = [
  {
    image: hero1,
    subtitle: "Luxury Hospitality Interiors",
    title: "Refined Ambience",
    description: "Where elegance, comfort and culinary culture unite.",
  },
  {
    image: hero2,
    subtitle: "BESPOKE F&B INTERIORS",
    title: "Crafted Luxury",
    description:
      "Sophisticated interiors tailored for unforgettable dining experiences.",
  },
  {
    image: hero3,
    subtitle: "PREMIUM OFFICE SPACES",
    title: "Designed for Excellence",
    description:
      "Crafting sophisticated environments that inspire innovation and success.",
  },
  {
    image: hero4,
    subtitle: "HIGH-END CAMPUS & INSTITUTIONAL INTERIORS",
    title: "Designed to Inspire Minds",
    description:
      "Curated educational spaces that combine elegance, innovation, and global standards.",
  },
  {
    image: hero5,
    subtitle: "LUXURY RESIDENTIAL INTERIORS",
    title: "Elegant Everyday Living",
    description:
      "Blending architectural excellence with warmth, comfort, and global design standards.",
  },
  {
    image: hero6,
    subtitle: "PREMIUM RETAIL SPACES",
    title: "Elevated Shopping Environments",
    description:
      "Crafting sophisticated interiors that enhance brand identity and customer engagement.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    // Balanced auto-slide timing
    const timer = setInterval(next, 7000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute bottom-24 left-8 md:left-16 z-10 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {/* Subtitle */}
            <p className="text-base md:text-lg tracking-[0.35em] uppercase text-rosegold-light font-body mb-5 drop-shadow-md">
              {slides[current].subtitle}
            </p>

            {/* Title */}
            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-wide mb-5 whitespace-nowrap">
              {slides[current].title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-primary-foreground/85 font-body font-light max-w-max whitespace-nowrap leading-relaxed drop-shadow-sm">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 md:bottom-24 z-10 flex items-center gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-rosegold transition-all duration-500"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="text-xs text-primary-foreground/50 font-body font-light tracking-wider">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>

        <button
          onClick={next}
          className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-rosegold transition-all duration-500"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-8 bg-primary-foreground/30" />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
