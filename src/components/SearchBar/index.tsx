import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; 

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 mt-5 w-[800px]">
      {/* Search Section */}
      <div className="flex items-center space-x-2">
        <FaSearch className="text-[#515B6F]" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] focus:outline-none"
        />
      </div>

      {/* City Section */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-[#515B6F]" />
        <input
          type="text"
          placeholder="Enter city"
          className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] focus:outline-none"
        />
      </div>

      {/* Search Button Section */}
      <div className="flex items-center">
        <button className="px-6 py-2 bg-[#4640DE] text-white text-lg font-semibold rounded-md hover:bg-[#3A34B4] transition">
          Search my job
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
