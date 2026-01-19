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
        "https://your-backend-name.onrender.com/send-mail",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 2000, // ⏱ prevents hanging requests
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
        // ❌ Backend responded with error
        toast.error(error.response.data.message || "Server error");
      } else if (error.request) {
        // ❌ No response (CORS / network issue)
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
          {/* inputs unchanged */}
        </form>
      </div>
    </section>
  );
}
