import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { ReactComponent as Job1 } from "../../assets/Revoult.svg";
import { ReactComponent as Job2 } from "../../assets/Dropbox.svg";
import { ReactComponent as Job3 } from "../../assets/Pitch.svg";
import { ReactComponent as Job4 } from "../../assets/Blinkist.svg";
import { ReactComponent as Job5 } from "../../assets/ClassPass.svg";
import { ReactComponent as Job6 } from "../../assets/Canva.svg";
import { ReactComponent as Job7 } from "../../assets/GoDaddy.svg";
import { ReactComponent as Job8 } from "../../assets/Twitter.svg";

const jobs = [
  {
    svg: <Job1 />,
    title: "Email Marketing",
    company: "Revolut • Madrid, Spain",
    type: "Full Time",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job2 />,
    title: "Brand Designer",
    company: "Dropbox • San Francisco, US",
    type: "Full Time",
    tags: ["Design", "Business"],
  },
  {
    svg: <Job3 />,
    title: "Email Marketing",
    company: "Pitch • Berlin, Germany",
    type: "Full Time",
    tags: ["Marketing"],
  },
  {
    svg: <Job4 />,
    title: "Visual Designer",
    company: "Blinkist • Granada, Spain",
    type: "Full Time",
    tags: ["Design"],
  },
  {
    svg: <Job5 />,
    title: "Product Designer",
    company: "ClassPass • Manchester, UK",
    type: "Full Time",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job6 />,
    title: "Lead Designer",
    company: "Canva • Ontario, Canada",
    type: "Full Time",
    tags: ["Business", "Design"],
  },
  {
    svg: <Job7 />,
    title: "Brand Strategist",
    company: "GoDaddy • Marseille, France",
    type: "Full Time",
    tags: ["Marketing"],
  },
  {
    svg: <Job8 />,
    title: "Data Analyst",
    company: "Twitter • San Diego, US",
    type: "Full Time",
    tags: ["Technology"],
  },
];

const LatestJobs: React.FC = () => {
  return (
    <div className="p-20">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-semibold text-[#25324B]">
          Latest <span className="text-[#26A4FF]">Jobs Open</span>
        </h2>
        <button className="px-6 py-3 text-[#4640DE] text-lg font-semibold rounded-md flex items-center space-x-2 hover:text-[#1D8ED2] transition">
          <span>See All Jobs</span>
          <HiArrowRight className="text-xl" />
        </button>
      </div>

      {/* Job List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-[#D6DDEB] flex items-center gap-4 transition-all duration-300 hover:bg-[#4640DE] hover:text-white cursor-pointer rounded-lg"
          >
            {/* Left: SVG Icon */}
            <div className="w-20 h-20">{job.svg}</div>

            {/* Right: Job Info */}
            <div className="flex flex-col space-y-2 w-full">
              {/* Job Title */}
              <h3 className="text-xl text-[#25324B] font-semibold transition-all duration-300 group-hover:text-white">
                {job.title}
              </h3>

              {/* Company & Location */}
              <span className="text-[#515B6F] font-normal text-base transition-all duration-300 group-hover:text-white">
                {job.company}
              </span>

              {/* Job Type & Tags */}
              <div className="flex gap-x-2 items-center">
                <span className="bg-[#56CDAD1A] text-[#56CDAD] px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 group-hover:text-white">
                  {job.type}
                </span>

                {/* Divider */}
                <div className="w-[1px] bg-[#D6DDEB] h-5"></div>

                {/* Job Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        tag === "Marketing"
                          ? "bg-[#EB85331A] text-[#FFB836]"
                          : tag === "Design"
                          ? "bg-[#56CDAD1A] text-[#56CDAD]"
                          : tag === "Business"
                          ? "bg-[#4640DE1A] text-[#4640DE]"
                          : "bg-[#EB85331A] text-[#FF6550]"
                      } transition-all duration-300 group-hover:bg-white group-hover:text-[#4640DE]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
