import { FaEllipsis } from "react-icons/fa6";

const SidebarContent = ({ currentMenu }) => {
  return(
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-between px-5 py-2">
        <p>{currentMenu}</p>
        <FaEllipsis className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SidebarContent;