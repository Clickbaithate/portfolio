import React from 'react';

const SkillCard = ({ title, imageUrl, description }) => {
  return (
    <a href="#" className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-[#282a48] dark:hover:bg-gray-700">
      {/* Set a fixed height and use object-fit to control the image display */}
      <div className="relative w-full h-52"> {/* Fixed height for the card */}
        <img 
          className="absolute inset-0 w-full h-full object-contain rounded-t-lg py-4" 
          src={imageUrl} 
          alt={title} 
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 ml-2 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default SkillCard;
