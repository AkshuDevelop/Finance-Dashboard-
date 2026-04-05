import React from "react";

export default function Profile(props) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-200 transition">
      <img src={props.dp} className="w-8 h-8 rounded-full object-cover" />

      <span className="text-sm font-medium text-zinc-700">
        {props.ProfileName}
      </span>
    </div>
  );
}
