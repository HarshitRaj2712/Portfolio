import NPTEL from "../assets/NPTEL.jpg";
import InfosysC1 from "../assets/Infosys-c1.jpg";
import InfosysC2 from "../assets/Infosys-c2.jpg";
import InfosysC3 from "../assets/Infosys-c3.jpg";
import UdemyC1 from "../assets/udemy-c1.jpg";
import UdemyC2 from "../assets/udemy-c2.jpg";
import UdemyC3 from "../assets/udemy-c3.jpg";
import UdemyC4 from "../assets/udemy-c4.jpg";

const certifications = [
  {
    title: "Introduction to IOT",
    issuer: "NPTEL",
    image: NPTEL,
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    image: InfosysC1,
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys Springboard",
    image: InfosysC2,
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    image: InfosysC3,
  },
  {
    title: "PHP Laravel: Build Amazing Streaming Services",
    issuer: "Udemy",
    image: UdemyC1,
  },
  {
    title: "Docker Deep Dive: Build, Ship, and Run Containers",
    issuer: "Udemy",
    image: UdemyC2,
  },
  {
    title: "Figma: Web & Mobile Projects from Scratch",
    issuer: "Udemy",
    image: UdemyC3,
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Udemy",
    image: UdemyC4,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white px-6 py-28 flex text-center"
    >
      <div className="hero-reveal max-w-7xl mx-auto ">

        {/* Section Label */}
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Certifications
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          My <span className="text-neutral-400">Certifications</span>
        </h2>

        {/* Grid */}
        {certifications.length === 0 ? (
          <p className="text-neutral-500 text-lg">
            Certifications coming soon...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="
                group
                rounded-xl
                overflow-hidden
                border
                border-neutral-800
                bg-neutral-900
                transition
                duration-300
                hover:-translate-y-2
                hover:border-neutral-600
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                "
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                    w-full
                    h-44
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* Card content */}
                <div className="p-4">

                  <h3 className="text-base font-semibold text-white leading-snug line-clamp-2 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {cert.issuer}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}