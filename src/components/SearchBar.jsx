import { Search, BookOpen, Home } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border-b flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-3 shadow-sm gap-3 md:gap-0">
      
      {/* Search box */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full md:w-1/3 shadow-inner">
        <Search className="text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="bg-transparent ml-2 flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Dropdowns with icons */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full md:w-auto">
        
        {/* Institute */}
        <div className="flex items-center gap-1 w-full md:w-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Logo"
            className="w-5 h-5 object-contain"
          />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer w-full md:w-auto">
            <option>Institute</option>
          </select>
        </div>

        {/* Academics */}
        <div className="flex items-center gap-1 w-full md:w-auto">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer w-full md:w-auto">
            <option>Academics</option>
          </select>
        </div>

        {/* Campus */}
        <div className="flex items-center gap-1 w-full md:w-auto">
          <Home className="w-5 h-5 text-gray-600" />
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer w-full md:w-auto">
            <option>Campus</option>
          </select>
        </div>

      </div>
    </div>
  );
}
