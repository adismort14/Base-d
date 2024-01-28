import React from 'react';

const TableRow = ({ data }) => {
    const {
        id,
        links,
        prefix,
        selectTags,
        selectedTags
      } = data;

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
          <a href={"https://"+links}>{links}</a>
        </div>
        <div className="text-black text-sm font-normal font-['Figtree'] leading-normal min-w-[96px] mr-[95px]">
        {prefix}
        </div>
        <div className="w-[150px] h-8 bg-white rounded-lg border border-gray-200 justify-center items-center inline-flex mr-[71px]">
        {/* Select tag dropdown */}
        <select
          className="text-black text-sm font-normal font-['Figtree'] leading-normal"
          value="Select Tags" 
          onChange={(e) => console.log(e.target.value)} 
        >
          <option className='bg-transparent' value="Select Tags" disabled hidden>
            Select Tags
          </option>
          {selectTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {/* select tag ends */}
        </div> 
        <div className="w-[270px] justify-start items-start gap-2 inline-flex">
          <div className="pl-2 pr-1 py-1 bg-indigo-500 rounded justify-start items-center gap-1 flex">
            <div className="text-center text-white text-[10px] font-semibold font-['Figtree'] uppercase leading-none tracking-wide">
              TAG 1
            </div>
            <div className="w-4 h-4 relative" />
          </div>
          <div className="pl-2 pr-1 py-1 bg-indigo-500 rounded justify-start items-center gap-1 flex">
            <div className="text-center text-white text-[10px] font-semibold font-['Figtree'] uppercase leading-none tracking-wide">
              TAG 2
            </div>
            <div className="w-4 h-4 relative" />
          </div>
          <div className="pl-2 pr-1 py-1 bg-indigo-500 rounded justify-start items-center gap-1 flex">
            <div className="text-center text-white text-[10px] font-semibold font-['Figtree'] uppercase leading-none tracking-wide">
              TAG 3
            </div>
            <div className="w-4 h-4 relative" />
          </div>
          <div className="pl-2 pr-1 py-1 bg-indigo-500 rounded justify-start items-center gap-1 flex">
            <div className="text-center text-white text-[10px] font-semibold font-['Figtree'] uppercase leading-none tracking-wide">
              TAG 4
            </div>
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableRow;
