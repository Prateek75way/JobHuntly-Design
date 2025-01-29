import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col gap-y-6">
          <h2 className="text-white text-lg font-semibold flex items-center gap-x-4">
            <Logo />
            JobHuntly
          </h2>
          <p className="mt-2 text-sm">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-y-6">
          <h3 className="text-white text-lg font-semibold">Get job notifications</h3>
          <p className="text-base">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="mt-4 flex gap-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full bg-white text-gray-800 rounded-md focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>2021 @ JobHuntly. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Add social media icons here if needed */}
        </div>
      </div>
    </footer>
  );
}
