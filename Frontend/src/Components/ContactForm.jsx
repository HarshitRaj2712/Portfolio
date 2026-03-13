import axios from "axios";
import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    phone === "" || /^[0-9]{10}$/.test(phone);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://portfolio-4e7w.onrender.com/send-mail",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          timeout: 30000,
        }
      );

      if (data.success) {
        toast.success("Message sent, thank you!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Server error");
      } else if (error.request) {
        toast.error("Network error. Check server.");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-32
      pb-24
      text-white
      bg-black
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

      <div className="hero-reveal relative z-10 max-w-3xl w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center">
          Let's Get in <span className="text-neutral-400">Touch</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          bg-neutral-900
          border
          border-neutral-800
          p-8
          rounded-xl
          "
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
            bg-black
            border
            border-neutral-800
            p-3
            rounded-md
            outline-none
            focus:border-neutral-600
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="
            bg-black
            border
            border-neutral-800
            p-3
            rounded-md
            outline-none
            focus:border-neutral-600
            "
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="
            bg-black
            border
            border-neutral-800
            p-3
            rounded-md
            outline-none
            focus:border-neutral-600
            "
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="
            bg-black
            border
            border-neutral-800
            p-3
            rounded-md
            outline-none
            focus:border-neutral-600
            "
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
            className="
            md:col-span-2
            bg-black
            border
            border-neutral-800
            p-3
            rounded-md
            outline-none
            resize-none
            focus:border-neutral-600
            "
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="
            md:col-span-2
            flex
            items-center
            justify-center
            gap-3
            px-8
            py-3
            rounded-full
            font-medium
            text-black
            bg-gradient-to-b
            from-lime-200
            to-lime-500
            hover:from-lime-300
            hover:to-lime-600
            transition-all
            "
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}