import axios from "axios";
import { useState } from "react";
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
        `${import.meta.env.VITE_API_URL}/send-mail`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
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
    <section className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
          Let’s build something{" "}
          <span className="text-purple-500">meaningful.</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/40 border border-white/10 p-3 rounded-md outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black/40 border border-white/10 p-3 rounded-md outline-none"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black/40 border border-white/10 p-3 rounded-md outline-none"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-black/40 border border-white/10 p-3 rounded-md outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
            className="md:col-span-2 bg-black/40 border border-white/10 p-3 rounded-md outline-none resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="
              md:col-span-2
              flex
              items-center
              justify-center
              gap-3
              bg-gradient-to-b
              from-purple-300
              to-purple-700
              hover:from-purple-700
              hover:to-purple-300
              py-3
              rounded-md
              transition
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
