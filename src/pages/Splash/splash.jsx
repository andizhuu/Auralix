import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../components/Logo/Logo";
import Loading from "../../components/Loading/Loading";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B1220]">

      {/* Background Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <Logo />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 text-5xl font-extrabold text-white"
      >
        Auralix
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-3 text-lg text-slate-300"
      >
        Power Your Music
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-sm text-slate-500"
      >
        Initializing Audio Engine...
      </motion.p>

      <Loading />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-xs tracking-widest text-slate-600"
      >
        Version 0.1 Alpha
      </motion.p>
    </div>
  );
}
