import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // helper to go home + scroll
  const goToSection = (id) => {
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

        {/* Links */}
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

        {/* CTA */}
        <button
          onClick={() => navigate("/contact-form")}
          className="
            flex
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
      </nav>
    </div>
  );
}
