// src/components/Navbar.jsx
import { motion } from "framer-motion/dom";
import { FaCode } from "react-icons/fa";
import { SiLeetcode, SiGithub } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent text-white z-20 relative">
      {/* Left: Logo/Icon */}
      <div className="flex items-center gap-2">
        <FaCode className="text-3xl text-cyan-400" />
        {/* <span className="font-bold text-xl tracking-wide">Harshit.dev</span> */}
      </div>

      {/* Middle: Navigation Links */}
      <div className="flex gap-8 font-medium text-lg">
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
        <a href="#profiles" className="hover:text-cyan-400 transition">Coding Profiles</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>

      {/* Right: Animated Icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <SiGithub className="text-3xl text-cyan-300 hover:text-cyan-400 cursor-pointer" />
      </motion.div>
    </nav>
  );
}
