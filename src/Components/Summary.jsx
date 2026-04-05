import React from "react";

export default function Summary({ Status, Amount, Detail, className = "" }) {
  return (
    <div className={className}>
      <div className="bg-linear-to-br from-zinc-800 to-zinc-900 text-zinc-200 p-5 rounded-2xl shadow-lg w-full max-w-sm">
        {/* Title */}
        <h3 className="text-sm text-zinc-400 font-medium">{Status}</h3>

        {/* Amount with Rupee symbol */}
        <h1 className="text-3xl font-semibold mt-1 tracking-wide">₹{Amount}</h1>

        {/* Bottom section */}
        <div className="flex justify-between items-center mt-6 text-sm text-zinc-400">
          <span>{Detail}</span>
        </div>
      </div>
    </div>
  );
}
