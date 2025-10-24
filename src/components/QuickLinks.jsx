import { Book, Calendar, User, FileText } from "lucide-react"; // Using lucide-react icons

export default function QuickLinks() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden mb-4">
      {/* Blue header strip */}
      <div className="px-4 py-2">
  <h3 className="font-semibold text-white inline-block bg-[#6770D2] px-2 py-1 rounded">
    Quick Links
  </h3>
</div>

      {/* Icons section */}
      <div className="p-4 flex justify-around items-center">
        {/* Moodle */}
        <div className="flex flex-col items-center">
           <a href="https://moodle.org/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"
              alt="Moodle"
              className="w-20 h-20"
            />
          </a>
        </div>

        {/* NITK Portal */}
        <div className="flex flex-col items-center">
          <a href="https://www.nitk.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
              alt="NITK Portal"
              className="w-16 h-16"
            />
          </a>
        </div>

      </div>
    </div>
  );
}
