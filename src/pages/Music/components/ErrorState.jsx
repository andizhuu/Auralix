import { MdErrorOutline } from "react-icons/md";

export default function ErrorState({
  message,
  onRetry,
}) {
  return (
    <div className="mt-16 flex flex-col items-center text-center">

      <MdErrorOutline
        size={56}
        className="text-red-400"
      />

      <h2 className="mt-5 text-xl font-bold">
        Terjadi Kesalahan
      </h2>

      <p className="mt-2 text-slate-400">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        Coba Lagi
      </button>

    </div>
  );
}
