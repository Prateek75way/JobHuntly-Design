import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as Dashboard } from "../../assets/Dashboard.svg";
type Props = {};

const CTASection = (props: Props) => {
  return (
    <div className=" md:p-12 p-6 flex  w-11/12 mx-auto relative">
      <div className="absolute bg-[#FFFFFF] h-30 w-[15rem] -rotate-40 -left-5 top-1"></div>
      <div className="absolute bg-[#FFFFFF] h-30 w-[15rem] -rotate-40 -right-5 bottom-1"></div>
      <div className="bg-[#4640DE] w-full overflow-hidden aspect-[16/4] flex justify-between items-center p-6 ">
        <div className=" text-white flex   clash-display flex-col px-16 py-6 gap-y-6">
          <div className="text-5xl font-semibold">
            <p>Start posting</p>
            <p>jobs today</p>
          </div>
          <p>Start posting jobs for only $10.</p>
          <button
            className="bg-white text-[#4640DE] font-epilogue font-bold text-lg px-8 py-3 rounded-lg"
          >
            Sign Up For Free
          </button>
        </div>
        <div className="!right-20 relative !top-8">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default CTASection;