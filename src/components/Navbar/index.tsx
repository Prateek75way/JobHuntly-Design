import React, { useState } from "react";
import {ReactComponent as Logo} from "../../assets/Logo.svg"; // Adjust the path if needed

const Navbar: React.FC = () => {
  // Use a state to toggle between login and sign-up views
  const [isLogin, setIsLogin] = useState(false); // Set to false to show login and sign up buttons

  return (
    <nav className="bg-[#F8f8fD] w-full min-h-[78px] flex gap-12 items-center px-[124px]  text-[white]">
      <div className="flex items-center gap-3">
      <Logo className="h-10 w-auto" /> 
        <span className="font-redhatdisplay font-bold text-[24px] leading-[36px] text-[#25324b] tracking-[-0.01em]">
          JobHuntly
        </span>
      </div>
      <ul className="flex gap-5 " >
        <li><a href="#" className="hover:underline text-[#515B6F]">Find Jobs</a></li>
        <li><a href="#" className="hover:underline text-[#515B6F]">Browse Companies</a></li>
      </ul>
      
      <div className="flex gap-2 items-center ml-auto">
        {/* Sign In Button */}
        <button className=" py-3  rounded-[4px] text-[#4640DE] text-[16px] font-epilogue font-semibold leading-[25.6px] tracking-[-0.01em] hover:bg-gray-600">
          Login
        </button>

        {/* Divider */}
        <div className="w-[48px] h-[1px] bg-[#D6DDEB] rotate-[-90deg]"></div>

        {/* Sign Up Button */}
        <button className="px-6 py-3 bg-[#4640DE] rounded-[4px] text-white text-[16px] font-epilogue font-semibold leading-[25.6px] tracking-[-0.01em] hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
