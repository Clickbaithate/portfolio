import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaCheck, FaEllipsis, FaMinus, FaReact } from "react-icons/fa6";
import { VscRequestChanges } from "react-icons/vsc";

const Git = () => {
  const [topToggle, setTopToggle] = useState(true);
  const [stagedToggle, setStagedToggle] = useState(true);
  const [unstagedToggle, setUnstagedToggle] = useState(true);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mx-4 my-2">
        <p>Source Control</p>
        <FaEllipsis />
      </div>

      {/* CHANGES Dropdown */}
      <div
        className="flex items-center ml-2 space-x-2 pb-2 cursor-pointer"
        onClick={() => setTopToggle(!topToggle)}
      >
        {topToggle ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
        <p>CHANGES</p>
      </div>

      {/* Commit Input + Button */}
      {topToggle && (
        <div className="flex flex-col space-y-2">
          <input className="border-2 mx-6 px-2 py-1 border-accent outline-none" placeholder="Message" />
          <div className="relative flex items-center justify-center border-2 border-accent mx-6 px-2 py-1">
            <div className="flex items-center space-x-1 text-text-accent">
              <FaCheck size={18} />
              <p>Commit</p>
            </div>
            <div className="flex items-center justify-center absolute right-2 space-x-2 text-text-accent">
              <p className="border-r-2 h-5 border-accent"></p>
              <FaChevronDown />
            </div>
          </div>
        </div>
      )}

      {/* Changes Section */}
      {topToggle && (
        <div className="flex flex-col pt-1">

          {/* === STAGED CHANGES === */}
          <div
            className="flex w-full items-center justify-between px-5 pt-2 cursor-pointer"
            onClick={() => setStagedToggle(!stagedToggle)}
          >
            <div className="flex items-center space-x-2">
              {stagedToggle ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}
              <p>Staged Changes</p>
            </div>
            <div className="flex items-center space-x-2">
              <VscRequestChanges />
              <FaMinus />
              <div className="w-6 h-6 rounded-full text-center flex items-center justify-center bg-bg-accent">
                1
              </div>
            </div>
          </div>

          {stagedToggle && (
            <div className="flex justify-between space-y-1 py-1 mx-9">
              <div className="flex items-center space-x-2">
                <FaReact />
                <p>Search.jsx</p>
              </div>
              <div className="flex items-start space-x-2 text-text-muted">
                <p>src/compon...</p>
                <p className="text-green-500">A</p>
              </div>
            </div>
          )}

          {/* === UNSTAGED CHANGES === */}
          <div
            className="flex w-full items-center justify-between px-5 pt-2 cursor-pointer"
            onClick={() => setUnstagedToggle(!unstagedToggle)}
          >
            <div className="flex items-center space-x-2">
              {unstagedToggle ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}
              <p>Unstaged Changes</p>
            </div>
            <div className="flex items-center space-x-2">
              <VscRequestChanges />
              <FaMinus />
              <div className="w-6 h-6 rounded-full text-center flex items-center justify-center bg-bg-accent">
                3
              </div>
            </div>
          </div>

          {unstagedToggle && (
            <div className="flex flex-col space-y-1 py-1 mx-9">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaReact />
                  <p>Git.jsx</p>
                </div>
                <div className="flex items-center space-x-2 text-text-muted">
                  <p>src/compon...</p>
                  <p className="text-yellow-500">M</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaReact />
                  <p>Socket.jsx</p>
                </div>
                <div className="flex items-center space-x-2 text-text-muted">
                  <p>src/compon...</p>
                  <p className="text-yellow-500">M</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaReact />
                  <p>Workspace.jsx</p>
                </div>
                <div className="flex items-center space-x-2 text-text-muted">
                  <p>src/views...</p>
                  <p className="text-green-500">U</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Git;
