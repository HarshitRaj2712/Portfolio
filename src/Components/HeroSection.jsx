// src/components/HeroSection.jsx
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
        setSubIndex(s => s + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(s => s - 1);
      } else if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(i => (i + 1) % texts.length);
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

    return (
    <section className="relative z-10 min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-3xl">
          Code is the tool,{" "}
          <span className="text-purple-500">solving</span><br />
          <span className="text-purple-500">problems</span> is the goal.
        </h1>

        {/* Typing */}
        <div className="mt-10 flex flex-wrap justify-center text-2xl sm:text-3xl gap-3">
          <h2 className="text-gray-200">
            Hi, I’m <span className="text-purple-400">Harshit</span>,
          </h2>
          <h2 className="text-purple-400">
            {texts[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Socials */}
        <div className="mt-8 flex gap-5 text-2xl text-white">
          <a href="https://github.com/HarshitRaj2712/" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/harshit-raj-10931b282/" target="_blank"><FaLinkedin /></a>
          <a href="mailto:panditjee2712@gmail.com"><FaEnvelope /></a>
          <a href="https://leetcode.com/hars8it2712/" target="_blank"><SiLeetcode /></a>
          <a href="https://www.instagram.com/harshit_pathak2712/" target="_blank"><FaInstagram /></a>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md border-2 border-purple-500/50 px-5 py-2.5 text-white transition hover:bg-white hover:text-black"
          >
            Show my work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );

}
