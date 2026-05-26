import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import awardImage1 from "@/assets/2022SCMC.png";
import awardImage3 from "@/assets/2023ATM.png";
import awardImage2 from "@/assets/2023KATA.png";

const awards = [
  {
    year: "2022",
    title: "Commercial Interior Design",
    project: "Supreme Council for Motherhood & Childhood (SCMC)",
    image: awardImage1,
    description:
      "Worked as Lead Architect for the interior fit-out scope of the Supreme Council for Motherhood & Childhood project, contributing to the execution of a contemporary and functional workplace environment. The project received the CID Highly Commended Award for Interior Fit-Out Project of the Year 2022, recognized among 49 nominations for its design quality, coordination, and execution excellence.",
  },
  {
    year: "2023",
    title: "Commercial Interior Design",
    project: "KATA RESTAURANT",
    image: awardImage2,
    description:
      "Worked as Lead Architect for the fit-out design of KATA Restaurant, contributing to the development and execution of the project’s contemporary hospitality interiors. The project received a Highly Commended recognition at the Commercial Interior Design Awards for Best Use of Graffiti in Hospitality, celebrating its bold artistic expression and immersive dining experience.",
  },
  {
    year: "2023",
    title: "Commercial Interior Design",
    project: "AT.MOSPHERE BURJ KHALIFA",
    image: awardImage3,
    description:
      "Worked as the Lead Architect for the interior fit-out scope of the Atmosphere Burj Khalifa project, contributing to the delivery of a refined and luxurious hospitality environment. Oversaw the project from concept development through to fit-out execution and key handover, ensuring seamless coordination, design quality, and execution excellence throughout all stages. The project was shortlisted for the CID Awards 2023, recognized for its outstanding design, detailing, and overall project delivery.",
  },
];

const Awards = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-24">
            <p className="text-xs tracking-[0.4em] uppercase text-rosegold mb-4">
              Recognition
            </p>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Awards & Achievements
            </h1>

            <p className="text-sm text-neutral-600 font-body font-light max-w-2xl mx-auto leading-7">
              Our work has been recognized for its commitment to timeless
              design, spatial innovation, and refined luxury experiences across
              residential, hospitality, and commercial interiors.
            </p>
          </div>

          {/* Awards Section */}
          <div className="space-y-28">
            {awards.map((award, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-14 items-center"
              >
                {/* Left Image */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full aspect-square object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-rosegold tracking-[0.25em] uppercase text-sm mb-4">
                    {award.year}
                  </p>

                  <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                    {award.title}
                  </h2>

                  <p className="text-sm md:text-base tracking-[0.2em] uppercase text-rosegold mb-6">
                    {award.project}
                  </p>

                  <p className="text-foreground/75 text-base leading-9 text-justify max-w-xl">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
