import { useState } from "react";

const MainContent = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  return(
    <div className='flex flex-grow'>
      <div className='w-16 h-full bg-gray-300'>
        <div onClick={() => setMenuToggle((prev) => !prev)}>1</div>
        <div onClick={() => setMenuToggle((prev) => !prev)}>2</div>
        <div onClick={() => setMenuToggle((prev) => !prev)}>3</div>
        <div onClick={() => setMenuToggle((prev) => !prev)}>4</div>
        <div onClick={() => setMenuToggle((prev) => !prev)}>5</div>
      </div>
      {menuToggle && (
        <div className='w-1/6 h-full bg-gray-200'>3</div>
      )}
      <div className='w-full h-full bg-gray-400'>4</div>
    </div>
  );
};

export default MainContent;