import React from "react";
import { 
  FaPencilRuler, FaShoppingCart, FaBullhorn, FaMoneyBillWave, 
  FaMicrochip, FaCog, FaChartLine, FaUsers 
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const categories = [
  { icon: <FaPencilRuler />, title: "Design", jobs: "235 jobs available" },
  { icon: <FaShoppingCart />, title: "Sales", jobs: "756 jobs available" },
  { icon: <FaBullhorn />, title: "Marketing", jobs: "140 jobs available" },
  { icon: <FaMoneyBillWave />, title: "Finance", jobs: "325 jobs available" },
  { icon: <FaMicrochip />, title: "Technology", jobs: "436 jobs available" },
  { icon: <FaCog />, title: "Engineering", jobs: "542 jobs available" },
  { icon: <FaChartLine />, title: "Business", jobs: "211 jobs available" },
  { icon: <FaUsers />, title: "Human Resource", jobs: "346 jobs available" },
];

const ExploreByCategory: React.FC = () => {
  return (
    <div className="p-20">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-semibold text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">Category</span>
        </h2>
        <button className="px-6 py-3 text-[#4640DE] text-lg font-semibold rounded-md flex items-center space-x-2 hover:text-[#1D8ED2] transition">
          <span>See All Jobs</span>
          <HiArrowRight className="text-xl" />
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-[#D6DDEB] rounded-lg flex flex-col space-y-3 transition-all duration-300 cursor-pointer group hover:bg-[#4640DE] hover:text-white"
          >
            {/* Icon */}
            <div className="text-3xl text-[#4640DE] group-hover:text-white transition-all duration-300">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl text-[#25324B] font-semibold group-hover:text-white transition-all duration-300">
              {category.title}
            </h3>

            {/* Jobs Available */}
            <div className="flex items-center justify-between text-lg font-normal transition-all duration-300 group-hover:text-white">
              <span>{category.jobs}</span>
              <HiArrowRight className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByCategory;
