import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// import your assets
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

// import AT from "@/assets/Screenshot 2026-04-07 163200.png";
// import AT1 from "@/assets/Screenshot 2026-04-07 163211.png";
// import AT3 from "@/assets/Screenshot 2026-04-07 163222.png";
// import AT4 from "@/assets/Screenshot 2026-04-07 163257.png";
// import AT5 from "@/assets/Screenshot 2026-04-08 202422.png";
// import AT6 from "@/assets/Gemini_Generated_Image_ouneglounegloune.png";
// import AT7 from "@/assets/download (10).jpeg";
// import AT8 from "@/assets/Gemini_Generated_Image_y8gd0fy8gd0fy8gd.png";
// import AT9 from "@/assets/6368bbda77db57516253652c_HP-Slider-1.jpg";
import AT from "@/assets/WhatsApp Image 2026-03-20 at 12.02.12 (2).jpeg";
import AT1 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.57 PM (1).jpeg";
import AT2 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.57 PM (2).jpeg";
import AT3 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.57 PM.jpeg";
import AT4 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.58 PM (1).jpeg";
import AT5 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.57 PM.jpeg";
import AT6 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.59 PM (1).jpeg";
import AT7 from "@/assets/WhatsApp Image 2026-05-25 at 5.05.59 PM.jpeg";

import KA from "@/assets/WhatsApp Image 2026-05-25 at 5.19.03 PM.jpeg";
import KA1 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.31 PM.jpeg";
import KA2 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.32 PM (1).jpeg";
import KA3 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.32 PM.jpeg";
import KA4 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.33 PM (1).jpeg";
import KA5 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.32 PM (2).jpeg";
import KA6 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.33 PM (2).jpeg";
import KA7 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.33 PM.jpeg";
import KA8 from "@/assets/WhatsApp Image 2026-05-25 at 5.18.34 PM.jpeg";

import SMCC1 from "@/assets/WhatsApp Image 2026-05-25 at 5.21.03 PM (1).jpeg";
import SMCC2 from "@/assets/WhatsApp Image 2026-05-25 at 5.21.03 PM.jpeg";
import SMCC3 from "@/assets/WhatsApp Image 2026-05-25 at 5.21.04 PM (1).jpeg";
import SMCC4 from "@/assets/ChatGPT Image Apr 8, 2026, 11_45_08 PM.png";
import SMCC5 from "@/assets/Modern executive office with sleek design.png";
import SMCC6 from "@/assets/Modern lounge with abstract art.png";
import SMCC7 from "@/assets/Modern lounge with circular seating area.png";
import SMCC8 from "@/assets/WhatsApp Image 2026-05-25 at 5.21.04 PM.jpeg";
import SMCC9 from "@/assets/WhatsApp Image 2026-05-25 at 5.21.05 PM.jpeg";

import SVP from "@/assets/WhatsApp Image 2026-05-25 at 5.22.52 PM (1).jpeg";
import SVP1 from "@/assets/WhatsApp Image 2026-05-25 at 5.22.52 PM (2).jpeg";
import SVP2 from "@/assets/WhatsApp Image 2026-05-25 at 5.22.52 PM.jpeg";
import SVP3 from "@/assets/WhatsApp Image 2026-05-25 at 5.22.53 PM (1).jpeg";
import SVP4 from "@/assets/WhatsApp Image 2026-05-25 at 5.22.53 PM.jpeg";

import FD from "@/assets/WhatsApp Image 2026-05-25 at 5.23.26 PM (1).jpeg";
import FD1 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.26 PM.jpeg";
import FD2 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.27 PM (1).jpeg";
import FD3 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.27 PM.jpeg";
import FD4 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.28 PM (1).jpeg";
import FD5 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.28 PM.jpeg";
import FD6 from "@/assets/WhatsApp Image 2026-05-25 at 5.23.29 PM.jpeg";

