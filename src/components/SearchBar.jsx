import { Search, BookOpen, Home } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border-b flex items-center justify-between px-8 py-3 shadow-sm">
      {/* Search box */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-1/3 shadow-inner">
        <Search className="text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="bg-transparent ml-2 flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Dropdowns with icons */}
      <div className="flex items-center gap-6">
        {/* Institute */}
        <div className="flex items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Logo"
            className="w-5 h-5 object-contain"
          />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer">
            <option>Institute</option>
          </select>
        </div>

        {/* Academics */}
        <div className="flex items-center gap-1">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer">
            <option>Academics</option>
          </select>
        </div>

        {/* Campus */}
        <div className="flex items-center gap-1">
          <Home className="w-5 h-5 text-gray-600" />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer">
            <option>Campus</option>
          </select>
        </div>
      </div>
    </div>
  );
}
