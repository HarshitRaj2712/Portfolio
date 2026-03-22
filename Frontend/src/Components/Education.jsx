import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const educationData = [
  {
    level: "Matriculation",
    school: "St. Karen's High School",
    score: "86%",
    duration: "2020 - 2021",
    location: "Patna, Bihar",
  },
  {
    level: "Intermediate",
    school: "Holly Mission School",
    score: "72%",
    duration: "2022 - 2023",
    location: "Patna, Bihar",
  },
  {
    level: "B.Tech (Current)",
    school: "Lovely Professional University",
    score: "7.71 CGPA",
    duration: "Ongoing",
    location: "Jalandhar, Punjab",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Education() {
  return (
    <section id="education" className="bg-black text-white px-6 py-24">
      <div className="scroll-reveal max-w-6xl mx-auto">
        <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
          Education
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Education
        </h2>
        <p className="text-neutral-400 text-base md:text-lg mb-12">
          My academic background
        </p>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {educationData.map((item) => (
            <MotionArticle
              key={item.level}
              variants={cardVariants}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 transition-transform duration-300 hover:scale-105 hover:border-neutral-600"
            >
              <h3 className="text-xl font-semibold mb-1">{item.level}</h3>
              <p className="text-neutral-200 mb-3">{item.school}</p>

              <div className="space-y-2 text-sm text-neutral-400">
                <p>
                  <span className="text-neutral-300">Score:</span> {item.score}
                </p>
                <p>
                  <span className="text-neutral-300">Year:</span> {item.duration}
                </p>
                <p>
                  <span className="text-neutral-300">Location:</span> {item.location}
                </p>
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
