import { useState } from "react";

const Architecture = ({ image }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 1.7)); // max zoom = 2x
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.75)); // min zoom = 0.75x
  const handleReset = () => setScale(1);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] font-mono border overflow-hidden border-border">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b text-xs border-border bg-bg">
        <span className="text-text">🧠 System Design Overview</span>
        <span className="text-text-accent-2 italic">Architecture Diagram</span>
      </div>

      {/* Image Viewer */}
      <div className="flex-1 flex justify-center items-center p-8 overflow-hidden bg-bg-accent">
        <div
          className="relative rounded-lg shadow-2xl p-4 flex justify-center items-center transition-transform duration-300 ease-in-out bg-bg"
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
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end items-center gap-4 px-4 py-2 border-t text-xs text-text-muted bg-bg border-border">
        <button
          className="hover:text-text transition"
          onClick={handleZoomIn}
          disabled={scale >= 2}
        >
          🔍 Zoom In
        </button>
        <button
          className="hover:text-text transition"
          onClick={handleZoomOut}
          disabled={scale <= 0.75}
        >
          🔎 Zoom Out
        </button>
        <button className="hover:text-text transition" onClick={handleReset}>
          🗔 Reset View
        </button>
      </div>
    </div>
  );
};

export default Architecture;
