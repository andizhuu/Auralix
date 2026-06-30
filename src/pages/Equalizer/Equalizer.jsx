import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MdArrowBack,
  MdGraphicEq,
} from "react-icons/md";

import BottomNav from "../../components/BottomNav/BottomNav";

const freq = [
  "32",
  "64",
  "125",
  "250",
  "500",
  "1K",
  "2K",
  "4K",
  "8K",
  "16K",
];

export default function Equalizer() {

  const [values, setValues] = useState(
    Array(10).fill(0)
  );

  function update(index, value) {

    const newValue = [...values];

    newValue[index] = value;

    setValues(newValue);

  }

  return (

    <div
      className="min-h-screen pb-28 text-white"
      style={{
        background:
          "linear-gradient(180deg,#07111F,#0B1220,#111827)",
      }}
    >

      <div className="mx-auto max-w-md px-5 pt-8">

        <div className="flex items-center gap-4">

          <Link
            to="/home"
            className="rounded-xl bg-white/10 p-2"
          >
            <MdArrowBack size={24}/>
          </Link>

          <div>

            <h1 className="text-3xl font-bold">
              Equalizer
            </h1>

            <p className="text-cyan-400">
              10 Band Professional
            </p>

          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-[#1A2333] p-5">

          <div className="mb-6 flex items-center gap-3">

            <MdGraphicEq
              size={28}
              className="text-cyan-400"
            />

            <span className="font-semibold">
              Manual Equalizer
            </span>

          </div>

          <div className="flex justify-between gap-2 overflow-x-auto">

            {freq.map((item,index)=>(

              <div
                key={item}
                className="flex flex-col items-center"
              >

                <span className="mb-2 text-xs">

                  {values[index]} dB

                </span>

                <input

                  type="range"

                  min="-10"

                  max="10"

                  value={values[index]}

                  onChange={(e)=>
                    update(index,e.target.value)
                  }

                  className="h-40 w-2 rotate-[-90deg] accent-cyan-400"

                />

                <span className="mt-3 text-xs">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <button className="rounded-2xl bg-cyan-500 py-4 font-semibold text-black">

            Rock

          </button>

          <button className="rounded-2xl bg-[#1A2333] py-4">

            Pop

          </button>

          <button className="rounded-2xl bg-[#1A2333] py-4">

            Jazz

          </button>

          <button className="rounded-2xl bg-[#1A2333] py-4">

            Classical

          </button>

        </div>

      </div>

      <BottomNav/>

    </div>

  );

}
