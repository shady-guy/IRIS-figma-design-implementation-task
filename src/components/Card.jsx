export default function Card({ title, code, progress }) {
  // Determine progress bar color based on value
  let progressColor = "bg-green-500"; // default green
  if (progress < 75) {
    progressColor = "bg-red-500";
  } else if (progress >= 75 && progress < 85) {
    progressColor = "bg-yellow-400";
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 relative">
      {/* Logo top-right */}
      <img
        src="https://img.icons8.com/?size=512&id=39910&format=png"
        alt="Logo"
        className="absolute top-4 right-4 w-8 h-8 object-contain"
      />

      <h4 className="font-semibold text-gray-800">{code}</h4>
      <p className="text-sm text-gray-600">{title}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 rounded-full mt-3">
        <div
          className={`${progressColor} h-1 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-500 mt-1">Attendance: {progress}%</p>
    </div>
  );
}
