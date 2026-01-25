import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-extrabold text-purple-500 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page not found
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or was moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="
          rounded-full
          bg-gradient-to-r
          from-purple-500
          to-purple-700
          px-6
          py-3
          text-white
          font-medium
          hover:from-purple-600
          hover:to-purple-800
          transition
          shadow-[0_10px_40px_rgba(168,85,247,0.4)]
        "
      >
        Go back home
      </button>
    </section>
  );
}
