export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20"
    >
      <div className="scroll-reveal max-w-5xl w-full mx-auto">

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
        <div className="max-w-4xl mx-auto">
          <p className="text-neutral-300 text-lg leading-relaxed text-justify mb-6">
            <span className="text-white font-medium">Full-stack developer (MERN)</span> focused on building scalable, real-world web applications with clean architecture and high performance. I create responsive UIs using <span className="text-white font-medium">React</span>, develop robust backend systems with <span className="text-white font-medium">Node.js & Express</span>, and handle data efficiently with <span className="text-white font-medium">MongoDB</span>.
          </p>

          <p className="text-neutral-300 text-lg leading-relaxed text-justify">
            My projects solve practical problems like <span className="text-white font-medium">business management, QR systems, and digital platforms</span>, with an emphasis on usability and performance. I believe in writing clean code, optimizing for real-world use cases, and delivering solutions that truly matter to users.
          </p>
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