import { motion } from "framer-motion";

// Images
import aboutImg from "@/assets/TANDOOR TINA.png";
import team2 from "@/assets/Screenshot 2026-04-09 145744.png";
import team1 from "@/assets/Screenshot 2026-04-09 145801.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Bold Vision | Refined Form | Luxury in Every Detail.
          </h2>
        </motion.div>

        {/* ===== IMAGE + TEXT ===== */}
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-14 items-center mb-28">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[60px_16px_60px_16px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[420px] object-cover object-center hover:scale-[1.02] transition duration-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-base md:text-lg text-foreground/80 leading-8 text-justify">
                Vaah Design is a luxury interior and architecture studio founded
                by Anjana V A H, shaped by international experience across
                prestigious projects in Dubai, including the iconic Atmosphere
                at Burj Khalifa. With a foundation rooted in precision,
                technical expertise, and refined aesthetics, the studio brings
                together architecture, interiors, and landscape into one
                seamless design language.
              </p>

              <p className="text-base md:text-lg text-foreground/80 leading-8 text-justify">
                From bespoke residences to curated commercial spaces, every
                project is approached with bold vision and disciplined
                execution. At Vaah Design, we believe true luxury lies in
                thoughtful details, timeless proportions, and spaces that evoke
                both emotion and distinction.
              </p>

              <p className="text-base md:text-lg text-foreground/80 leading-8 text-justify">
                Vaah Design creates spaces that are creatively powerful,
                aesthetically refined, and uncompromising luxury.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== TEAM SECTION ===== */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
            Our Team
          </p>

          <h3 className="text-3xl md:text-5xl font-light">Meet The Team</h3>
        </div>

        {/* ===== TEAM GRID ===== */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Member 1 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[50px_12px_50px_12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] mb-8">
              <img
                src={team1}
                alt="Anjana V A H"
                className="w-full h-[460px] object-cover hover:scale-[1.02] transition duration-700"
              />
            </div>

            <h4
              className="text-2xl md:text-3xl font-normal tracking-[0.08em] mb-2"
              style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
            >
              ANJANA V A H
            </h4>

            <p
              className="text-lg text-foreground/70 tracking-[0.08em]"
              style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
            >
              Founder & Principal Architect
            </p>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[50px_12px_50px_12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] mb-8">
              <img
                src={team2}
                alt="Kunguma Harish"
                className="w-full h-[460px] object-cover hover:scale-[1.02] transition duration-700"
              />
            </div>

            <h4
              className="text-2xl md:text-3xl font-normal tracking-[0.08em] mb-2"
              style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
            >
              KUNGUMA HARISH
            </h4>

            <p
              className="text-lg text-foreground/70 tracking-[0.08em]"
              style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
            >
              CEO
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
