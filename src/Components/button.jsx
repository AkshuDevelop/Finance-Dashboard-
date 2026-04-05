import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons({ to, value, icon }) {
  const base =
    "flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all";

  const active = "bg-zinc-200 text-zinc-900 font-medium";

  const inactive = "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
    >
      {/* icon */}
      <img src={icon} alt="" className="w-4 h-4 opacity-70" />

      {value}
    </NavLink>
  );
}
