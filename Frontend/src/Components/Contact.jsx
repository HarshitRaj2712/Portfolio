
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
      px-6 py-24
      text-white
      bg-[url('https://framerusercontent.com/images/63o2VcfSXaOuqMKYDolL0wuFk.png')]
      bg-cover
      bg-center
      overflow-hidden
      "
    >
      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Top blur fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/70 to-transparent backdrop-blur-sm"></div>

      {/* Bottom blur fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s build something{" "}
          <span className="text-purple-500">meaningful.</span>
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Ready to take your digital presence to the next level?
          <br />
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>

        <button
          onClick={() => navigate("/contact-form")}
          className="
          inline-flex items-center gap-3
          rounded-md px-8 py-3
          text-white font-medium
          transition-all duration-300
          bg-gradient-to-b
          from-purple-300 to-purple-700
          hover:from-purple-700 hover:to-purple-300
          "
        >
          <FaPaperPlane />
          Drop me a message
        </button>
      </div>
    </section>
  );
}