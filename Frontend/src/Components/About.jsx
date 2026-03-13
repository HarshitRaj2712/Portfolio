export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20"
    >
      <div className="scroll-reveal max-w-5xl w-full mx-auto">
        {/* Section label */}
            {/* Section label */}
        {/* Section label */}
    <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
      About
    </p>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
      Solving real problems with purposeful,
      <span className="text-neutral-500"> user-first thinking</span>
    </h2>

    {/* Description */}
    <p className="text-neutral-300 text-lg leading-relaxed max-w-4xl text-justify">
      I’m a{" "}
      <span className="text-white font-medium">
        full-stack developer
      </span>{" "}
      who enjoys turning complex ideas into clean, scalable digital
      solutions. I work across the stack to build products that are
      intuitive, performant, and reliable.
    </p>

    <p className="mt-5 text-neutral-300 text-lg leading-relaxed max-w-4xl text-justify">
      From crafting responsive interfaces to designing robust backend
      systems, I focus on writing maintainable code while keeping both
      user experience and business goals in mind.
    </p>

    {/* What I Do */}
    <div className="mt-14">
      <h3 className="text-2xl font-semibold mb-6">
        What I Do
      </h3>

      <ul className="space-y-5 text-neutral-300 text-lg">
        <li className="flex items-start gap-3">
          <span className="text-neutral-500">•</span>
          Building responsive and modern website frontends using

          <span className="text-white ml-2">
            React, Tailwind CSS, JavaScript, and Node.js
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-neutral-500">•</span>
          Designing backend APIs using
          <span className="text-white ml-2">
            Node.js, Express.js, and MongoDB
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-neutral-500">•</span>
          Implementing authentication and secure data systems using
          <span className="text-white ml-2">
            JWT, MongoDB, and best security practices
          </span>
        </li>
      </ul>
    </div>

    {/* Tech Stack */}
    <div className="mt-16 flex justify-center">

      <div
        className="
        rounded-xl
        bg-neutral-900
        border
        border-neutral-800
        px-8
        py-4
        overflow-hidden
        "
      >

        <div className="tech-mask overflow-hidden">
          <div className="tech-marquee flex gap-10 text-lg font-medium">

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
