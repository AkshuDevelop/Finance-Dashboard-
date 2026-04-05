import React from "react";

export default function Summary({ Status, Amount, Detail, className = "" }) {
  return (
    <div className={className}>
      <div
        className="
        bg-linear-to-br from-zinc-800 to-zinc-900
        text-zinc-200
        p-5
        rounded-2xl
        shadow-lg
        w-full
        h-full
        max-w-sm

        transition-all duration-200 ease-[cubic-bezier(.4,0,.2,1)]

        hover:scale-[1.03]
        hover:p-[1.35rem]
        hover:shadow-xl

        active:scale-[0.98]

        will-change-transform
        "
      >
        {/* Title */}
        <h3 className="text-2xl text-zinc-400 font-medium">{Status}</h3>

        {/* Amount */}
        <h1 className="text-7xl font-semibold mt-5 tracking-wide">₹{Amount}</h1>

        {/* Detail */}
        <div
          className=" flex flex-col absolute bottom-9
          justify-between items-center text-2xs text-zinc-400"
        >
          <span>{Detail}</span>
        </div>
      </div>
    </div>
  );
}
