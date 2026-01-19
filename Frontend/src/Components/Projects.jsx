import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript } from "react-icons/si";

const TechBadge = ({ icon: Icon, color, label }) => (
  <div
    className="
      flex items-center gap-2
      rounded-full
      bg-white/5
      border border-white/10
      px-3 py-1
      text-sm
      backdrop-blur-md
      transition
      hover:scale-105
      hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]
    "
  >
    <Icon className={`text-lg ${color}`} />
    <span className="text-gray-200">{label}</span>
  </div>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          Projects
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">
          My Latest <span className="text-purple-500">Projects</span>
        </h2>

        {/* ================= Project 1 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition-all duration-300 hover:-translate-y-1">
          <div className="rounded-lg overflow-hidden border border-white/10 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img src="/P1.png" alt="Coupon Hub" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Coupon Hub</h3>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaReact} color="text-cyan-400" label="React" />
              <TechBadge icon={FaNodeJs} color="text-green-400" label="Node.js" />
              <TechBadge icon={SiExpress} color="text-gray-300" label="Express" />
              <TechBadge icon={SiMongodb} color="text-green-500" label="MongoDB" />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A MERN stack application that aggregates digital coupons and
              discount codes, helping users quickly discover the best deals.
            </p>

            <a
              href="https://coupon-hub-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-md border border-white/20
                bg-white/5 backdrop-blur-md
                px-4 py-2 text-purple-300
                transition-all hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition-all duration-300 hover:-translate-y-1">
          <div className="rounded-lg overflow-hidden border border-white/10 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img src="/P2.png" alt="Restaurant Management System" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Restaurant Management System
            </h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaReact} color="text-cyan-400" label="React" />
              <TechBadge icon={FaNodeJs} color="text-green-400" label="Node.js" />
              <TechBadge icon={SiExpress} color="text-gray-300" label="Express" />
              <TechBadge icon={SiMongodb} color="text-green-500" label="MongoDB" />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A MERN-based restaurant management system to handle orders,
              menus, and daily operations efficiently.
            </p>

            <a
              href="https://online-res-front.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-md border border-white/20
                bg-white/5 backdrop-blur-md
                px-4 py-2 text-purple-300
                transition-all hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live <FiExternalLink />
            </a>
          </div>
        </div>

        {/* ================= Project 3 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center transition-all duration-300 hover:-translate-y-1">
          <div className="rounded-lg overflow-hidden border border-white/10 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <img src="/P3.png" alt="Fleet Management System" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fleet Management System
            </h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaPhp} color="text-indigo-400" label="PHP" />
              <TechBadge icon={SiMysql} color="text-blue-400" label="MySQL" />
              <TechBadge icon={FaHtml5} color="text-orange-500" label="HTML" />
              <TechBadge icon={FaCss3Alt} color="text-blue-500" label="CSS" />
              <TechBadge icon={SiJavascript} color="text-yellow-400" label="JavaScript" />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A fleet management system built with PHP and SQL to track
              vehicles, drivers, and logistics data.
            </p>

            <a
              href="https://fleet-pro.infinityfreeapp.com/?i=1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-md border border-white/20
                bg-white/5 backdrop-blur-md
                px-4 py-2 text-purple-300
                transition-all hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
              "
            >
              Check Live <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
