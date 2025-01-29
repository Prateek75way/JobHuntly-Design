import React from "react";
import Navbar from "../Navbar";
import {ReactComponent as Dash} from "../../assets/dash.svg";
import SearchBar from "../SearchBar";
import  PartnerSection from "../PatnerSection";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full px-30 py-20 text-left bg-[#f8f8fd]">
        {/* Discover */}
        <div className=" top-[130px] left-[125px]">

        <h1 className="!font-clashdisplay font-semibold text-[72px] leading-[79.2px] text-[#000000]">
          Discover
        </h1>

        {/* More than */}
        <h1 className="!font-clashdisplay font-semibold text-[72px] leading-[79.2px] text-[#000000] mt-[23px]">
          more than
        </h1>

        {/* 5000+ Jobs */}
        <h1 className="!font-clashdisplay font-semibold text-[72px] leading-[79.2px] text-[#26A4FF] mt-[23px]">
          5000+ Jobs
        </h1>

        <Dash className="mt-[23px]"/>

        <p className="mt-[23px] !font-epilogue font-normal text-[20px] leading-[32px] text-left text-underline-position-from-font text-decoration-skip-ink-none  w-[521px] h-[64px] gap-[0px] opacity-[0.7] text-[#515B6F]">
        Great platform for the job seeker that searching for new career heights and passionate about startups.
        </p>
        

        <p className="mt-2 !font-epilogue font-normal text-[16px] leading-[25.6px] text-left text-underline-position-from-font text-decoration-skip-ink-none w-[412px] h-[26px] gap-[0px] opacity-[0.7] text-[#515B6F]">Popular : UI Designer, UX Researcher, Android, Admin</p>
        </div>
        <SearchBar />

        
      </div>


      
    </>
  );
};

export default Index;