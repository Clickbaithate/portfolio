import { useState, useEffect, useRef } from "react";
import { VscVscode } from "react-icons/vsc";
import FileMenu from "./FileMenu";

const TopBar = ({ onOpenFileExplorer, fileExplorerMode }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-8 flex items-center justify-between bg-gray-200 relative select-none">
      <div className="flex items-end space-x-3 mx-3">
        <VscVscode className="text-blue-500" size={22}/>
        <div onClick={() => {if (fileExplorerMode === null) handleMenuClick("File")}} className="cursor-pointer hover:bg-gray-300 px-1 rounded">File</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Edit</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Selection</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">View</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Go</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Run</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Terminal</div>
        <div className="cursor-pointer hover:bg-gray-300 px-1 rounded">Help</div>
      </div>

      {/* Dropdown */}
      <div ref={menuRef}>
        {openMenu === "File" && (
          <FileMenu onOpenFileExplorer={onOpenFileExplorer} onCloseMenu={() => setOpenMenu(null)} />
        )}
      </div>

      {/* Window controls */}
      <div className="flex items-center space-x-2 mx-2">
        <div className="bg-yellow-500 w-4 h-4 rounded-full" />
        <div className="bg-green-500 w-4 h-4 rounded-full" />
        <div className="bg-red-500 w-4 h-4 rounded-full" />
      </div>
    </div>
  );
};

export default TopBar;
