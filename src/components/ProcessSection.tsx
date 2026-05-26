import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin with an in-depth consultation to understand your vision, lifestyle, and aspirations for the space.",
    },
    {
      number: "02",
      title: "Concept",
      description:
        "Our team develops detailed mood boards, spatial layouts, and material palettes tailored to your brief.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Full architectural drawings, 3D visualisations, and bespoke furniture designs bring your vision to life.",
    },
    {
      number: "04",
      title: "Delivery",
      description:
        "We manage every detail of the build, from procurement to installation, ensuring flawless execution.",
    },
  ];

  return (
    <section className="py-32 px-8 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold font-body font-light mb-4">
            Our Approach
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            How We Work
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <span className="font-display text-6xl font-light text-rosegold/20 mb-4 block">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl font-light text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-body font-light leading-8 text-justify">
                {step.description}
              </p>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-6 w-12 h-[1px] bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
