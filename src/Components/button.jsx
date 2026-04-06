import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons({ to, value, icon }) {
  const base = "flex items-center gap-3 rounded-xl transition-all";

  const active = "bg-zinc-200 text-zinc-900 font-medium";

  const inactive = "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
          ${base}

          px-2
          lg:px-3

          py-2

          justify-center
          lg:justify-start

          ${isActive ? active : inactive}

        `
      }
    >
      <img
        src={icon}
        alt=""
        className="
          w-5 h-5
          opacity-80
        "
      />

      {/* hide text on small screens */}

      <span
        className="
        hidden
        lg:inline
      "
      >
        {value}
      </span>
    </NavLink>
  );
}
