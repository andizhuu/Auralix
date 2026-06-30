const sliders = [
  "Bass",
  "Treble",
  "Balance"
];

export default function QuickEQ() {

  return (

    <div>

      {sliders.map((title) => (

        <div
          key={title}
          className="mb-6"
        >

          <div className="flex justify-between mb-2">

            <span>{title}</span>

            <span>50%</span>

          </div>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full accent-cyan-400"
          />

        </div>

      ))}

    </div>

  );

}
