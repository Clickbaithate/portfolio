import { FaEllipsis } from "react-icons/fa6";

const Debug = () => {
  return(
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between mx-4 my-2">
        <p>RUN AND DEBUG: RUN</p>
        <FaEllipsis/>
      </div>
      <div className="mx-4 p-2 text-center bg-blue-200">Run and Debug</div>
      <p className="mx-4">To customize Run and Debug create a launch.json file.</p>
      <div className="mx-4 p-2 text-center bg-blue-200">JavaScript Debug Terminal</div>
      <p className="mx-4">You can use the JavaScript Debug Terminal to debug Node.js processes run on the command line.</p>
      <div className="mx-4 p-2 text-center bg-blue-200">Debug URL</div>
    </div>
  );
}

export default Debug;