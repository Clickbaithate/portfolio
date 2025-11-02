import { useState } from "react";

const Architecture = ({ image }) => {
  const [scale, setScale] = useState(1.25);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2)); // max zoom = 2x
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.75)); // min zoom = 0.75x
  const handleReset = () => setScale(1.25);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] bg-[#0d1117] text-gray-200 font-mono border border-gray-700 overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] border-b border-gray-700 text-xs">
        <span className="text-gray-400">🧠 System Design Overview</span>
        <span className="text-gray-500 italic">Architecture Diagram</span>
      </div>

      {/* Image Viewer */}
      <div className="flex-1 flex justify-center items-center bg-[#0d1117] p-8 overflow-hidden">
        <div
          className="relative bg-[#111827] border border-gray-700 rounded-lg shadow-2xl p-4 flex justify-center items-center transition-transform duration-300 ease-in-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            maxWidth: "90vw",
            maxHeight: "80vh",
          }}
        >
          <img
            src={image}
            alt="Architecture Diagram"
            className="max-w-full max-h-[70vh] object-contain rounded-md"
          />
          <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-tr from-white/5 via-transparent to-white/5"></div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end items-center gap-4 px-4 py-2 bg-[#161b22] border-t border-gray-700 text-xs text-gray-400">
        <button
          className="hover:text-white transition"
          onClick={handleZoomIn}
          disabled={scale >= 2}
        >
          🔍 Zoom In
        </button>
        <button
          className="hover:text-white transition"
          onClick={handleZoomOut}
          disabled={scale <= 0.75}
        >
          🔎 Zoom Out
        </button>
        <button className="hover:text-white transition" onClick={handleReset}>
          🗔 Reset View
        </button>
      </div>
    </div>
  );
};

export default Architecture;
