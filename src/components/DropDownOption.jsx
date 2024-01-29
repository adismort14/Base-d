import React from "react";

const DropDownOption = (props) => {
  return (
    <div className="z-[2]">
      <a
        href="#"
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        {props.option}
      </a>
    </div>
  );
};

export default DropDownOption;
