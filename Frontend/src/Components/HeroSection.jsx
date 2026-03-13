
// src/components/HeroSection.jsx
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="font-inter relative h-[80vh] bg-black flex items-center justify-center px-6">

      <div className="hero-reveal  flex flex-col items-center text-center max-w-4xl mt-25">

        {/* Small intro pill */}
        <div className="mb-6 px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-sm text-white">
          Hello, I'm Harshit 👋
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight text-white">
          Full-stack developer{" "}
          <span className="text-neutral-500">
            Building clean & scalable web applications.
          </span>
        </h1>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="mailto:panditjee2712@gmail.com"
            className="
            inline-flex items-center gap-2
            px-8 py-3
            rounded-full
            text-black font-medium
            bg-gradient-to-b
            from-lime-200
            to-lime-500
            hover:from-lime-300
            hover:to-lime-600
            transition-all duration-300
            "
          >
            Email me
            <FaArrowUpRightFromSquare className="text-sm"/>
          </a>
        </div>

      </div>

    </section>
  );
}

