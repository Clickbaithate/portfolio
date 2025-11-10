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
    <div className="w-full h-8 flex items-center justify-between relative select-none text-text border-b-1 border-accent bg-bg">
      <div className="flex items-end space-x-3 mx-3">
        <VscVscode className="text-blue-500" size={22}/>
        <div onClick={() => {if (fileExplorerMode === null) handleMenuClick("File")}} className="cursor-pointer px-1 rounded hover:bg-bg-accent">File</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Edit</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Selection</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">View</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Go</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Run</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Terminal</div>
        <div className="cursor-pointer px-1 rounded hover:bg-bg-accent">Help</div>
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
