import { useState, useEffect, useRef } from "react";

const TopBar = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const searchRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchToggle(false);
      }
    };

    if (searchToggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchToggle]);

  return (
    <div className="w-full h-8 flex items-center justify-between bg-gray-200 relative">
      {/* Options */}
      <div className="flex space-x-4 mx-2">
        <div>logo</div>
        <div>File</div>
        <div>Edit</div>
        <div>Selection</div>
        <div>View</div>
        <div>Go</div>
        <div>Run</div>
        <div>Terminal</div>
        <div>Help</div>
      </div>

      {/* Search Bar */}
      <div
        ref={searchRef}
        className="w-1/3 h-6 text-center rounded-sm relative bg-gray-300 cursor-pointer"
        onClick={() => setSearchToggle(true)}
      >
        Search
        {searchToggle && (
          <div className="absolute w-full top-0 left-0 bg-gray-300 rounded-xl shadow-xl z-10">
            <input
              type="text"
              placeholder="Search files by name"
              className="w-[98%] h-[90%] border-2 text-sm p-1 rounded-sm border-gray-300 bg-gray-400 mt-1"
              autoFocus
            />
            <div className="flex flex-col items-start p-1 space-y-1 text-left text-sm">
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Go to File</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Show and Run Commands</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Search for Text</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Go to Symbol in Editor</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Start Debugging</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">Run Task</p>
              <p className="hover:bg-gray-200 w-full px-2 rounded-sm">More</p>
            </div>
          </div>
        )}
      </div>

      {/* Window Controls */}
      <div className="flex items-center space-x-2 mx-2">
        <div className="bg-yellow-500 w-4 h-4 rounded-full" />
        <div className="bg-green-500 w-4 h-4 rounded-full" />
        <div className="bg-red-500 w-4 h-4 rounded-full" />
      </div>
    </div>
  );
};

export default TopBar;
