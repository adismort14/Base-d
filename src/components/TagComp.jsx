import React from "react";

const TagComp = (props) => {
  return (
    <div className="pl-2 pr-1 py-1 bg-indigo-500 rounded justify-start items-center gap-1 flex">
      <div className="text-center text-white text-[10px] font-semibold font-['Figtree'] uppercase leading-none tracking-wide">
        {props.name}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <path
          d="M1 1L4 4M4 4L1 7M4 4L7 7M4 4L7 1"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="h-4 relative" />
    </div>
  );
};

export default TagComp;
