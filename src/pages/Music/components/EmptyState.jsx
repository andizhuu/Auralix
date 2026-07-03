import { MdLibraryMusic } from "react-icons/md";

export default function EmptyState() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center text-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">

        <MdLibraryMusic
          size={48}
          className="text-cyan-400"
        />

      </div>

      <h2 className="mt-6 text-xl font-bold text-white">
        Belum ada lagu
      </h2>

      <p className="mt-2 max-w-xs text-slate-400">
        Tambahkan lagu ke penyimpanan perangkat atau berikan izin akses musik.
      </p>

    </div>
  );
}
