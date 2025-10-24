import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function StatCard({ label, value, showEye, minorValue }) {
  // State for toggling the visibility of the value
  const [isHidden, setIsHidden] = useState(false);

  // State for flipping the card
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow border-4 border-gray-200 p-6 relative flex flex-col items-center justify-center w-64 h-48"
      style={{
        perspective: "1000px", // Perspective for 3D flip effect
        transformStyle: "preserve-3d",
        transition: "transform 0.5s",
      }}
    >
      {isFlipped ? (
        // Back Side: Minor Data
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center">
          {/* Arrow for flipping back */}
          <ArrowRight
            className="absolute top-3 left-3 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={() => setIsFlipped(false)}
          />
          {/* Eye Icon */}
          {showEye && (
            <div
              onClick={() => setIsHidden(!isHidden)}
              className="absolute top-3 right-3 w-5 h-5 text-gray-500 cursor-pointer"
            >
              {isHidden ? <EyeOff /> : <Eye />}
            </div>
          )}

          {/* Minor Value */}
          <h2 className="text-3xl font-bold text-black">{isHidden ? "--" : minorValue}</h2>
          <p className="text-sm text-black mt-1">Minor {label}</p>
        </div>
      ) : (
        // Front Side: Major Data
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center">
          {/* Arrow for flipping to Minor side */}
          <ArrowRight
            className="absolute top-3 left-3 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={() => setIsFlipped(true)}
          />
          {/* Eye Icon */}
          {showEye && (
            <div
              onClick={() => setIsHidden(!isHidden)}
              className="absolute top-3 right-3 w-5 h-5 text-gray-500 cursor-pointer"
            >
              {isHidden ? <EyeOff /> : <Eye />}
            </div>
          )}

          {/* Major Value */}
          <h2 className="text-3xl font-bold text-black">{isHidden ? "--" : value}</h2>
          <p className="text-sm text-black mt-1">{label}</p>
        </div>
      )}
    </div>
  );
}
