export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4 text-sm mt-8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="font-medium">Module Designer</p>
          <p>Arya Shedbal</p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="font-medium">Support</p>
          <p>officers@iris.nitk.ac.in</p>
        </div>

        {/* Right */}
        <div className="text-right">
          <p>IRIS © NITK Surathkal 2025</p>
        </div>
      </div>
    </footer>
  );
}
