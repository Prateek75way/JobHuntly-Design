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
    company: "Revolt • Madrid, Spain",
    description:
      "Revolt is looking for email marketing to help team ma ....",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job2 />,
    title: "Brand Designer",
    company: "Dropbox • San Fransisco, US",
    description: "Dropbox is looking for brand designer to help the team ...",
    tags: ["Design", "Business"],
  },
  {
    svg: <Job3 />,
    title: "Email Marketing",
    company: "Pitch • Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"],
  },
  {
    svg: <Job4 />,
    title: "Visual Designer",
    company: "Blinklist • Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"],
  },
 
  {
    svg: <Job5 />,
    title: "Product Designer",
    company: "ClassPass • Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job6/>,
    title: "Lead Designer",
    company: "Canva • Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Business", "Design"],
  },
  {
    svg: <Job7 />,
    title: "Brand Strategist",
    company: "GoDaddy • Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
  },
  {
    svg: <Job8 />,
    title: "Data Analyst",
    company: "Twitter • San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: [ "Technology"],
  },
];

const FeaturedJobs: React.FC = () => {
  return (
    <div className="p-20">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-semibold text-[#25324B]">
          Featured <span className="text-[#26A4FF]">Jobs</span>
        </h2>
        <button className="px-6 py-3 text-[#4640DE] text-lg font-semibold rounded-md flex items-center space-x-2 hover:text-[#1D8ED2] transition">
          <span>See All Jobs</span>
          <HiArrowRight className="text-xl" />
        </button>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-[#D6DDEB] flex flex-col space-y-4 transition-all duration-300 hover:bg-[#4640DE] hover:text-white cursor-pointer"
          >
            {/* SVG and Button */}
            <div className="flex justify-between items-center">
              <div className="w-10 h-20">{job.svg}</div>{" "}
              <button className="px-4 py-2 border-2 border-[#4640DE] text-[#4640DE] text-sm font-semibold  hover:bg-[#4640DE] hover:text-white transition">
                Apply Now
              </button>
            </div>

            {/* Job Title */}
            <h3 className="text-lg text-[#25324B] font-semibold">{job.title}</h3>

            {/* Company Name */}
            <span className="text-[#515B6F] font-normal text-base">{job.company}</span>

            {/* Job Description */}
            <p className="text-[#7C8493] font-normal text-base">{job.description}</p>

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
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
