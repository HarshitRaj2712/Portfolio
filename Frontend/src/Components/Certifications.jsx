import { useEffect, useState } from "react";
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
    issueDate: "Feb 2024",
    credentialId: "NPTEL-IOT-2024",
    level: "Intermediate",
    duration: "8 weeks",
    skills: ["IoT Basics", "Sensors", "Embedded Systems"],
    verifyUrl: "",
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    image: InfosysC1,
    issueDate: "Jun 2024",
    credentialId: "INFY-GENAI-PE-01",
    level: "Intermediate",
    duration: "12 hours",
    skills: ["Prompt Engineering", "LLMs", "GenAI Workflows"],
    verifyUrl: "",
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys Springboard",
    image: InfosysC2,
    issueDate: "Jul 2024",
    credentialId: "INFY-GENAI-NOCODE-02",
    level: "Intermediate",
    duration: "10 hours",
    skills: ["No-Code AI", "Prototyping", "AI App Design"],
    verifyUrl: "",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    image: InfosysC3,
    issueDate: "Aug 2024",
    credentialId: "INFY-CTFA-03",
    level: "Advanced",
    duration: "16 hours",
    skills: ["Automata", "Formal Languages", "Computation Models"],
    verifyUrl: "",
  },
  {
    title: "PHP Laravel: Build Amazing Streaming Services",
    issuer: "Udemy",
    image: UdemyC1,
    issueDate: "Oct 2024",
    credentialId: "UC-LARAVEL-STREAM",
    level: "Intermediate",
    duration: "15.5 hours",
    skills: ["Laravel", "REST APIs", "Backend Architecture"],
    verifyUrl: "",
  },
  {
    title: "Docker Deep Dive: Build, Ship, and Run Containers",
    issuer: "Udemy",
    image: UdemyC2,
    issueDate: "Nov 2024",
    credentialId: "UC-DOCKER-DEEPDIVE",
    level: "Intermediate",
    duration: "13 hours",
    skills: ["Docker", "Containers", "Deployment"],
    verifyUrl: "",
  },
  {
    title: "Figma: Web & Mobile Projects from Scratch",
    issuer: "Udemy",
    image: UdemyC3,
    issueDate: "Dec 2024",
    credentialId: "UC-FIGMA-PROJECTS",
    level: "Beginner",
    duration: "9 hours",
    skills: ["Figma", "UI Design", "Prototyping"],
    verifyUrl: "",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Udemy",
    image: UdemyC4,
    issueDate: "Jan 2025",
    credentialId: "UC-MASTER-GENAI",
    level: "Intermediate",
    duration: "14 hours",
    skills: ["Generative AI", "AI Tools", "Productivity"],
    verifyUrl: "",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
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
              <button
                key={index}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="
                group
                text-left
                cursor-pointer
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
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-400
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-xs text-neutral-400">{cert.issueDate}</p>
                    <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-[11px] text-neutral-300">
                      {cert.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white leading-snug line-clamp-2 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {cert.issuer}
                  </p>

                  <p className="mt-2 text-xs text-neutral-500">
                    {cert.duration}
                  </p>

                </div>

              </button>
            ))}

          </div>
        )}

        </div>
      </section>

      {selectedCert && (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center bg-black/85 px-4 pb-6 pt-28"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className="relative max-h-[calc(100vh-8rem)] max-w-[95vw] overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-neutral-500 bg-black/70 px-3 py-1 text-sm text-white transition hover:border-white"
              aria-label="Close certificate preview"
            >
              X
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[calc(100vh-14rem)] w-auto object-contain"
            />
            <div className="border-t border-neutral-800 px-4 py-3 text-left">
              <p className="text-sm text-neutral-200">{selectedCert.title}</p>
              <p className="mt-1 text-xs text-neutral-400">
                {selectedCert.issuer} • {selectedCert.issueDate} • {selectedCert.level}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Credential ID: {selectedCert.credentialId} • Duration: {selectedCert.duration}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-2 py-1 text-[11px] text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {selectedCert.verifyUrl ? (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block rounded-md border border-neutral-600 px-3 py-1.5 text-xs text-white transition hover:border-white"
                >
                  Verify Credential
                </a>
              ) : (
                <p className="mt-3 text-xs text-amber-400">Add verify URL for stronger credibility.</p>
              )}

              <p className="mt-2 text-[11px] text-neutral-500">Press Esc to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}