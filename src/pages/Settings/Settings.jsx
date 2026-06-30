import BottomNav from "../../components/BottomNav/BottomNav";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white pb-28">

      <div className="mx-auto max-w-md px-5 pt-8">

        <h1 className="text-3xl font-bold">
          Pengaturan
        </h1>

        <p className="mt-2 text-cyan-400">
          Konfigurasi aplikasi
        </p>

      </div>

      <BottomNav />

    </div>
  );
}
