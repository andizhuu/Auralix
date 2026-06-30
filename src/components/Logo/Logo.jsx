import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-[0_0_70px_rgba(37,99,235,.8)] flex items-center justify-center">

        <span className="text-white text-6xl font-black">
          A
        </span>

      </div>
    </motion.div>
  );
}
