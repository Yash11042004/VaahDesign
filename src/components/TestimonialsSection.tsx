import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "VAAH Design transformed our home into something we could never have imagined. Their attention to detail and deep understanding of our lifestyle was extraordinary. Every room now feels thoughtfully designed, elegant, and incredibly personal, making our house truly feel like home.",
    author: "Mr.& Ms.Ravi & Deepa",
    project: "Mumbai",
  },
  {
    quote:
      "Working with the VAAH team was seamless from start to finish. They brought a level of sophistication, creativity, and professionalism that exceeded all our expectations. The final outcome was not only visually stunning but also highly functional for our daily needs.",
    author: "Mr.Deepak",
    project: "Chennai",
  },
  {
    quote:
      "Their ability to blend modern luxury with warmth and functionality is unmatched. Every room tells a story, and every detail has purpose. From concept to execution, the team ensured the entire process felt collaborative, smooth, and truly premium.",
    author: "Ms.Teja",
    project: "Chennai",
  },
];
const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="py-32 px-8 md:px-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold font-body font-light mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Client Stories
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="px-4"
          >
            <Quote className="w-8 h-8 text-rosegold-light mx-auto mb-8 opacity-40" />
            <p className="font-display text-xl md:text-2xl font-light text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </p>
            <p className="text-sm font-body font-medium tracking-[0.1em] text-foreground mb-1">
              {testimonials[current].author}
            </p>
            <p className="text-xs font-body font-light text-muted-foreground tracking-wider">
              {testimonials[current].project}
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-rosegold hover:border-rosegold transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs text-muted-foreground font-body font-light tracking-wider">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-rosegold hover:border-rosegold transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
