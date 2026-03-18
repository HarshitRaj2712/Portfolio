import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript } from "react-icons/si";

const TechBadge = ({ icon, color, label }) => {
  const IconComponent = icon;

  return (
    <div
      className="
      flex items-center gap-2
      rounded-full
      bg-neutral-900
      border border-neutral-800
      px-3 py-1
      text-sm
      transition
      hover:border-neutral-600
      "
    >
      <IconComponent className={`text-lg ${color}`} />
      <span className="text-neutral-200">{label}</span>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-28"
    >
      <div className="scroll-reveal max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          My Latest <span className="text-neutral-400">Projects</span>
        </h2>

        {/* ================= Project 1 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <img src="/P11.png" alt="Smart Local Trust" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Smart Local Trust</h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaReact} color="text-cyan-400" label="React" />
              <TechBadge icon={FaNodeJs} color="text-green-400" label="Node.js" />
              <TechBadge icon={SiExpress} color="text-gray-300" label="Express" />
              <TechBadge icon={SiMongodb} color="text-green-500" label="MongoDB" />
            </div>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Developed a full-stack local service marketplace enabling users to book verified providers,
              manage services, and leave reviews through a complete booking lifecycle. Implemented secure
              JWT authentication with email verification, role-based dashboards (User, Provider, Admin),
              and analytics using the MERN stack.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://smart-local-service.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-black
                font-medium
                bg-gradient-to-b
                from-lime-200
                to-lime-500
                hover:from-lime-300
                hover:to-lime-600
                transition
                "
              >
                Check Live <FiExternalLink />
              </a>

              <a
                href="https://github.com/HarshitRaj2712/Smart-Local-Service"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-white
                font-medium
                border border-neutral-600
                hover:border-neutral-400
                hover:bg-neutral-900
                transition
                "
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <img src="/P1.png" alt="Coupon Hub" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Coupon Hub</h3>

            <div className="flex flex-wrap gap-3 mb-5">
              <TechBadge icon={FaReact} color="text-cyan-400" label="React" />
              <TechBadge icon={FaNodeJs} color="text-green-400" label="Node.js" />
              <TechBadge icon={SiExpress} color="text-gray-300" label="Express" />
              <TechBadge icon={SiMongodb} color="text-green-500" label="MongoDB" />
            </div>

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Built a MERN stack application that aggregates digital coupons and discount codes,
              allowing users to quickly discover and access the best available deals through a
              responsive and user-friendly interface.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://coupon-hub-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-black
                font-medium
                bg-gradient-to-b
                from-lime-200
                to-lime-500
                hover:from-lime-300
                hover:to-lime-600
                transition
                "
              >
                Check Live <FiExternalLink />
              </a>

              <a
                href="https://github.com/HarshitRaj2712/Coupon-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-white
                font-medium
                border border-neutral-600
                hover:border-neutral-400
                hover:bg-neutral-900
                transition
                "
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ================= Project 3 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center mb-24 transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
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

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Developed a MERN-based restaurant management system to streamline order processing,
              menu management, and daily operations, improving efficiency and reducing manual workload.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://online-res-front.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-black
                font-medium
                bg-gradient-to-b
                from-lime-200
                to-lime-500
                hover:from-lime-300
                hover:to-lime-600
                transition
                "
              >
                Check Live <FiExternalLink />
              </a>

              <a
                href="https://github.com/HarshitRaj2712/Online-restaurant-reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-white
                font-medium
                border border-neutral-600
                hover:border-neutral-400
                hover:bg-neutral-900
                transition
                "
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ================= Project 4 ================= */}
        <div className="group grid md:grid-cols-2 gap-10 items-center transition hover:-translate-y-1">

          <div className="rounded-lg overflow-hidden border border-neutral-800">
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

            <p className="text-neutral-300 mb-6 leading-relaxed">
              Built a fleet management system using PHP and SQL to track vehicles, manage drivers,
              and monitor logistics data, enhancing operational visibility and control.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://fleet-pro.infinityfreeapp.com/?i=1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-black
                font-medium
                bg-gradient-to-b
                from-lime-200
                to-lime-500
                hover:from-lime-300
                hover:to-lime-600
                transition
                "
              >
                Check Live <FiExternalLink />
              </a>

              <a
                href="https://github.com/HarshitRaj2712/Fleet-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-white
                font-medium
                border border-neutral-600
                hover:border-neutral-400
                hover:bg-neutral-900
                transition
                "
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}