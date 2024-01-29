import React from "react";
import {ReactComponent as ExcelLogo} from "../assets/images/ExcelLogo.svg"
import { Link } from "react-router-dom";


const UploadingComp = () => {
  return (
    <div className="w-[596px] h-[367px] relative bg-white rounded-lg">
      <div className="left-[233px] top-[100px] absolute flex-col justify-start items-center gap-4 inline-flex">
        <ExcelLogo />
        <div className="text-center text-neutral-400 text-base font-normal font-['Figtree'] leading-normal">
          upload-template.xlsx
        </div>
        <div className="text-center text-red-600 text-sm font-normal font-['Figtree'] leading-normal">Remove</div>
      </div>
      <div className="w-[564px] h-[258px] left-[16px] top-[16px] absolute rounded-lg border border-black border-opacity-10" />
      <div className="w-[464px] left-[16px] top-[175px] absolute" />
      <Link to="/upload/uploaded">
      <div className="w-[564px] h-14 pl-2 pr-4 py-2 left-[16px] top-[295px] absolute bg-indigo-500 rounded-lg justify-center items-center gap-2 inline-flex">
        <div className="w-6 h-6 relative" />
        <div class="w-[19px] h-[19px] rounded-[100px] border-2 border-white"></div>
      </div>
      </Link>
    </div>
  );
};

export default UploadingComp;
