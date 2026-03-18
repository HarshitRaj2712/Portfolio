import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroText() {
  return (
    <section className="w-full min-h-[70vh] bg-black flex items-center justify-center px-6 py-16">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center"
      >
        <MotionP
          variants={textVariants}
          className="text-sm md:text-base uppercase tracking-[0.22em] text-neutral-400"
        >
          Hello, I am Harshit Raj
        </MotionP>

        <MotionH1
          variants={textVariants}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white"
        >
          Building Scalable Web Products
        </MotionH1>

        <MotionH2
          variants={textVariants}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-neutral-200"
        >
          Full Stack Developer
        </MotionH2>

        <MotionP
          variants={textVariants}
          className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-neutral-400"
        >
          I design and develop high-performance, user-focused applications with clean architecture and practical business impact.
        </MotionP>
      </MotionDiv>
    </section>
  );
}
