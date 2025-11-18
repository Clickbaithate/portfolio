import { FaEllipsis } from "react-icons/fa6";
import { VscClearAll, VscFilter, VscRefresh, VscSettingsGear } from "react-icons/vsc";
import visual from "../../assets/visual.webp";
import discord from "../../assets/extensions/discord.png";
import flutter from "../../assets/extensions/flutter.png";
import gatito from "../../assets/extensions/gatito.png";
import github from "../../assets/extensions/github.png";
import prettier from "../../assets/extensions/prettier.png";
import rainbow from "../../assets/extensions/rainbow.png";
import tailwind from "../../assets/extensions/tailwind.png";
import code from "../../assets/extensions/code.png";
import live from "../../assets/extensions/live.png";
import indent from "../../assets/extensions/indent.png";

const extensions = [
  {
    name: "Discord Rich Presence",
    description:
      "Highly customizable Discord Rich Presence extension for Visual Studio Code",
    author: "leonardssh",
    image: discord
  },
  {
    name: "Flutter",
    description: "Flutter support and debugger for Visual Studio Code.",
    author: "Dart Code",
    image: flutter
  },
  {
    name: "Gatito Theme Fork",
    description:
      "Minimalistic and modern looking fork of fantastic Oceanic theme.",
    author: "icyleaf",
    image: gatito
  },
  {
    name: "GitHub Copilot",
    description: "Your AI pair programmer",
    author: "GitHub",
    image: github
  },
  {
    name: "Prettier - Code formatter",
    description: "Code formatter using prettier",
    author: "Prettier",
    image: prettier
  },
  {
    name: "Rainbow CSV",
    description: "Highlight CSV and TSV files, Run SQL-like queries",
    author: "mechatroner",
    image: rainbow
  },
  {
    name: "Tailwind CSS IntelliSense",
    description: "Intelligent Tailwind CSS tooling for VS Code",
    author: "Tailwind Labs",
    image: tailwind
  },
  {
    name: "Code Runner",
    description:
      "Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir",
    author: "Jun Han",
    image: code
  },
  {
    name: "Live Share",
    description:
      "Real-time collaborative development from the comfort of your favorite tools.",
    author: "Microsoft",
    image: live
  },
  {
    name: "indent-rainbow",
    description: "Makes indentation easier to read",
    author: "oderwat",
    image: indent
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
            <img src={ext.image} alt="extension" className="w-8 h-8 mr-3 rounded" />
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
