import { motion } from "framer-motion";
import serviceResidential from "@/assets/EXTER.png";
import serviceCommercial from "@/assets/INTERIOR.png";
import serviceProcess from "@/assets/LANDSCAPE (1).png";

const services = [
  {
    image: serviceResidential,
    title: "Architecture",
    description:
      "Designing timeless structures that blend innovation, functionality, and global aesthetics.",
  },
  {
    image: serviceCommercial,
    title: "Interiors",
    description:
      "Crafting refined spaces that elevate everyday living through luxury and detail.",
  },
  {
    image: serviceProcess,
    title: "Landscape",
    description:
      "Creating immersive outdoor environments where nature meets modern design elegance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
            SERVICES
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            What We Do
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer text-center"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed max-w-sm mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
