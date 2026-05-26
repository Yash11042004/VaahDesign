import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 75, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Year Warranty" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="font-display text-5xl md:text-6xl font-light text-[#4a2f2f]"
    >
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-gradient-to-b from-[#af7778] to-[#e5c7c5]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />

            <p className="mt-3 text-xs tracking-[0.2em] uppercase text-[#4a2f2f]/70 font-body font-light">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
