import { Book, Calendar, Plus } from "lucide-react";

export default function Favorites() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden mb-4">
      {/* Blue header strip */}
      <div className="px-4 py-2">
  <h3 className="font-semibold text-white inline-block bg-[#6770D2] px-2 py-1 rounded">
    Favorites
  </h3>
</div>


      {/* Favorites icons */}
      <div className="p-4 flex justify-around items-center">
        {/* Timetable */}
        <div className="flex flex-col items-center">
          <Calendar className="text-gray-500 w-12 h-12" />
          <span className="mt-2 text-sm font-medium">Timetable</span>
        </div>

        {/* Course Activities */}
        <div className="flex flex-col items-center">
          <Book className="text-gray-500 w-12 h-12" />
          <span className="mt-2 text-sm font-medium">Course Activities</span>
        </div>

        {/* Add Favorite */}
        <div className="flex flex-col items-center">
          <Plus className="text-gray-500 w-12 h-12" />
          <span className="mt-2 text-sm font-medium">Add Favorite</span>
        </div>
      </div>
    </div>
  );
}
