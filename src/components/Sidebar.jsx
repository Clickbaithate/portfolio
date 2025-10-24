import { VscFiles, VscSearch, VscGitMerge, VscDebugAlt, VscExtensions } from "react-icons/vsc"; 

const Sidebar = ({ handleSideMenu, currentMenu }) => {

  const iconClasses = "cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200";
  const icons = [{ name: "File", icon: <VscFiles size={25} /> }, { name: "Search", icon: <VscSearch size={25} /> }, { name: "Git", icon: <VscGitMerge size={25} /> }, { name: "Debug", icon: <VscDebugAlt size={25} /> }, { name: "Extensions", icon: <VscExtensions size={25} /> }];

  return(
    <div className="min-w-16 h-full flex flex-col items-center space-y-4 py-4 bg-gray-300 relative">
      {icons.map(({ name, icon }) => (
        <div key={name} onClick={() => handleSideMenu(name)} className="relative flex items-center justify-center w-full">
          {currentMenu === name && (<div className="absolute left-0 w-1 h-10 bg-blue-500 rounded-r-md" />)}
          <div className={`${iconClasses} ${currentMenu === name ? "text-blue-500" : ""}`}>
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;