import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-purple-500 mb-6"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mb-8 text-center"
      >
        The page you’re looking for doesn’t exist.
      </motion.p>

      <Link
        to="/"
        className="rounded-full bg-white/10 px-6 py-3 border border-white/10 hover:bg-white/20 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
