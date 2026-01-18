export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        {/* Section label */}
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          About
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Solving real problems with purposeful,
          <span className="text-purple-500"> user-first thinking</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a{" "}
          <span className="text-white font-semibold">
            full-stack developer
          </span>{" "}
          who enjoys turning complex ideas into clean, scalable digital
          solutions. I work across the stack to build products that are
          intuitive, performant, and reliable.
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          From crafting responsive interfaces to designing robust backend
          systems, I focus on writing maintainable code while keeping both
          user experience and business goals in mind.
        </p>

        {/* What I Do */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-white mb-5">
            What I Do
          </h3>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">▹</span>
              Building responsive and modern website frontends using{" "}
              <span className="text-white">
                React, Tailwind CSS, JavaScript, and Node.js
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">▹</span>
              Designing and implementing{" "}
              <span className="text-white">
                RESTful backend APIs
              </span>{" "}
              using Node.js, Express.js, and MongoDB
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">▹</span>
              Integrating secure user authentication and data management using{" "}
              <span className="text-white">
                JWT, MongoDB, and best security practices
              </span>
            </li>
          </ul>
        </div>

        {/* 🔁 Infinite Rotating Tech Stack */}
        {/* 🔁 Infinite Rotating Tech Stack */}
{/* 🔁 Infinite Rotating Tech Stack */}
<div className="mt-16 flex justify-center">
  {/* OUTER CONTAINER (border stays visible) */}
  <div
    className="
      rounded-2xl
      bg-white/10
      backdrop-blur-xl
      border-2
      border-white/20
      px-8
      py-4
      max-w-full
      overflow-hidden
      shadow-[0_10px_40px_rgba(0,0,0,0.4)]
    "
  >
    {/* INNER MASK (fade happens here) */}
    <div className="tech-mask overflow-hidden">
      <div className="tech-marquee gap-10 text-lg sm:text-xl font-medium">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "PHP",
          "Java",
          "Python",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "PHP",
          "Java",
          "Python",
        ].map((tech, index) => (
          <span
            key={index}
            className="text-white whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
