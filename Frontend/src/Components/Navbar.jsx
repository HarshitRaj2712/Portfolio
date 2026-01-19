import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // helper to go home + scroll
  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
          max-w-5xl
          flex
          items-center
          justify-between
          rounded-full
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          px-6
          py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="font-acter text-white text-lg tracking-tight hover:text-purple-400 transition"
        >
          Harshit&apos;s Portfolio
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          <button onClick={() => goToSection("home")} className="hover:text-white transition">
            Home
          </button>
          <button onClick={() => goToSection("about")} className="hover:text-white transition">
            About
          </button>
          <button onClick={() => goToSection("projects")} className="hover:text-white transition">
            Work
          </button>
          <button onClick={() => goToSection("profiles")} className="hover:text-white transition">
            Coding Profiles
          </button>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/contact-form")}
          className="
            hidden md:flex
            items-center
            gap-2
            rounded-full
            bg-white/10
            px-4
            py-2
            text-sm
            text-white
            border
            border-white/10
            hover:bg-white/20
            transition
          "
        >
          ✨ Get in touch
        </button>

        {/* Mobile Menu Button (=) */}
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
            bg-white/10
            border
            border-white/10
            text-xl
            text-white
            hover:bg-white/20
            transition
          "
        >
          =
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
              w-56
              rounded-xl
              bg-black/80
              backdrop-blur-xl
              border
              border-white/10
              shadow-lg
              flex
              flex-col
              text-sm
              text-white
            "
          >
            <button onClick={() => goToSection("home")} className="px-4 py-3 hover:bg-white/10">
              Home
            </button>
            <button onClick={() => goToSection("about")} className="px-4 py-3 hover:bg-white/10">
              About
            </button>
            <button onClick={() => goToSection("projects")} className="px-4 py-3 hover:bg-white/10">
              Work
            </button>
            <button onClick={() => goToSection("profiles")} className="px-4 py-3 hover:bg-white/10">
              Coding Profiles
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact-form");
              }}
              className="px-4 py-3 text-purple-400 hover:bg-white/10"
            >
              Get in touch
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
