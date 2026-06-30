export default function Loading() {
  return (
    <div className="flex gap-2 mt-10">

      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>

      <div
        className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
        style={{ animationDelay: ".2s" }}
      />

      <div
        className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
        style={{ animationDelay: ".4s" }}
      />

    </div>
  );
}
