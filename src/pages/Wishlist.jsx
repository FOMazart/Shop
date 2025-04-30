import React from 'react';
import firstImage from '../assets/wishlist-img/first.svg';
import secondImage from '../assets/wishlist-img/second.svg';

const Wishlist = () => {
  const wishlistCount = 4;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Верхняя часть с заголовком и кнопкой */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Wishlist ({wishlistCount})
        </h1>
        <button 
          className="px-6 py-2 border border-black rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
        >
          Move All To Bag
        </button>
      </div>

      {/* Первое изображение */}
      <div className="flex justify-center mb-16">
        <img 
          src={firstImage} 
          alt="Wishlist items" 
          width={1170} 
          height={322}
          className="object-contain"
        />
      </div>

      {/* Секция Just For You */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          {/* Левый красный прямоугольник с текстом */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-600 rounded"></div>
            <h2 className="text-2xl font-bold">Just For You</h2>
          </div>

          {/* Кнопка See All */}
          <button 
            className="px-6 py-2 border border-black rounded-md hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            See All
          </button>
        </div>

        {/* Второе изображение */}
        <div className="flex justify-center">
          <img 
            src={secondImage} 
            alt="Recommended items" 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;