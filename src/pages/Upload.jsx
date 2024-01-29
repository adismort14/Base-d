import React from "react";
import { Route, Routes } from "react-router-dom";

import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import UploadComp from "../components/UploadComp";
import UploadingComp from "../components/UploadingComp";
import UploadedComp from "../components/UploadedComp";
import UploadedListComp from "../components/UploadedListComp";

const Upload = () => {
  return (
    <>
      <div className="w-[1440px] h-[1024px] bg-[#FAFAFB]">
        <SideBar />
        <div className="absolute left-[248px] top-[49px]">
          <NavBar />
        </div>
        <div className="absolute left-[518px] top-[219px]">
          <Routes>
            <Route path="/" element={<UploadComp />} />
            <Route path="uploading" element={<UploadingComp />} />
          </Routes>
        </div>
        <Routes>
          <Route
            path="uploaded"
            element={
              <>
                <div className="absolute left-[518px] top-[219px]">
                  <UploadedComp />
                </div>
                <div className="absolute left-[248px] top-[690px] text-black text-2xl font-semibold font-montserrat ">
                  Uploads
                </div>
                <div className="absolute left-[248px] top-[768px]">
                  <UploadedListComp />
                </div>
              </>
            }
          >
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Upload;
