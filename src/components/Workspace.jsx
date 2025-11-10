import studio from "../assets/visual.webp";

const Workspace = () => {
  const commands = [
    { name: "Show All Commands", keys: ["Ctrl", "Shift", "P"] },
    { name: "Go to File", keys: ["Ctrl", "P"] },
    { name: "Toggle Terminal", keys: ["Ctrl", "`"] },
    { name: "Find in Files", keys: ["Ctrl", "Shift", "F"] },
    { name: "Open Settings", keys: ["Ctrl", ","] },
  ];

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-bg-accent text-text">
      <img src={studio} alt="Visual Studio" className="w-1/5 mb-6" />

      <div className="w-2/3 grid gap-y-2">
        {commands.map((cmd, index) => (
          <div key={index} className="grid grid-cols-2">
            {/* Command name */}
            <p className="text-right pr-2">{cmd.name}</p>

            {/* Shortcut keys */}
            <p className="text-left pl-2">
              {cmd.keys.map((key, i) => (
                <span key={i}>
                  <span className="bg-bg py-1 px-1 mx-0.5 rounded">{key}</span>
                  {i < cmd.keys.length - 1 && " + "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
