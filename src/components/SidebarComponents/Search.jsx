import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { VscClearAll, VscRefresh } from "react-icons/vsc";

const Search = () => {
  const [text, setText] = useState("");
  const [replace, setReplace] = useState("");
  const [toggle, setToggle] = useState(true);

  // Example files with hardcoded code lines
  const files = [
    { 
      name: "app.js", 
      lines: [
        "const express = require('express');",
        "const app = express();",
        "app.listen(3000, () => console.log('Server running'));"
      ]
    },
    { 
      name: "App.jsx",
      lines: [
        "import React from 'react';",
        "const App = () => <h1>Hello World</h1>;",
        "export default App;"
      ]
    },
    { 
      name: "server.js", 
      lines: [
        "const http = require('http');",
        "const server = http.createServer(handler);",
        "server.listen(5000);"
      ]
    },
  ];

  // Track which files are expanded
  const [expanded, setExpanded] = useState({});

  const toggleFile = (name) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex flex-col">
      {/* Search Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <p>Search</p>
        <div className="flex items-center space-x-2">
          <VscRefresh />
          <VscClearAll />
        </div>
      </div>

      {/* Search Inputs */}
      <div className="flex">
        <div
          className="w-[7%] flex items-center justify-center border-2 my-2 ml-2 border-accent text-text-accent"
          style={{ height: toggle ? "calc(2*2rem + 0.5rem)" : "2rem" }}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
        </div>
        <div className="flex flex-col flex-1 space-y-2 p-2">
          <input
            className="border-2 px-2 py-1 w-full h-8 outline-none border-accent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search"
          />
          {toggle && (
            <input
              className="border-2 px-2 py-1 w-full h-8 outline-none border-accent"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              placeholder="Replace"
            />
          )}
        </div>
      </div>

      {/* Show search results */}
      {text && (
        <div className="mt-4 space-y-2 text-sm text-text">
          {files.map((file, index) => (
            <div key={index} className="pl-2">
              <div 
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => toggleFile(file.name)}
              >
                {expanded[file.name] ? (
                  <FaChevronDown size={12} className="text-text" />
                ) : (
                  <FaChevronRight size={12} className="text-text-muted" />
                )}
                <span className="font-semibold">{file.name}</span>
              </div>
              {expanded[file.name] && (
                <div className="pl-5 text-text-accent space-y-1">
                  {file.lines.map((line, i) => (
                    <div key={i} className="truncate pr-6">{line}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
