import React from "react";
import {ReactComponent as ExcelLogo} from "../assets/images/ExcelLogo.svg"


const UploadedComp = () => {
  return (
    <div className="w-[596px] h-[367px] relative bg-white rounded-lg">
      <div className="left-[175px] top-[48px] absolute flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-9 h-9 pl-[3.50px] pr-[2.59px] py-1 justify-center items-center inline-flex">
          <div className="w-[29.91px] h-7 relative flex-col justify-start items-start flex" />
        </div>
        <ExcelLogo />
        <div className="text-center">
          <span className="text-neutral-400 text-base font-normal font-['Figtree'] leading-normal">
            Drop your excel sheet here or{" "}
          </span>
          <span className="text-indigo-500 text-base font-normal font-['Figtree'] leading-normal hover:cursor-pointer">
            browse
          </span>
        </div>
      </div>
      <div className="w-[564px] h-[258px] left-[16px] top-[16px] absolute rounded-lg border border-black border-opacity-10" />
      <div className="w-[464px] left-[16px] top-[175px] absolute" />
      <div className="w-[564px] h-14 pl-2 pr-4 py-2 left-[16px] top-[295px] opacity-40 absolute bg-indigo-500 rounded-lg justify-center items-center gap-2 inline-flex">
        <div className="w-6 h-6 relative" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-white text-sm font-semibold font-['Figtree'] leading-normal">
          Upload
        </div>
      </div>
    </div>
  );
};

export default UploadedComp;
