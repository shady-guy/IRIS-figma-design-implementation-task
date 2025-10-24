import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function StatCard({ label, value, showEye, minorCGPA, minorCredits }) {
  // State for toggling the visibility of CGPA or Minor CGPA
  const [isHidden, setIsHidden] = useState(false);

  // State for flipping the card
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow border-4 border-gray-200 p-4 relative flex flex-col items-center justify-center w-full`}
      style={{
        perspective: "1000px", // Perspective for 3D flip effect
        transformStyle: "preserve-3d",
        transition: "transform 0.5s",
      }}
    >
      {isFlipped ? (
        // Back Side: Minor CGPA and Minor Credits
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center">
          {/* Arrow for flipping back */}
          <ArrowRight
            className="absolute top-3 left-3 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          />
          {/* Eye Icon for Minor CGPA */}
          <div
            onClick={() => setIsHidden(!isHidden)}
            className="absolute top-3 right-3 w-5 h-5 text-gray-500 cursor-pointer"
          >
            {isHidden ? <EyeOff /> : <Eye />}
          </div>

          {/* Minor CGPA */}
          <h2 className="text-2xl font-bold text-black">Minor CGPA</h2>
          <p className="text-lg text-gray-700 mt-2">
            {isHidden ? "--" : minorCGPA || "N/A"}
          </p>

          {/* Minor Credits */}
          <h2 className="text-2xl font-bold text-black mt-4">Minor Credits</h2>
          <p className="text-lg text-gray-700 mt-2">{minorCredits || "N/A"}</p>
        </div>
      ) : (
        // Front Side: Major CGPA
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center">
          {/* Arrow for flipping to Minor side */}
          <ArrowRight
            className="absolute top-3 left-3 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          />

          {/* Eye Icon for Major CGPA */}
          {showEye && (
            <div
              onClick={() => setIsHidden(!isHidden)}
              className="absolute top-3 right-3 w-5 h-5 text-gray-500 cursor-pointer"
            >
              {isHidden ? <EyeOff /> : <Eye />}
            </div>
          )}

          {/* Major CGPA */}
          <h2 className="text-3xl font-bold text-black">
            {isHidden ? "--" : value}
          </h2>

          {/* Label */}
          <p className="text-sm text-black mt-1">{label}</p>
        </div>
      )}
    </div>
  );
}
