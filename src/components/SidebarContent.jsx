import { useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { FaChevronDown, FaChevronRight, FaEllipsis } from "react-icons/fa6";
import { IoLogoPython, IoMdInformationCircleOutline } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { MdPhotoLibrary } from "react-icons/md";
import { TbExclamationMark } from "react-icons/tb";
import Search from "./SidebarComponents/Search";
import Git from "./SidebarComponents/Git";
import Debug from "./SidebarComponents/Debug";
import Extensions from "./SidebarComponents/Extensions";

const SidebarContent = ({ onOpenFileExplorer, currentMenu, currentProject, fileExplorerMode, currentFile, setCurrentFile }) => {

  const [folderOpenMessage, setFolderOpenMessage] = useState(true);
  const [showProject, setShowProject] = useState(true);

  if (currentMenu === "File" && (!currentProject || currentProject?.kind !== "Folder")) {
    return(
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between px-4 py-2">
          <p className="font-semibold">Explorer</p>
          <FaEllipsis className="cursor-pointer" />
        </div>
        {folderOpenMessage ? (
          <div className="flex flex-col">
            <div className="flex items-center px-2 cursor-pointer hover:bg-bg-accent" onClick={() => setFolderOpenMessage((prev) => !prev)}>
              <FaChevronDown size={12}/>
              <p className="pl-2">NO FOLDER OPEN</p>
            </div>
            <div className="flex flex-col">
              <p className="mx-4 pt-4">You have not yet opened a folder.</p>
              <div className="py-1 w-[90%] mx-4 text-center rounded-sm my-3 bg-bg-accent-2 text-text cursor-pointer" onClick={() => onOpenFileExplorer("folder")}>Open Folder</div>
              <p className="mx-4">Opening a folder will close all currently open editors. To keep them open, add a folder instead.</p>
              <p className="mx-4 py-3">You can clone a repository locally.</p>
              <div className="py-1 w-[90%] mx-4 text-center rounded-sm bg-bg-accent-2 text-text">Clone Repository</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center px-2 cursor-pointer hover:bg-bg-accent" onClick={() => setFolderOpenMessage((prev) => !prev)}>
            <FaChevronRight size={12}/>
            <p className="pl-2">NO FOLDER OPEN</p>
          </div>
        )}
      </div>
    );
  }

  if (currentMenu === "File") {
    return (
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between px-4 py-2">
          <p className="font-semibold">Explorer</p>
          <FaEllipsis className="cursor-pointer" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center px-2 cursor-pointer hover:bg-bg-accent" onClick={() => setShowProject((prev) => !prev)}>
            {showProject ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
            <p className="pl-2">{currentProject.name}</p>
          </div>
          {showProject && (
            <div className="flex flex-col mx-4">
              <p onClick={() => setCurrentFile("readme")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <IoMdInformationCircleOutline className="text-blue-500"/> <p>README.md</p> </p>
              <p onClick={() => setCurrentFile("architecture")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <MdPhotoLibrary className="text-purple-500"/> <p>architecture.png</p> </p>
              <p onClick={() => setCurrentFile("backend")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <IoLogoJavascript className="text-yellow-400"/> <p>backend.js</p> </p>
              <p onClick={() => setCurrentFile("frontend")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <IoLogoReact className="text-blue-500"/> <p>frontend.jsx</p> </p>
              <p onClick={() => setCurrentFile("websocket")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <IoLogoPython className="text-blue-400"/> <p>websocket.py</p> </p>
              <p onClick={() => setCurrentFile("deployment")} className="flex items-center space-x-1 px-2 cursor-pointer rounded-sm hover:bg-bg-accent"> <TbExclamationMark className="text-purple-400"/> <p>deployment.yaml</p> </p>
            </div>
          )}
        </div>
      </div>
    );
  } else if (currentMenu === "Search") return <Search/>
  else if (currentMenu === "Git") return <Git/>
  else if (currentMenu === "Debug") return <Debug/>
  else return <Extensions/>
};

export default SidebarContent;