import CL from "@/assets/WhatsApp Image 2026-05-25 at 5.25.10 PM (1).jpeg";
import CL1 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.10 PM.jpeg";
import CL2 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.11 PM (1).jpeg";
import CL3 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.11 PM (2).jpeg";
import CL4 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.11 PM.jpeg";
import CL5 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.12 PM (1).jpeg";
import CL6 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.12 PM (2).jpeg";
import CL7 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.12 PM.jpeg";
import CL8 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.13 PM (1).jpeg";
import CL9 from "@/assets/WhatsApp Image 2026-05-25 at 5.25.13 PM.jpeg";

import VW from "@/assets/WhatsApp Image 2026-05-25 at 5.29.13 PM (1).jpeg";
import VW2 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.13 PM.jpeg";
import VW3 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.14 PM (1).jpeg";
import VW4 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.14 PM (2).jpeg";
import VW5 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.14 PM.jpeg";
import VW6 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.15 PM (2).jpeg";
import VW7 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.15 PM (3).jpeg";
import VW8 from "@/assets/WhatsApp Image 2026-05-25 at 5.29.15 PM.jpeg";

const projects = [
  {
    id: "atm",
    title: "AT.MOSPHERE",
    location: "Burj Khalifa, Dubai",
    category: "Hospitality",
    cover: AT,

    description:
      "Located on the 122nd floor of the iconic Burj Khalifa, I led the interior fit-out of At.mosphere with a vision to create more than just a restaurant; it’s an experience suspended in the clouds. The design is a seamless symphony of influences: the timeless elegance of the Art Deco era, the sophistication of world-class French cuisine, and a precise client brief to translate the essence of fine dining into the very fabric of the interiors. Every material, curve, and finish was thoughtfully curated to embody refinement, elevate ambiance, and craft a space as extraordinary as its altitude.",

    scopeOfWork:
      "Lead Architect overseeing design coordination, procurement, and site execution from demolition to key handover. Managed the shop drawing team and contributed to key drawings to ensure design accuracy and execution.",

    media: [
      { type: "image", src: AT },
      { type: "image", src: AT1 },
      { type: "image", src: AT2 },
      { type: "image", src: AT3 },
      { type: "image", src: AT4 },
      { type: "image", src: AT6 },
      { type: "image", src: AT7 },
    ],
  },
  {
    id: "kata",
    title: "KATA",
    location: "Dubai Mall, Dubai",
    category: "F&B",
    cover: KA,

    description:
      "Located on the ground floor of The Dubai Mall, KATA is a contemporary Japanese fusion restaurant with sweeping views of the iconic Dubai Fountains. Designed to exude quiet luxury, the space balances a clean, striking color palette with rich textures and materials. Translucent decorated acrylics, reflective mirrors, and warm bronze and brass finishes create an inviting and opulent ambiance. The glass-enclosed Robata grill, framed in bronze, serves as a dramatic focal point, while the Raw Bar a low lit space within the bright interiors; draws all attention to the artistry of the cuisine.",

    scopeOfWork:
      "Oversaw site and production as Design Coordinator, ensuring smooth execution of design intent. Handled FF&E management, coordinating selections, procurement, and on-site installation.",

    media: [
      { type: "image", src: KA },
      { type: "image", src: KA1 },
      { type: "image", src: KA2 },
      { type: "image", src: KA3 },
      { type: "image", src: KA4 },
      { type: "image", src: KA5 },
      { type: "image", src: KA6 },
      // { type: "image", src: KA7 },
      { type: "image", src: KA8 },
    ],
  },

  {
    id: "scmc",
    title: "SCMC",
    location: "Abu Dhabi",
    category: "Institutional",
    cover: SMCC4,

    description:
      "The design narrative was carefully crafted to reflect and amplify SCMC’s core mission, To foster innovation and creativity in the realms of motherhood and childhood. Every element within the space is rooted in this vision, creating an environment that inspires, supports, and nurtures.",

    scopeOfWork:
      "Collaborated with the design team and led FF&E design and manufacturing. Oversaw the entire process through to final site installation.",

    media: [
      { type: "image", src: SMCC1 },
      { type: "image", src: SMCC2 },
      { type: "image", src: SMCC3 },
      { type: "image", src: SMCC8 },
      { type: "image", src: SMCC9 },
      { type: "image", src: SMCC5 },
      { type: "image", src: SMCC6 },
      { type: "image", src: SMCC7 },
    ],
  },
  {
    id: "svp",
    title: "SVP Hospital",
    location: "Ahmedabad",
    category: "Healthcare",
    cover: SVP,

    description:
      "Commissioned by Ahmedabad Municipal Corporation, the Sardar Vallabhbhai Patel Institute of Medical Sciences & Research is a 1,611-bed multispecialty hospital within the VS Hospital campus, Ellisbridge. Spread across 27 acres with a built-up area of 16.14 lakh sq. ft., the ₹373.75 crore project integrates 32 OTs, 297 ICUs, 1,152 wards, and dedicated residential facilities. The 18-storey complex features a rooftop helipad and is designed to deliver high-quality healthcare adjacent to NHL Medical College and the Sabarmati Riverfront.",

    scopeOfWork:
      "Assisted in space planning of hospital wards, ensuring efficient layouts aligned with functional and patient-care requirements. Contributed to the interior design, focusing on spatial coherence, and user comfort.",

    media: [
      { type: "image", src: SVP1 },
      { type: "image", src: SVP2 },
      { type: "image", src: SVP3 },
      { type: "image", src: SVP4 },
    ],
  },
  {
    id: "firdaus",
    title: "Firdaus Studio by A.R Rahman",
    location: "Dubai",
    category: "Commercial",
    cover: FD,

    description:
      "Firdaus Studio is a highly technical pavilion designed to showcase an all-female orchestra conducted by A.R. Rahman, blending global musical influences with orchestral performance. The 1,200 sqm facility accommodates a 50member ensemble with advanced acoustic and recording spaces. An outdoor plaza with AV integration extends the performance experience into a public realm.",

    scopeOfWork:
      "Led interior design and fit-out coordination, ensuring alignment with project vision and technical requirements. Oversaw execution on site, managing detailing, finishes, and quality control throughout the process. Conducted snagging and final inspections to ensure completion meets design intent and performance standards.",

    media: [
      { type: "image", src: FD1 },
      { type: "image", src: FD2 },
      { type: "image", src: FD3 },
      { type: "image", src: FD4 },
      { type: "image", src: FD5 },
      { type: "image", src: FD6 },
    ],
  },

  {
    id: "casa",
    title: "Casa Elara",
    location: "Dubai",
    category: "Residential",
    cover: CL8,

    description:
      "A home, much desired and built with love. Designed with a dreamlike elegance, evoking cinematic charm through refined finishes and soft lighting. A vibrant entryway sets the tone with bold art and custom lighting. Sleek, tailored interiors reflect personal style with clean lines and luxurious details. Emphasis is placed on comfort, authenticity, and timeless appeal throughout.",

    scopeOfWork:
      "Worked with the concept studio to develop mood boards, 3D models, and V-Ray renderings. Handled material sourcing and procurement to align with design intent.",

    media: [
      { type: "image", src: CL1 },
      { type: "image", src: CL2 },
      { type: "image", src: CL3 },
      { type: "image", src: CL4 },
      { type: "image", src: CL5 },
      { type: "image", src: CL6 },
      { type: "image", src: CL9 },
      { type: "image", src: CL7 },
      { type: "image", src: CL },
    ],
  },

  {
    id: "villa",
    title: "Villa White",
    location: "Dubai",
    category: "Architecture",
    cover: VW5,

    description:
      "A modern farmhouse hideaway. Subtle luxury speaks volumes of the fine tastes of owners of this pristine home. Each corner is detailed to perfection, playing within elements of a modern farmhouse. This home caters to a young family, raising their boys and living their lives to the fullest, while enjoying modern, state-of-art amenities that the house design intrinsically offers.",

    scopeOfWork:
      "Collaborated closely with the client to develop the concept, mood board, and material board. Delivered complete schematic and working drawings, 3D model and renders, managed material selection and procurement, and coordinated with contractors and consultants.",

    media: [
      { type: "image", src: VW6 },
      { type: "image", src: VW },
      { type: "image", src: VW2 },
      { type: "image", src: VW3 },
      { type: "image", src: VW4 },
      { type: "image", src: VW7 },
      { type: "image", src: VW8 },
    ],
  },
];

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!activeProject) return;

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev === activeProject.media.length - 1 ? 0 : prev + 1,
        );
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? activeProject.media.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject]);

  return (
    <section className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
            Selected Works
          </p>

          <h2 className="text-3xl md:text-5xl font-light">Portfolio</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => {
            const isLastOdd =
              projects.length % 2 !== 0 && index === projects.length - 1;

            return (
              <div
                key={project.id}
                className={`group ${
                  isLastOdd ? "md:col-span-2 md:max-w-[48%] md:mx-auto" : ""
                }`}
              >
                {/* Image */}
                <div
                  onClick={() => {
                    setActiveProject(project);
                    setCurrentIndex(0);
                  }}
                  className="cursor-pointer overflow-hidden"
                >
                  <img
                    src={project.cover}
                    className="w-full aspect-[4/3] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-rosegold mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-light">
                    {project.title}
                  </h3>

                  <p className="text-sm text-foreground/60 mt-2">
                    {project.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-background max-w-5xl w-full rounded-lg overflow-y-auto max-h-[94vh] relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white text-xl z-20 bg-black/50 w-10 h-10 rounded-full"
              >
                ✕
              </button>

              {/* Header */}
              <div className="px-8 pt-5 pb-4 text-center border-b border-border">
                <p className="text-[10px] uppercase tracking-[0.28em] text-rosegold mb-2">
                  {activeProject.category}
                </p>

                <h2 className="text-2xl md:text-4xl font-light mb-1">
                  {activeProject.title}
                </h2>

                <p className="text-sm text-foreground/60">
                  {activeProject.location}
                </p>
              </div>

              {/* Description */}
              <div className="px-8 py-5 border-b border-border">
                <h4 className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-rosegold mb-3">
                  Description
                </h4>

                <p className="text-[12.5px] md:text-[13px] leading-[1.7] text-foreground/80 text-justify">
                  {activeProject.description}
                </p>
              </div>

              {/* Media */}
              <div className="relative bg-white px-4 md:px-10 py-6">
                <div className="relative flex items-center justify-center">
                  {activeProject.media[currentIndex].type === "image" ? (
                    <img
                      src={activeProject.media[currentIndex].src}
                      className="w-full max-h-[58vh] object-contain"
                    />
                  ) : (
                    <video
                      src={activeProject.media[currentIndex].src}
                      controls
                      className="w-full max-h-[62vh]"
                    />
                  )}

                  {/* Previous */}
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0 ? activeProject.media.length - 1 : prev - 1,
                      )
                    }
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-11 h-11 rounded-full flex items-center justify-center transition"
                  >
                    ←
                  </button>

                  {/* Next */}
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === activeProject.media.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-11 h-11 rounded-full flex items-center justify-center transition"
                  >
                    →
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 px-3 py-1.5 rounded-full">
                    {currentIndex + 1} / {activeProject.media.length}
                  </div>
                </div>
              </div>

              {/* Scope Of Work at Bottom */}
              <div className="px-8 py-5 border-t border-border">
                <h4 className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-rosegold mb-3">
                  Scope Of Work
                </h4>

                <p className="text-[13px] md:text-[14px] leading-[1.7] text-foreground/80 text-justify">
                  {activeProject.scopeOfWork}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
