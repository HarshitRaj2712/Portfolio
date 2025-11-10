// src/components/HeroSection.jsx
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



export default function HeroSection() {
  const texts = [
    "a problem solver by passion.",
    "a Software Developer based in India.",
    "a lifelong learner.",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];

      if (!deleting && subIndex < currentText.length) {
        setSubIndex((s) => s + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex((s) => s - 1);
      } else if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 2000); // pause before deleting
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <section className="min-h-screen w-full relative overflow-hidden cosmic-bg">
      <Navbar />

      {/* Hero Content (centered horizontally, lifted from top) */}
      <div className="relative z-10 flex flex-col items-center text-center mt-20 sm:mt-28 px-4 font-poppins">
        {/* Quote */}
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-snug max-w-3xl ">
          Code is the tool,
          <span className="text-purple-500">solving</span>
          <br />
          <span className="text-purple-500">problems</span> is the goal.
        </h1>

        {/* Name + Typing text */}
        <div className="mt-10 flex flex-wrap justify-center items-center text-2xl sm:text-3xl text-gray-200 font-semibold gap-3 font-poppins">
          <h2 className="inline">
            Hi, I’m <span className="text-purple-400">Harshit</span>,
          </h2>

          <h2 className="inline text-purple-400 font-normal">
            {texts[index].substring(0, subIndex)}
            <span className="ml-1 inline-block animate-pulse">|</span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-xl sm:text-2xl">
          <a
            href="https://github.com/HarshitRaj2712/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harshit-raj-10931b282/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:panditjee2712@gmail.com"
            aria-label="Email"
            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://leetcode.com/hars8it2712/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.instagram.com/harshit_pathak2712/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
