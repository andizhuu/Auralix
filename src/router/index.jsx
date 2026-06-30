import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Splash from "../pages/Splash/Splash";
import Home from "../pages/Home/Home";
import Music from "../pages/Music/Music";
import Equalizer from "../pages/Equalizer/Equalizer";
import Effects from "../pages/Effects/Effects";
import Settings from "../pages/Settings/Settings";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />

        <Route path="/music" element={<Music />} />

        <Route path="/equalizer" element={<Equalizer />} />

        <Route path="/effects" element={<Effects />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
