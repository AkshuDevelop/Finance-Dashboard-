import React, { useState } from "react";

export default function Profile({ ProfileName, dp, role, setRole }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-3
          p-2 rounded-xl
          hover:bg-zinc-200
          cursor-pointer transition
        "
      >
        <img
          src={dp}
          className="
            w-8 h-8 rounded-full
            object-cover
          "
        />

        <div className="flex flex-col">
          <span
            className="
            text-sm font-medium
            text-zinc-700
          "
          >
            {ProfileName}
          </span>

          <span
            className="
            text-xs text-zinc-400
          "
          >
            {role}
          </span>
        </div>
      </div>

      {open && (
        <div
          className="
          absolute bottom-12 left-0
          bg-white border border-zinc-200
          rounded-xl shadow-md
          w-32 p-1
        "
        >
          <button
            onClick={() => {
              setRole("user");

              setOpen(false);
            }}
            className="
              w-full text-left
              px-3 py-2 text-sm
              rounded-lg
              hover:bg-zinc-100
            "
          >
            User
          </button>

          <button
            onClick={() => {
              setRole("admin");

              setOpen(false);
            }}
            className="
              w-full text-left
              px-3 py-2 text-sm
              rounded-lg
              hover:bg-zinc-100
            "
          >
            Admin
          </button>
        </div>
      )}
    </div>
  );
}
