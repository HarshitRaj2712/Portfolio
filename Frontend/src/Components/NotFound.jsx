import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <motion.h1
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl font-semibold tracking-tight mb-6"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 text-lg max-w-md mb-10"
      >
        The page you're looking for doesn't exist or may have been moved.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Link
          to="/"
          className="
          inline-flex
          items-center
          justify-center
          px-8
          py-3
          rounded-full
          font-medium
          text-black
          bg-gradient-to-b
          from-lime-200
          to-lime-500
          hover:from-lime-300
          hover:to-lime-600
          transition
          "
        >
          Go Home
        </Link>
      </motion.div>

    </div>
  );
}