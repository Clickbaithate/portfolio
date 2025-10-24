import { useState } from "react";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";

const MainContent = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");

  const handleSideMenu = (menu) => {
    if (currentMenu === menu) setMenuToggle(!menuToggle);
    else {
      setCurrentMenu(menu);
      setMenuToggle(true);
    }
  };

  return (
    <div className="flex flex-grow">
      {/* Sidebar */}
      <Sidebar handleSideMenu={handleSideMenu} currentMenu={currentMenu} />

      {/* Side menu */}
      {menuToggle && (
        <div className="w-1/6 h-full bg-gray-200 border-r border-gray-300">
          {currentMenu}
        </div>
      )}

      {/* Main area */}
      <Workspace currentMenu={currentMenu} />
    </div>
  );
};

export default MainContent;
