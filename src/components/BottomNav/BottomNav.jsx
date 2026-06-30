import {
  MdHome,
  MdLibraryMusic,
  MdGraphicEq,
  MdEqualizer,
  MdSettings,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const menus = [
  { title: "Home", path: "/home", icon: MdHome },
  { title: "Music", path: "/music", icon: MdLibraryMusic },
  { title: "EQ", path: "/equalizer", icon: MdGraphicEq },
  { title: "FX", path: "/effects", icon: MdEqualizer },
  { title: "Settings", path: "/settings", icon: MdSettings },
];

export default function BottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">

      <div className="flex w-full max-w-md items-center justify-between rounded-3xl border border-white/10 bg-[#1B2333]/90 px-3 py-2 shadow-2xl backdrop-blur-xl">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex w-16 flex-col items-center rounded-2xl py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              <Icon size={24} />

              <span className="mt-1 text-[11px]">
                {item.title}
              </span>
            </NavLink>
          );
        })}

      </div>

    </div>
  );
}
