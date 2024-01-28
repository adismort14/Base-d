import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import UploadedComp from "../components/UploadedComp";
import UploadedListComp from "../components/UploadedListComp"

const Uploaded = () => {
  return (
    <>
      <div className="w-[1440px] h-[3024px] bg-[#FAFAFB]">
        <SideBar />
        <div className="absolute left-[248px] top-[49px]">
          <NavBar />
        </div>
        <div className="absolute left-[518px] top-[219px]">
          <UploadedComp />
        </div>
        <div className="absolute left-[248px] top-[690px] text-black text-2xl font-semibold font-montserrat ">
            Uploads
        </div>
        <div className="absolute left-[248px] top-[768px]">
            <UploadedListComp />
        </div>
      </div>
    </>
  );
};

export default Uploaded;
