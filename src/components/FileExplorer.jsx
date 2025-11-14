import { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { BsWindowDesktop } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { DiGoogleDrive, DiOnedrive } from "react-icons/di";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { IoIosClose, IoIosRemove } from "react-icons/io";
import { MdAccessTime, MdOutlineLaptopMac, MdPhoneIphone } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { SiAirplayaudio, SiAppstore } from "react-icons/si";

const FileExplorer = ({ mode, onSelectFile, onClose }) => {
  const desktopFiles = [
    { name: "about.html", date: "Oct 10, 2025", size: "2 KB", kind: "HTML Document" },
    { name: "github.md", date: "Oct 12, 2025", size: "1 KB", kind: "Markdown File" },
    { name: "contact.py", date: "Oct 14, 2025", size: "4 KB", kind: "Python File" },
    { name: "hobbies.js", date: "Oct 18, 2025", size: "3 KB", kind: "JavaScript File" },
  ];

  const folders = [
    { name: "miniangel", date: "Oct 10, 2025", size: "--", kind: "Folder" },
    { name: "tacmap", date: "Oct 11, 2025", size: "--", kind: "Folder" },
    { name: "cinevault", date: "Oct 12, 2025", size: "--", kind: "Folder" },
    { name: "pennypal", date: "Oct 13, 2025", size: "--", kind: "Folder" }, 
    { name: "funkovault", date: "Oct 14, 2025", size: "--", kind: "Folder" }
  ];

  const [width, setWidth] = useState("w-3/4");
  const [height, setHeight] = useState("h-3/4");
  const [position, setPosition] = useState(""); // for fullscreen fixed position

  const handleGreen = () => {
    if (width === "w-3/4") {
      setWidth("w-full");
      setHeight("h-screen");
      setPosition("fixed top-0 left-0");
    } else {
      setWidth("w-3/4");
      setHeight("h-3/4");
      setPosition("");
    }
  };

  return (
    <div
      className={`absolute inset-0 bg-opacity-30 flex ${
        width === "w-full" ? "items-start justify-start" : "items-center justify-center"
      } z-30`}
    >
      <div className={`shadow-lg flex rounded-xl bg-bg text-text ${width} ${height} ${position}`}>
        {/* Sidebar */}
        <div className="flex flex-col min-w-[150px] items-start rounded-l-xl bg-bg-accent">
          <div className="flex space-x-2 p-3 text-black">
            <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center cursor-pointer" onClick={onClose}>
              <IoIosClose />
            </div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center cursor-pointer" onClick={onClose}>
              <IoIosRemove />
            </div>
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center cursor-pointer" onClick={handleGreen}>
              <RiExpandUpDownFill className="rotate-45" />
            </div>
          </div>

          <div className="flex flex-col w-full items-start px-2">
            <p className="font-semibold mt-2">Favorites</p>
            <div className="flex items-center space-x-1 my-1 pl-2"><MdAccessTime /><p>Recents</p></div>
            <div className="flex items-center space-x-1 my-1 pl-2"><SiAppstore /><p>Applications</p></div>
            <div className={`flex items-center space-x-1 my-1 pl-2 w-full rounded-md ${mode === "file" ? "bg-bg" : ""}`}><BsWindowDesktop /><p>Desktop</p></div>
            <div className={`flex items-center space-x-1 my-1 pl-2 w-full rounded-md ${mode === "folder" ? "bg-bg" : ""}`}><CiFileOn /><p>Documents</p></div>

            <p className="font-semibold mt-4">Locations</p>
            <div className="flex items-center space-x-1 my-1 w-full pl-2"><MdOutlineLaptopMac /><p className="truncate">Gael's MacBook Pro</p></div>
            <div className="flex items-center space-x-1 my-1 w-full pl-2"><MdPhoneIphone /><p className="truncate">iPhone 15 Pro Max</p></div>
            <div className="flex items-center space-x-1 my-1 pl-2"><DiOnedrive /><p>OneDrive</p></div>
            <div className="flex items-center space-x-1 my-1 pl-2"><DiGoogleDrive /><p>Google Drive</p></div>
            <div className="flex items-center space-x-1 my-1 pl-2"><BiGlobe /><p>192.168.2.1</p></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex justify-between w-full rounded-tr-xl bg-bg">
            <div className="flex items-center space-x-8 pl-8 py-4">
              <FaChevronLeft />
              <FaChevronRight className="text-gray-400" />
              <p className="font-semibold">{mode === "file" ? "Desktop" : "Documents"}</p>
            </div>
            <div className="flex items-center space-x-8 pr-8 py-4">
              <SiAirplayaudio />
              <FaSearch />
            </div>
          </div>

          {/* Column Headers */}
          <div className="flex w-full border-y border-gray-400 text-sm font-semibold px-8 py-2 bg-bg">
            <div className="w-1/2 flex items-center justify-between">
              <span>Name</span>
              <div className="flex items-center space-x-1">
                <FaChevronUp />
                <span>|</span>
              </div>
            </div>
            <div className="w-1/4 flex items-center justify-between">
              <span>Date Modified</span>
              <span>|</span>
            </div>
            <div className="w-1/8 flex items-center justify-between">
              <span>Size</span>
              <span>|</span>
            </div>
            <div className="w-1/8 flex items-center justify-between">
              <span>Kind</span>
            </div>
          </div>

          {/* File / Folder Rows */}
          <div className="flex flex-col w-full text-sm px-8 py-2 overflow-y-auto">
            {mode === "file" &&
              desktopFiles.map((file) => (
                <div
                  key={file.name}
                  onClick={() => onSelectFile(file)}
                  className="flex hover:bg-bg-accent hover:text-white px-2 py-1 rounded cursor-pointer"
                >
                  <div className="w-1/2">{file.name}</div>
                  <div className="w-1/4">{file.date}</div>
                  <div className="w-1/8">{file.size}</div>
                  <div className="w-1/8 truncate">{file.kind}</div>
                </div>
              ))}

            {mode === "folder" &&
              folders.map((folder) => (
                <div
                  key={folder.name}
                  onClick={() => onSelectFile(folder)}
                  className="flex hover:bg-bg-accent hover:text-white px-2 py-1 rounded cursor-pointer"
                >
                  <div className="w-1/2 flex items-center space-x-2 font-semibold">
                    <FaChevronRight className="w-3 h-3 text-gray-400"/>
                    <p>{folder.name}</p>
                  </div>
                  <div className="w-1/4">{folder.date}</div>
                  <div className="w-1/8">{folder.size}</div>
                  <div className="w-1/8">{folder.kind}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
