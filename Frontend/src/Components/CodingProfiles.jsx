import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="scroll-reveal max-w-6xl mx-auto text-center">
        {/* Section Heading */}
            {/* Section Label */}
    <p className="inline-flex items-center rounded-full bg-neutral-900 border border-neutral-700 px-5 py-2 text-sm text-white mb-6">
      Coding Profiles
    </p>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
      My <span className="text-neutral-500">Coding Profiles</span>
    </h2>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

      {/* LeetCode Card */}
      <a
        href="https://leetcode.com/hars8it2712/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          rounded-xl
          border
          border-neutral-800
          bg-neutral-900
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-neutral-600
        "
      >
        <div className="flex justify-center mb-6">
          <SiLeetcode className="text-5xl text-orange-400 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          LeetCode
        </h3>

        <p className="text-neutral-300 mb-4">
          Solved <span className="text-white font-medium">200+</span>{" "}
          algorithmic and data structure problems.
        </p>

        <p className="text-sm text-neutral-500">
          Data Structures • Algorithms • Problem Solving
        </p>
      </a>

      {/* GeeksforGeeks Card */}
      <a
        href="https://www.geeksforgeeks.org/profile/panditjzbq8"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          rounded-xl
          border
          border-neutral-800
          bg-neutral-900
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-neutral-600
        "
      >
        <div className="flex justify-center mb-6">
          <SiGeeksforgeeks className="text-5xl text-green-500 group-hover:scale-110 transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          GeeksforGeeks
        </h3>

        <p className="text-neutral-300 mb-4">
          Solved <span className="text-white font-medium">100+</span>{" "}
          problems covering core CS fundamentals.
        </p>

        <p className="text-sm text-neutral-500">
          DSA • Core Concepts • Practice
        </p>
      </a>

    </div>

    {/* Quote */}
    <p className="mt-16 text-lg text-neutral-300 italic max-w-3xl mx-auto">
      “Consistent problem-solving has strengthened my{" "}
      <span className="text-white font-medium">
        Data Structures & Algorithms
      </span>{" "}
      concepts and improved my logical thinking.”
    </p>

  </div>

  
</section>
  );
}
