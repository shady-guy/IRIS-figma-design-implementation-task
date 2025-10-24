import { ExternalLink } from "lucide-react";
import csdIcon from '../assets/images/csd_transparent.png';
import irisLogo from '../assets/images/iris_logo.png';
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      {/* Top strip */}
      <div className="bg-[#233953] w-full h-10 flex items-center justify-between px-8 text-white text-sm">
        {/* Left side */}
        <div className="flex items-center gap-10">
          <a href="https://about.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            About IRIS
          </a>
          <a href="https://blog.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            IRIS Blog
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-10">
          <a href="#" className="hover:underline flex items-center gap-3" style={{ marginRight: '16px' }}>
            Terms of Service
            <ExternalLink className="w-4 h-4 text-white" />
            {/* Use the local image */}
            <img src={csdIcon} alt="CSD Icon" className="w-12 h-12 filter brightness-0 invert" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-8 py-3">
        {/* Left: IRIS Logo + NITK Logo + Name */}
        <div className="flex items-center gap-4">
          {/* IRIS Logo */}
          <img
            src={irisLogo} // Replace text with the logo image
            alt="IRIS Logo"
            className="w-18 h-18 object-contain rounded-md"
          />

          {/* NITK Emblem */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Emblem"
            className="w-8 h-8 object-contain"
          />

          {/* Full Name */}
          <h1 className="font-semibold text-gray-700 text-lg">
            National Institute of Technology Karnataka, Surathkal
          </h1>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Bell Icon */}
          <button className="text-gray-600 hover:text-blue-600 w-8 h-8 cursor-pointer">
            <Bell />
          </button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsBMY_bXnsZrAIr-O1_m82PnPzSl6QTmGKg&s"
            alt="User"
            className="rounded-full border w-12 h-12"
          />
        </div>
      </nav>
    </header>
  );
}
