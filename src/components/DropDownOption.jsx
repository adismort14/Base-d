import React from "react";

const DropDownOption = ({option, onSelect}) => {

  const handleSelect = () => {
    onSelect(option);
  };
  return (
    <div className="w-[134px] text-sm font-['Figtree] text-gray-700 hover:bg-gray-100 rounded-md p-2">
      <button
        onClick={handleSelect}
        className=""
        role="menuitem"
      >
        {option}
      </button>
    </div>
  );
};

export default DropDownOption;
