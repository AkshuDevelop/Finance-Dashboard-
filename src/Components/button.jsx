import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons({ to, value, icon }) {
  const baseClasses =
    "w-full flex h-15 items-center  justify-start gap-2 px-4 py-2 text-sm font-medium transition rounded-2xl bg-transparent text-left";
  const activeClasses = " !bg-black text-[#E3DCD4] border-2 border-black ";
  const inactiveClasses = "text-black bg-transparent";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="text-left">{value}</span>
    </NavLink>
  );
}
