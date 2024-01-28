import React from "react";
import TableRow from "./TableRow";
import { sampleData } from "../assets/sampleData";

const UploadedListComp = () => {
  return (
    <>
      <div className="w-[1065px] h-[419px] relative bg-neutral-100 rounded-lg ">
        <div className="flex justify-start">
          <div className="text-black text-sm font-semibold font-['Figtree'] leading-normal mr-[72px] mt-[14px] ml-[31px] ">
            Sl No.
          </div>
          <div className="text-black text-sm font-semibold font-['Figtree'] leading-normal mr-[174px] mt-[14px]">
            Links
          </div>
          <div className="text-black text-sm font-semibold font-['Figtree'] leading-normal mr-[135px] mt-[14px]">
            Prefix
          </div>
          <div className="text-black text-sm font-semibold font-['Figtree'] leading-normal mr-[156px] mt-[14px]">
            Add Tags
          </div>
          <div className="text-black text-sm font-semibold font-['Figtree'] leading-normal mt-[14px]">
            Selected Tags
          </div>
        </div>
        <div className="ml-[16px] mt-[13px] items-center">
          {sampleData.map((row,index) => {
            // console.log(row.selectTags)
            return(
            <TableRow key={index} data={row} />)
          })}
        </div>
      </div>
    </>
  );
};

export default UploadedListComp;
