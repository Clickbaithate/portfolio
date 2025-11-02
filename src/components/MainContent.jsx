import { useState } from "react";
import Sidebar from "./Sidebar";
import WorkspaceView from "./WorkspaceView";
import SidebarContent from "./SidebarContent";
import FileExplorer from "./FileExplorer";

const MainContent = ({ fileExplorerMode, onSelectFile, currentProject, onCloseExplorer, currentFile, setCurrentFile }) => {
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
    <div className="flex flex-grow relative">
      <Sidebar handleSideMenu={handleSideMenu} currentMenu={currentMenu} />

      {menuToggle && (
        <div className="w-1/6 h-full bg-bg text-text">
          <SidebarContent currentMenu={currentMenu} currentProject={currentProject} fileExplorerMode={fileExplorerMode} currentFile={currentFile} setCurrentFile={setCurrentFile} />
        </div>
      )}

      <WorkspaceView currentProject={currentProject} currentFile={currentFile} />

      {fileExplorerMode && (
        <FileExplorer
          mode={fileExplorerMode}
          onSelectFile={onSelectFile}
          onClose={onCloseExplorer}
        />
      )}
    </div>
  );
};

export default MainContent;
