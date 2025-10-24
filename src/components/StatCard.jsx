import { Eye, ArrowRight } from "lucide-react";

export default function StatCard({ label, value, showEye }) {
  return (
    <div className="bg-white rounded-xl shadow border-4 border-gray-200 p-4 relative flex flex-col items-center justify-center w-full">
      {/* Top-left icon */}
      <ArrowRight className="absolute top-3 left-3 w-5 h-5 text-gray-500" />

      {/* Top-right eye icon if needed */}
      {showEye && <Eye className="absolute top-3 right-3 w-5 h-5 text-gray-500" />}

      {/* Number */}
      <h2 className="text-3xl font-bold text-black">{value}</h2>

      {/* Label */}
      <p className="text-sm text-black mt-1">{label}</p>
    </div>
  );
}
