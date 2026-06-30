import {
  MdHeadphones,
  MdDirectionsCar,
  MdSportsEsports,
  MdMovie,
} from "react-icons/md";
import { motion } from "framer-motion";

const profiles = [
  {
    icon: MdHeadphones,
    title: "Headset",
    active: true,
  },
  {
    icon: MdDirectionsCar,
    title: "Mobil",
  },
  {
    icon: MdSportsEsports,
    title: "Gaming",
  },
  {
    icon: MdMovie,
    title: "Film",
  },
];

export default function QuickProfile() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {profiles.map((item) => {
        const Icon = item.icon;

        return (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            key={item.title}
            className={`rounded-3xl p-4 transition-all ${
              item.active
                ? "bg-cyan-500/20 border border-cyan-400 shadow-lg shadow-cyan-500/20"
                : "bg-[#1A2333] border border-white/5"
            }`}
          >
            <Icon
              size={34}
              className={`mx-auto ${
                item.active ? "text-cyan-400" : "text-slate-300"
              }`}
            />

            <p className="mt-3 text-sm font-medium text-white">
              {item.title}
            </p>

            {item.active && (
              <span className="mt-2 inline-block rounded-full bg-cyan-500 px-2 py-1 text-[10px] font-bold text-black">
                AKTIF
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
