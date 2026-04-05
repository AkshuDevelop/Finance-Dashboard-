import React from "react";

export default function Profile(props) {
  return (
    <div>
      <div className="flex w-56 h-20 items-center font-inter font-bold justify-start gap-4 px-4 py-2 text-sm  text-left bg-black text-[#E3DCD4] border-2 border-black rounded-2xl">
        <img className="rounded-full size-10 " src={props.dp} />
        {props.ProfileName}
      </div>
    </div>
  );
}
