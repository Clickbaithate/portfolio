import { FaEllipsis } from "react-icons/fa6";
import {
  VscClearAll,
  VscFilter,
  VscRefresh,
  VscSettingsGear,
} from "react-icons/vsc";
import visual from "../../assets/visual.webp";

const extensions = [
  {
    name: "Discord Rich Presence",
    description:
      "Highly customizable Discord Rich Presence extension for Visual Studio Code",
    author: "leonardssh",
  },
  {
    name: "Flutter",
    description: "Flutter support and debugger for Visual Studio Code.",
    author: "Dart Code",
  },
  {
    name: "Gatito Theme Fork",
    description:
      "Minimalistic and modern looking fork of fantastic Oceanic theme.",
    author: "icyleaf",
  },
  {
    name: "GitHub Copilot",
    description: "Your AI pair programmer",
    author: "GitHub",
  },
  {
    name: "Prettier - Code formatter",
    description: "Code formatter using prettier",
    author: "Prettier",
  },
  {
    name: "Rainbow CSV",
    description: "Highlight CSV and TSV files, Run SQL-like queries",
    author: "mechatroner",
  },
  {
    name: "Tailwind CSS IntelliSense",
    description: "Intelligent Tailwind CSS tooling for VS Code",
    author: "Tailwind Labs",
  },
  {
    name: "Code Runner",
    description:
      "Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir",
    author: "Jun Han",
  },
  {
    name: "Live Share",
    description:
      "Real-time collaborative development from the comfort of your favorite tools.",
    author: "Microsoft",
  },
  {
    name: "indent-rainbow",
    description: "Makes indentation easier to read",
    author: "oderwat",
  },
];

const Extensions = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.8rem)]">
      {/* Fixed Header + Search */}
      <div className="flex flex-col flex-shrink-0 bg-bg z-10">
        {/* Header */}
        <div className="flex items-center justify-between mx-4 py-2">
          <p className="font-medium">Extensions</p>
          <div className="flex items-center space-x-3">
            <VscRefresh />
            <FaEllipsis />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between mx-4 p-2 bg-bg-accent rounded mt-1">
          <input
            className="w-[80%] p-1 outline-none bg-transparent"
            placeholder="Search Extensions"
          />
          <div className="flex items-center space-x-4">
            <VscClearAll size={18} />
            <VscFilter size={18} />
          </div>
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto mt-2">
        {extensions.map((ext, i) => (
          <div
            key={i}
            className="flex items-center w-full px-4 py-2 hover:bg-bg-accent transition cursor-pointer"
          >
            <img src={visual} alt="extension" className="w-8 h-8 mr-3 rounded" />
            <div className="flex flex-col flex-1 min-w-0">
              <p className="font-medium text-text-accent">{ext.name}</p>
              <p className="text-sm text-text truncate">{ext.description}</p>
              <div className="flex items-center justify-between text-xs text-text-muted mt-1">
                <p>{ext.author}</p>
                <VscSettingsGear className="text-text-muted hover:text-text cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;
