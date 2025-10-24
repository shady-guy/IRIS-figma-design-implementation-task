import { ExternalLink, Menu, X, Bell } from "lucide-react";
import { useState } from "react";
import csdIcon from '../assets/images/csd_transparent.png';
import irisLogo from '../assets/images/iris_logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Strip */}
      <div className="bg-[#233953] w-full h-10 flex items-center justify-between px-4 md:px-8 text-white text-sm">
        {/* Left Links */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://about.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            About IRIS
          </a>
          <a href="https://blog.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            IRIS Blog
          </a>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:underline flex items-center gap-2">
            Terms of Service
            <ExternalLink className="w-4 h-4 text-white" />
            <img src={csdIcon} alt="CSD Icon" className="w-18 h-18 filter brightness-0 invert" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: Logos + Name */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* IRIS Logo */}
          <img src={irisLogo} alt="IRIS Logo" className="w-18 h-12 object-contain rounded-md" />

          {/* NITK Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Emblem"
            className="w-8 h-8 object-contain"
          />

          {/* Full Name */}
          <h1 className="hidden md:block font-semibold text-gray-700 text-lg">
            National Institute of Technology Karnataka, Surathkal
          </h1>
        </div>

        {/* Right: Icons + Hamburger */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Bell Icon */}
          <button className="text-gray-600 hover:text-blue-600 w-6 h-6 cursor-pointer">
            <Bell />
          </button>

          {/* Profile Image */}
          <img
            src="https://static.wikia.nocookie.net/fansekai/images/1/1d/HA_HA_HA_HA.jpg/revision/latest?cb=20220807225343"
            alt="User"
            className="rounded-full border w-8 h-8"
          />

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-3">
          <a href="https://about.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            About IRIS
          </a>
          <a href="https://blog.iris.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            IRIS Blog
          </a>
          <a href="#" className="hover:underline flex items-center gap-2">
            Terms of Service
            <ExternalLink className="w-4 h-4" />
            <img src={csdIcon} alt="CSD Icon" className="w-5 h-5 filter brightness-0 invert" />
          </a>
        </div>
      )}
    </header>
  );
}
