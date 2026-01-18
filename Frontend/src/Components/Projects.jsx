import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          Projects
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">
          My Latest <span className="text-purple-500">Projects</span>
        </h2>

        {/* ================= Project 1 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img
              src="/P1.png"
              alt="Coupon Hub"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Coupon Hub
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed">
              A MERN stack application that aggregates digital coupons and
              discount codes, helping users quickly discover and apply the
              best deals across multiple platforms.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              React • Node.js • Express • MongoDB
            </p>

            {/* Button */}
            <a
              href="https://coupon-hub-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                px-4
                py-2
                text-purple-300
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-purple-400/60
                hover:text-purple-200
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live
              <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img
              src="/P2.png"
              alt="Restaurant Management System"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Restaurant Management System
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed">
              A MERN-based restaurant management system designed to handle
              orders, menu management, and daily operations efficiently
              through a user-friendly dashboard.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              React • Node.js • Express • MongoDB
            </p>

            {/* Button */}
            <a
              href="https://online-res-front.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                px-4
                py-2
                text-purple-300
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-purple-400/60
                hover:text-purple-200
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live
              <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 3 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img
              src="/P3.png"
              alt="Fleet Management System"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fleet Management System
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed">
              A fleet management system built using PHP and SQL that helps
              track vehicles, manage drivers, and maintain operational data
              efficiently for logistics-based businesses.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              PHP • MySQL • HTML • CSS
            </p>

            {/* Button */}
            <a
              href="https://fleet-pro.infinityfreeapp.com/?i=1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                px-4
                py-2
                text-purple-300
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-purple-400/60
                hover:text-purple-200
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
