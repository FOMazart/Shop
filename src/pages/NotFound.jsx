import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[129px] h-[115px] flex items-center font-bold">
        404 Not Found
      </h1>
      <p className="text-gray-600 mb-6 font-bold">
        Your visited page not found. You may go home page.
      </p>
      <Link 
        to="/" 
        className="w-[254px] h-[56px] bg-red-500 text-white flex items-center justify-center rounded hover:bg-red-600 transition-colors"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
