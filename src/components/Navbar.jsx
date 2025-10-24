import { ExternalLink } from "lucide-react";
import csdIcon from '../assets/images/csd_transparent.png';
import irisLogo from '../assets/images/iris_logo.png';

export default function Navbar() {
  return (
    <header>
      {/* Top strip */}
      <div className="bg-[#233953] w-full h-10 flex items-center justify-between px-8 text-white text-sm">
        {/* Left side */}
        <div className="flex items-center gap-10">
          <a href="#" className="hover:underline">
            About IRIS
          </a>
          <a href="#" className="hover:underline">
            IRIS Blog
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-10">
          <a href="#" className="hover:underline flex items-center gap-3">
            Terms of Service
            <ExternalLink className="w-4 h-4 text-white" />
            {/* Use the local image */}
            <img src={csdIcon} alt="CSD Icon" className="w-5 h-5" />
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
            className="w-12 h-12 object-contain rounded-md"
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
          <button className="text-gray-600 hover:text-blue-600 w-6 h-6 cursor-pointer">
            <Bell />
          </button>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fmusic-by-sergius%2Frick-astley-never-gonna-give-you-up-musicbysergius-remix&psig=AOvVaw3SWxai_3_7ce8zWzUIwne-&ust=1761334566779000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC1vN2Iu5ADFQAAAAAdAAAAABAE"
            alt="User"
            className="rounded-full border w-8 h-8"
          />
        </div>
      </nav>
    </header>
  );
}
