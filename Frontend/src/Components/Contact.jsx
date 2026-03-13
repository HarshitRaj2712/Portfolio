import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      flex items-center justify-center
      px-6 py-28
      text-white
      bg-[url('https://framerusercontent.com/images/63o2VcfSXaOuqMKYDolL0wuFk.png')]
      bg-cover
      bg-center
      overflow-hidden
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/70 to-transparent"></div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">

        {/* Section label */}
        <div className="mb-6">
          <span className="px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-sm text-white">
            Contact
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Let's Get in <span className="text-white">Touch</span>
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">
          Let's connect and start with your project ASAP.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/contact-form")}
          className="
          inline-flex items-center gap-3
          rounded-full
          px-8 py-3
          font-medium
          text-black
          bg-gradient-to-b
          from-lime-200
          to-lime-500
          hover:from-lime-300
          hover:to-lime-600
          transition-all duration-300
          "
        >
          <FaPaperPlane />
          Drop me a message
        </button>

        {/* Email */}
        <p className="mt-6 text-neutral-400 text-sm">
          Or email me at{" "}
          <span className="text-white">
            panditjee2712@gmail.com
          </span>
        </p>

      </div>
    </section>
  );
}