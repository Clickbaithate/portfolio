const FileMenu = ({ onOpenFileExplorer, onCloseMenu }) => {
  return (
    <div className="absolute top-8 left-12 bg-gray-100 shadow-lg rounded-sm text-sm w-40 border border-gray-300 z-20">
      <div
        onClick={() => {onOpenFileExplorer("file"); onCloseMenu();}}
        className="hover:bg-blue-500 hover:text-white cursor-pointer px-3 py-1"
      >
        Open File...
      </div>
      <div
        onClick={() => {onOpenFileExplorer("folder"); onCloseMenu();}}
        className="hover:bg-blue-500 hover:text-white cursor-pointer px-3 py-1"
      >
        Open Folder...
      </div>
    </div>
  );
};

export default FileMenu;
