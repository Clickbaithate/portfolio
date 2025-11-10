const FileMenu = ({ onOpenFileExplorer, onCloseMenu }) => {
  const menuItems = [
    { name: "Open File", shortcut: "Ctrl + P", action: () => onOpenFileExplorer("file") },
    { name: "Open Folder", shortcut: "Ctrl + K Ctrl + O", action: () => onOpenFileExplorer("folder") },
    "divider",
    { name: "Close File", shortcut: "Ctrl + W" },
    { name: "Close Folder", shortcut: "Ctrl + K F" },
  ];

  return (
    <div className="absolute top-7 left-11 shadow-xl rounded-sm text-sm w-1/6 z-20 border border-border bg-bg">
      {menuItems.map((item, index) =>
        item === "divider" ? (
          <div key={index} className="w-full border-t border-border my-2" />
        ) : (
          <div
            key={index}
            onClick={() => {
              item.action?.();
              onCloseMenu();
            }}
            className="hover:bg-blue-500 hover:text-white cursor-pointer px-3 py-1 flex justify-between items-center"
          >
            <span>{item.name}</span>
            <span className="text-text-muted text-xs">{item.shortcut}</span>
          </div>
        )
      )}
    </div>
  );
};

export default FileMenu;
