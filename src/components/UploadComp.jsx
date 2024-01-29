import React from "react";
import { ReactComponent as ExcelLogo } from "../assets/images/ExcelLogo.svg";
import { Link } from "react-router-dom";

const UploadComp = () => {
  return (
    <div className="w-[596px] h-[367px] relative bg-white rounded-lg">
      <div className="left-[175px] top-[100px] absolute flex-col justify-start items-center gap-4 inline-flex">
        <ExcelLogo />
        <div className="text-center relative top-3">
          <span className="text-neutral-400 text-base font-normal font-['Figtree'] leading-normal">
            Drop your excel sheet here or{" "}
          </span>
          <span className="text-indigo-500 text-base font-normal font-['Figtree'] leading-normal" >
            browse
          </span>
        </div>
      </div>
      <div className="w-[564px] h-[258px] left-[16px] top-[16px] absolute rounded-lg border border-black border-opacity-10" />
      <Link to="/upload/uploading">
        <div className="w-[564px] h-14 pl-2 pr-2 py-4 left-[16px] top-[295px] absolute bg-indigo-500 rounded-lg  flex justify-center items-center gap-2 flex-shrink-0 ">
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
      </Link>
    </div>
  );
};

export default UploadComp;
