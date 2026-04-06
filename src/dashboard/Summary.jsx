import React from "react";

export default function Summary({ Status, Amount, Detail, className = "" }) {
  return (
    <div className={className}>
      <div
        className="
          relative

          bg-gradient-to-br
          from-zinc-800
          to-zinc-900

          text-zinc-200

          p-5
          sm:p-6
          lg:p-7

          rounded-2xl
          shadow-lg

          w-full
          h-full

          flex
          flex-col
          justify-between

          transition-all
          duration-200
          ease-[cubic-bezier(.4,0,.2,1)]

          hover:scale-[1.03]
          hover:shadow-xl

          active:scale-[0.98]
        "
      >
        {/* title */}

        <h3
          className="
            text-sm
            sm:text-lg
            lg:text-2xl

            text-zinc-400

            font-medium
          "
        >
          {Status}
        </h3>

        {/* amount */}

        <h1
          className="
            font-semibold

            tracking-wide

            leading-none

            text-3xl
            sm:text-5xl
            lg:text-7xl
          "
        >
          ₹{Amount}
        </h1>

        {/* detail */}

        <span
          className="
            text-xs
            sm:text-sm
            lg:text-base

            text-zinc-400
          "
        >
          {Detail}
        </span>
      </div>
    </div>
  );
}
