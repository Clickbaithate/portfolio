import { useState, useEffect, useRef } from "react";

const Backend = ({ lines }) => {

  const [highlighted, setHighlighted] = useState(-1);
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Highlight animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % lines.length);
    }, 400);
    return () => clearInterval(interval);
  }, [lines.length]);

  // Scroll when highlight moves out of view
  useEffect(() => {
    if (highlighted >= 0 && lineRefs.current[highlighted]) {
      lineRefs.current[highlighted].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlighted]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] border border-border bg-bg-accent text-text">
      {/* Header */}
      <div className="px-4 py-2 bg-bg border-b border-border text-xs flex justify-between items-center">
        <span className="text-text">🧠 backend.js</span>
        <span className="text-text-accent-2 italic">Node.js Server</span>
      </div>

      {/* Centered Terminal */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-bg rounded-lg w-[80%] h-[70%] shadow-xl overflow-hidden flex flex-col">
          {/* Top bar (traffic lights) */}
          <div className="flex items-center gap-2 px-3 py-2 bg-bg border-b border-border">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-text ml-2">server.js</span>
          </div>

          {/* Code area */}
          <div
            ref={containerRef}
            className="flex-1 p-4 text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          >
            {lines.map((line, index) => (
              <div
                key={index}
                ref={(el) => (lineRefs.current[index] = el)}
                className={`whitespace-pre transition-colors duration-300 px-1 rounded-sm ${
                  index === highlighted
                    ? "bg-bg-accent"
                    : ""
                } ${line.color || "text-text"}`}
              >
                {line.string || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
