import React, { useState } from 'react';

const TopHeader = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white h-12 flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="text-center flex-1 whitespace-nowrap">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <span className="ml-2 font-bold underline cursor-pointer">ShopNow</span>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <button 
              className="flex items-center space-x-1"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span>English</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Русский
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;