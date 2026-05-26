import { useState } from "react";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";
import serviceImage from "@/assets/OFFICE INTERIOR (1).png";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "We design spaces that do more than look beautiful, they tell your story. Every project begins with a deep understanding of your vision, lifestyle, and aspirations, allowing us to create interiors and architectural experiences that feel distinctly personal. Blending timeless aesthetics with modern functionality, we craft environments that are elegant, purposeful, and enduring. From concept to completion, our approach combines thoughtful design, innovative solutions, and refined detailing to deliver spaces that inspire everyday living. With a focus on creativity, sustainability, and seamless execution, we transform ideas into sophisticated spaces that elevate the way people live, work, and connect.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "We believe exceptional interiors are a seamless blend of luxury, comfort, and individuality. Every space is thoughtfully curated with refined materials, sophisticated textures, and timeless details that elevate everyday living into an experience. Our design philosophy balances beauty with purpose, creating interiors that are not only visually striking, but effortlessly functional. Through the careful interplay of color, light, form, and texture, we shape warm, inviting environments that feel both elegant and deeply personal. Inspired by our clients’ lifestyles and aspirations, we craft bespoke spaces that embody character, sophistication, and lasting appeal, transforming ordinary interiors into timeless sanctuaries of modern luxury.",
  },
  {
    number: "03",
    title: "Landscape",
    description:
      "We design landscapes that go beyond aesthetics — creating outdoor spaces that feel calm, immersive, and effortlessly luxurious. Every landscape is thoughtfully planned to reflect the natural surroundings while complementing the architecture and lifestyle of its users. Blending organic textures, curated greenery, natural materials, and ambient lighting, we create environments that are both visually captivating and functionally refined. Our approach balances structure with softness, transforming outdoor areas into harmonious extensions of the built space. From serene gardens and elegant courtyards to modern outdoor lounges and experiential landscapes, we craft bespoke environments that inspire connection, relaxation, and timeless sophistication.",
  },
  {
    number: "04",
    title: "Project Management",
    description:
      "We believe successful projects are built on clarity, precision, and seamless coordination. From the initial concept to final execution, our project management approach ensures every stage is carefully planned, monitored, and delivered with exceptional attention to detail. Acting as the bridge between design, execution, and client vision, we streamline every process to create a smooth and efficient project journey. Through strategic planning, transparent communication, and meticulous supervision, we ensure timelines, quality, and craftsmanship are maintained at every step. Our commitment to excellence transforms complex projects into refined realities — delivering spaces that are thoughtfully executed, beautifully realized, and built to exceed expectations.",
  },
  {
    number: "05",
    title: "Decor & Styling",
    description:
      "We believe décor is what transforms a space into an experience, adding personality, warmth, and refined character to every interior. Our styling approach is thoughtfully curated to create spaces that feel elegant, balanced, and effortlessly inviting. From statement lighting and bespoke furnishings to artful accessories and layered textures, every element is selected with intention to complement the overall design narrative. We carefully blend color, materiality, and styling details to enhance the atmosphere while maintaining harmony and sophistication throughout the space. Inspired by our clients’ individuality and lifestyle, we create curated interiors that feel deeply personal, delivering timeless spaces where beauty, comfort, and character coexist seamlessly.",
  },
  {
    number: "06",
    title: "Turnkey Works",
    description:
      "We deliver turnkey solutions that transform ideas into fully realized spaces — seamlessly managed from concept to completion.Our integrated approach ensures every stage of the project is executed with precision, efficiency, and exceptional attention to detail. From design development and material selection to procurement, execution, and final handover, we manage the entire process with a commitment to quality and transparency. By coordinating every element under one streamlined workflow, we create a smooth, stress-free experience for our clients while maintaining timelines, budgets, and design integrity. Driven by craftsmanship, collaboration, and meticulous project oversight, we deliver refined spaces that are thoughtfully executed, beautifully finished, and ready to experience from day one.",
  },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <Navbar />

      <section className="py-28 px-6 md:px-16 bg-background">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
              Services
            </p>

            <h2 className="text-3xl md:text-5xl font-light">What We Offer</h2>
          </div>

          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Image */}
            <div className="overflow-hidden rounded-[50px_12px_50px_12px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <img
                src={serviceImage}
                alt="Interior Design"
                className="w-full aspect-square object-cover object-[20%_75%] hover:scale-105 transition duration-700"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-6 text-center">
                <span className="block">We Design Your Space</span>

                <span className="block mt-4">Wherever You Are!</span>
              </h2>
              <p className="text-base text-foreground/75 leading-8 font-light text-justify">
                VAAH is a design studio based in India, offering a comprehensive
                range of services including interior design, architecture,
                landscape, renovations, furnishing, project management, and
                turnkey solutions. We approach every project with precision and
                purpose transforming spaces into refined, functional
                environments. From concept to completion, our team ensures a
                seamless and detail-driven journey. For clients across the
                globe, VAAH also provides bespoke online design consultations,
                delivering thoughtful design wherever you are.
              </p>
            </div>
          </div>

          {/* Service Rows */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-b border-white/10 py-8"
              >
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="grid md:grid-cols-[80px_1fr_50px] gap-6 cursor-pointer items-start"
                >
                  {/* Number */}
                  <p className="text-sm text-rosegold font-light">
                    {service.number}
                  </p>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                      {service.title}
                    </h3>

                    {openIndex === index && (
                      <p className="mt-5 text-foreground/70 leading-9 max-w-2xl text-justify font-light">
                        {service.description}
                      </p>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-end">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-rosegold" />
                    ) : (
                      <Plus className="h-6 w-6 text-rosegold" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Service;
