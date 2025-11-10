// src/components/Navbar.jsx
import { motion } from "framer-motion"; // ✅ use this import for your version
import { FaCode } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/30 text-white z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <FaCode className="text-3xl text-cyan-400" />
        <span className="font-bold text-lg md:text-xl tracking-wide"></span>
      </div>

      {/* Middle: Nav Links (hidden on mobile) */}
      <div className="hidden md:flex gap-10 text-lg font-medium">
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#profiles" className="hover:text-cyan-400 transition-colors">Coding Profiles</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>

      {/* Right: GitHub + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Animated GitHub Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          <SiGithub className="text-3xl text-cyan-300 hover:text-cyan-400 cursor-pointer" />
        </motion.div>

        {/* Hamburger Menu (visible on mobile only) */}
        <button
          className="md:hidden text-3xl focus:outline-none hover:text-cyan-400"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center py-5 space-y-4 md:hidden"
        >
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">Projects</a>
          <a href="#experience" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">Experience</a>
          <a href="#profiles" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">Coding Profiles</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
