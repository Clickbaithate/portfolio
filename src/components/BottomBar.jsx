import { useState } from "react";
import {
  IoCheckmarkDoneOutline,
  IoGitBranchOutline,
} from "react-icons/io5";
import {
  VscBell,
  VscCopilot,
  VscError,
  VscGitCommit,
  VscJson,
  VscWarning,
} from "react-icons/vsc";

const Tooltip = ({ message, children }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className={`
        absolute bottom-[140%] left-1/2 px-2 py-1 ${message === "Current Git branch" ? "-translate-x-2/9" : (message === "No Notifications" ? "-translate-x-27 -translate-y-1" : (message === "Prettier - Code Formatter" ? "-translate-x-26" : "-translate-x-1/2"))}
        text-xs rounded opacity-0 duration-150 z-50
        group-hover:opacity-100 pointer-events-none ${message === "GitHub Copilot" ? "-translate-y-1" : ""}
        whitespace-nowrap transition-all text-text ${message !== "Current Git branch" && message !== "No problems detected" && message !== "Active workspace" ? "bg-bg" : "bg-bg-accent"}
      `}>
        {message}
      </div>
    </div>
  );
};

const BottomBar = ({ line, column }) => {

  return (
    <div className="fixed bottom-0 left-0 right-0 text-sm px-3 py-1 flex items-center justify-between select-none z-40 border-t-1 border-accent text-text bg-bg">
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-4">
        <Tooltip message="Current Git branch">
          <div className="flex items-center space-x-1 cursor-pointer">
            <IoGitBranchOutline />
            <p>main</p>
          </div>
        </Tooltip>

        <Tooltip message="No problems detected">
          <div className="flex items-center space-x-1 cursor-pointer">
            <VscError />
            <p>0</p>
            <VscWarning />
            <p>0</p>
          </div>
        </Tooltip>

        <Tooltip message="Connected to Discord Gateway. Click to Disconnect.">
          <p className="cursor-pointer">Discord RPC</p>
        </Tooltip>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-4">
        <Tooltip message="Last Git commit">
          <div className="flex items-center space-x-1 cursor-pointer">
            <VscGitCommit />
            <p>GaelGuzman (1 min ago)</p>
          </div>
        </Tooltip>

        <Tooltip message="Cursor position">
          <p className="cursor-pointer">Ln {line}, Col {column}</p>
        </Tooltip>

        <Tooltip message="File encoding">
          <p className="cursor-pointer">UTF-8</p>
        </Tooltip>

        <Tooltip message="Select language mode">
          <div className="flex items-center space-x-1 cursor-pointer">
            <VscJson />
            <p>JavaScript JSX</p>
          </div>
        </Tooltip>

        <Tooltip message="GitHub Copilot">
          <VscCopilot className="cursor-pointer" />
        </Tooltip>

        <Tooltip message="Prettier - Code Formatter">
          <div className="flex items-center space-x-1 cursor-pointer">
            <IoCheckmarkDoneOutline />
            <p>Prettier</p>
          </div>
        </Tooltip>

        <Tooltip message="No Notifications">
          <VscBell className="cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
};

export default BottomBar;