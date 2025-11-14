import { useState } from "react";

const Architecture = ({ images = [] }) => {
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState(0);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 1.7));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setScale(1);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  };

  const current = images[index];

  const renderMedia = (src) => {
    if (!src) return null;

    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
    const isGif = src.endsWith(".gif") || src.endsWith(".webp");

    if (isVideo) {
      return (
        <video
          src={src}
          controls
          autoPlay
          loop
          muted
          className="max-w-full max-h-[70vh] rounded-md object-contain"
        />
      );
    }

    return (
      <img
        src={src}
        alt={`Architecture ${index + 1}`}
        className={`max-w-full max-h-[70vh] object-contain rounded-md ${
          isGif ? "pointer-events-none" : ""
        }`}
      />
    );
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] font-mono border overflow-hidden border-border">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b text-xs border-border bg-bg">
        <span className="text-text">🧠 System Design Overview</span>
        <span className="text-text-accent-2 italic">Architecture Carousel</span>
      </div>

      {/* Media Viewer */}
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
          {renderMedia(current)}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center px-4 py-2 border-t text-xs text-text-muted bg-bg border-border">
        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            className="hover:text-text transition disabled:opacity-50"
            onClick={handlePrev}
            disabled={images.length <= 1}
          >
            ◀ Prev
          </button>
          <span className="text-text">
            {index + 1} / {images.length}
          </span>
          <button
            className="hover:text-text transition disabled:opacity-50"
            onClick={handleNext}
            disabled={images.length <= 1}
          >
            Next ▶
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-4">
          <button
            className="hover:text-text transition"
            onClick={handleZoomIn}
            disabled={scale >= 1.7}
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
            🗔 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
