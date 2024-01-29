import React, { useState } from "react";
import TagComp from "./TagComp";
import DropDownOption from "./DropDownOption";

const TableRow = ({ data }) => {
  const { id, links, prefix, selectTags } = data;

  const [selectedTag, setSelectedTag] = useState("Select Tags");
  const [selectedTags, setSelectedTags] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTagChange = (e) => {
    const selectedValue = e.target.value;

    // Check if the tag is not already selected
    if (!selectedTags.includes(selectedValue)) {
      setSelectedTags([...selectedTags, selectedValue]);
    }
    setSelectedTag(selectedValue);
  };

  return (
    <>
      {/* {console.log(selectTags)} */}
      <div className="w-[1034px] h-[58px] relative bg-white rounded-lg flex justify-start items-center">
        {/* Start of row*/}
        <div className="text-black text-sm font-normal font-['Figtree'] leading-normal w-1 mr-[85px] pl-4">
          {id}
          {/* {console.log(id)} */}
        </div>
        <div className="text-blue-400 text-sm font-normal font-['Figtree'] underline leading-normal min-w-[140px] mr-[72px]">
          <a href={"https://" + links}>{links}</a>
        </div>
        <div className="text-black text-sm font-normal font-['Figtree'] leading-normal min-w-[96px] mr-[95px]">
          {prefix}
        </div>
        {/* <div className="w-[150px] h-8 bg-white rounded-lg border border-gray-200 justify-center items-center inline-flex mr-[71px]"> */}
        {/* Select tag dropdown */}
        {/* <select
            className="block w-40 py-2 pl-3 pr-8 leading-normal text-black bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            value={selectedTag}
            onChange={handleTagChange}
          >
            <option
              className="bg-transparent"
              value="Select Tags"
              disabled
              hidden
            >
              Select Tags
            </option>
            {selectTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select> */}
        {/* select tag ends */}
        {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div> */}
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="w-[150px] h-8 p-3 bg-white rounded-lg border border-gray-200 justify-center items-center gap-2 flex"
            id="options-menu"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <div className="text-black text-sm font-normal font-['Figtree'] leading-normal">
              {" "}
              Options
            </div>

            <div className="flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {selectTags.map((tag, index) => (
                <DropDownOption key={index} option={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-[270px] justify-start items-start gap-2 inline-flex">
        <div className="w-[270px] justify-start items-start gap-2 inline-flex">
          {selectedTags.map((tag, index) => (
            <TagComp key={index} name={tag} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TableRow;
