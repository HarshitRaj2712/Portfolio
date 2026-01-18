import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center">
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

        {/* ✅ FIXED BUTTON */}
        <button
          onClick={() => navigate("/contact-form")}
          className="
            inline-flex
            items-center
            gap-3
            rounded-md
            px-8
            py-3
            text-white
            font-medium
            transition-all
            duration-300
            bg-gradient-to-b
            from-purple-300
            to-purple-700
            hover:from-purple-700
            hover:to-purple-300
            // hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)]
          "
        >
          <FaPaperPlane />
          Drop me a message
        </button>
      </div>
    </section>
  );
}
