import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full px-4">
      <nav
        className="
        relative
        mx-auto
        max-w-6xl
        flex
        items-center
        justify-between
        rounded-full
        bg-neutral-900/50
        backdrop-blur-xl
        border
        border-neutral-800
        px-6
        py-2
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-white text-lg font-semibold tracking-tight hover:text-neutral-300 transition"
        >
          Harshit&apos;s Portfolio
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 ml-auto mr-6">

          <button
            onClick={() => goToSection("about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => goToSection("projects")}
            className="hover:text-white transition"
          >
            Work
          </button>

          <button
            onClick={() => goToSection("certifications")}
            className="hover:text-white transition"
          >
            Certifications
          </button>

          <button
            onClick={() => goToSection("profiles")}
            className="hover:text-white transition"
          >
            Coding Profiles
          </button>

          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xjsvdrlUl4BqXdmCnbR6qaHQwj-xMcFE/view?usp=sharing",
                "_blank"
              )
            }
            className="hover:text-white transition"
          >
            Resume
          </button>

        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/contact-form")} className=" hidden md:flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white border border-white/10 hover:bg-white/20 transition
          "
        >
          ✨ Get in touch
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          bg-neutral-800
          border
          border-neutral-700
          text-white
          text-lg
          "
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div
            className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            mt-3
            w-60
            rounded-xl
            bg-neutral-900
            border
            border-neutral-800
            shadow-lg
            flex
            flex-col
            text-sm
            text-white
            "
          >
            <button
              onClick={() => goToSection("home")}
              className="px-4 py-3 hover:bg-neutral-800"
            >
              Home
            </button>

            <button
              onClick={() => goToSection("about")}
              className="px-4 py-3 hover:bg-neutral-800"
            >
              About
            </button>

            <button
              onClick={() => goToSection("projects")}
              className="px-4 py-3 hover:bg-neutral-800"
            >
              Work
            </button>

            <button
              onClick={() => goToSection("certifications")}
              className="px-4 py-3 hover:bg-neutral-800"
            >
              Certifications
            </button>

            <button
              onClick={() => goToSection("profiles")}
              className="px-4 py-3 hover:bg-neutral-800"
            >
              Coding Profiles
            </button>

            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact-form");
              }}
              className="px-4 py-3 text-lime-400 hover:bg-neutral-800"
            >
              Get in touch
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}