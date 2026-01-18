import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          Coding Profiles
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">
          My <span className="text-purple-500">Coding Profiles</span>
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
              border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            <div className="flex justify-center mb-6">
              <SiLeetcode className="text-5xl text-orange-400 group-hover:scale-110 transition" />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              LeetCode
            </h3>

            <p className="text-gray-300 mb-4">
              Solved <span className="text-white font-semibold">150+</span>{" "}
              algorithmic and data structure problems.
            </p>

            <p className="text-sm text-purple-400">
              Data Structures • Algorithms • Problem Solving
            </p>
          </a>

          {/* GeeksforGeeks Card */}
          <a
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            <div className="flex justify-center mb-6">
              <SiGeeksforgeeks className="text-5xl text-green-400 group-hover:scale-110 transition" />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              GeeksforGeeks
            </h3>

            <p className="text-gray-300 mb-4">
              Solved <span className="text-white font-semibold">50+</span>{" "}
              problems covering core CS fundamentals.
            </p>

            <p className="text-sm text-purple-400">
              DSA • Core Concepts • Practice
            </p>
          </a>
        </div>

        {/* Quote */}
        <p className="mt-16 text-lg sm:text-xl text-gray-300 italic max-w-3xl mx-auto">
          “Consistent problem-solving has strengthened my{" "}
          <span className="text-purple-400 font-medium">
            Data Structures & Algorithms
          </span>{" "}
          concepts and improved my logical thinking.”
        </p>
      </div>
    </section>
  );
}
