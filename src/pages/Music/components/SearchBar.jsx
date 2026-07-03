import { MdSearch } from "react-icons/md";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="mt-6 flex items-center rounded-2xl border border-white/10 bg-[#1A2333] px-4 py-4">

      <MdSearch
        size={24}
        className="text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari lagu..."
        className="ml-3 flex-1 bg-transparent outline-none placeholder:text-slate-500"
      />

    </div>
  );
}
