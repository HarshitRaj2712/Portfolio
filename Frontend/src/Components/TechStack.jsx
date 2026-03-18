import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const techStackData = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "C++", "PHP"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Linux", "Vercel", "Render"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-black text-white px-6 py-24">
      <div className="scroll-reveal max-w-6xl mx-auto">
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Tech Stack
        </h2>
        <p className="text-neutral-400 text-base md:text-lg mb-12">
          Technologies I work with
        </p>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {techStackData.map((group) => (
            <MotionArticle
              key={group.category}
              variants={cardVariants}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 transition-transform duration-300 hover:scale-105 hover:border-neutral-600"
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-sm border border-neutral-700 bg-neutral-900 text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
