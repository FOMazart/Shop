import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import MainImg from '../assets/home-img/MainImg.svg';
import ProkImg from '../assets/home-img/prok.svg';
import CatImg from '../assets/home-img/cat.svg';
import Cart1 from '../assets/home-img/Cart1.svg';
import Cart2 from '../assets/home-img/Cart2.svg';
import Cart3 from '../assets/home-img/Cart3.svg';
import Cart4 from '../assets/home-img/Cart4.svg';
import Cart5 from '../assets/home-img/Cart5.png';
import Cart6 from '../assets/home-img/Cart6.png';
import Cart7 from '../assets/home-img/Cart7.png';
import Cart8 from '../assets/home-img/Cart8.png';
import Cart9 from '../assets/home-img/Cart9.png';
import Cart10 from '../assets/home-img/Cart10.png';
import Cart11 from '../assets/home-img/Cart11.png';
import JblImg from '../assets/home-img/jbl.svg';
import BbigImg from '../assets/home-img/bbig.svg';
import Services1 from '../assets/home-img/Services1.svg';
import Services2 from '../assets/home-img/Services2.svg';
import Services3 from '../assets/home-img/Services3.svg';


const categories = [
  { id: 1, name: "Woman's Fashion", hasSubmenu: true },
  { id: 2, name: "Men's Fashion", hasSubmenu: true },
  { id: 3, name: "Electronics", hasSubmenu: false },
  { id: 4, name: "Home & Lifestyle", hasSubmenu: false },
  { id: 5, name: "Medicine", hasSubmenu: false },
  { id: 6, name: "Sports & Outdoor", hasSubmenu: false },
  { id: 7, name: "Baby's & Toys", hasSubmenu: false },
  { id: 8, name: "Groceries & Pets", hasSubmenu: false },
  { id: 9, name: "Health & Beauty", hasSubmenu: false }
];

const cardAnimation = "transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer hover:-translate-y-2 hover:rotate-1";
const bestSellingCards = [Cart1, Cart2, Cart3, Cart4];
const ourProductsCards = [Cart5, Cart6, Cart7, Cart8, Cart9, Cart10, Cart11, Cart5];

const FlashSalesTimer = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 40
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds < 59) {
          return { ...prevTime, seconds: prevTime.seconds + 1 };
        } else if (prevTime.minutes < 59) {
          return { ...prevTime, minutes: prevTime.minutes + 1, seconds: 0 };
        } else if (prevTime.hours < 23) {
          return { ...prevTime, hours: prevTime.hours + 1, minutes: 0, seconds: 0 };
        } else if (prevTime.days < 30) {
          return { ...prevTime, days: prevTime.days + 1, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          days: 3,
          hours: 23,
          minutes: 19,
          seconds: 40
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <div className="text-sm mb-1">Days</div>
        <div className="text-2xl font-bold">{String(time.days).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 font-bold text-2xl mt-4">:</span>
      <div className="text-center">
        <div className="text-sm mb-1">Hours</div>
        <div className="text-2xl font-bold">{String(time.hours).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 font-bold text-2xl mt-4">:</span>
      <div className="text-center">
        <div className="text-sm mb-1">Minutes</div>
        <div className="text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 font-bold text-2xl mt-4">:</span>
      <div className="text-center">
        <div className="text-sm mb-1">Seconds</div>
        <div className="text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</div>
      </div>
    </div>
  );
};

const SectionHeader = ({title, label, withButton}) => (
  <>
    <div className="flex items-center gap-4">
      <div className="w-6 h-10 bg-red-500 rounded-md"/>
      <span className="text-red-500">{label}</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <h2 className="text-3xl font-bold">{title}</h2>
      {withButton ? (
        <button className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          View All
        </button>
      ) : (
        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <IoIosArrowBack size={24} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <IoIosArrowForward size={24} />
          </button>
        </div>
      )}
    </div>
  </>
);

const Home = () => (
  <div className="flex flex-col min-h-screen pb-16">
    <div className="flex">
      <div className="w-[384px] border-r border-gray-200">
        <ul className="py-4">
          {categories.map(category => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">
                <span className={category.hasSubmenu ? 'font-bold' : 'font-normal'}>{category.name}</span>
                {category.hasSubmenu && <IoIosArrowForward className="text-gray-400" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex-1 p-6">
        <img src={MainImg} alt="Main banner" className="w-[892px] h-[344px] object-cover"/>
      </div>
    </div>

    <div className="px-6 mt-8 ml-12">
      <div className="flex items-center gap-4">
        <div className="w-6 h-10 bg-red-500 rounded-md"></div>
        <span className="text-red-500">Today's</span>
      </div>
      
      <div className="mt-4 flex items-center">
        <h2 className="text-3xl font-bold w-[211px] mr-12">Flash Sales</h2>
        <div className="mr-auto">
          <FlashSalesTimer />
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <IoIosArrowBack size={24} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <img src={ProkImg} alt="Products" className="w-[1308px] h-[350px] object-cover"/>
        <div className="mt-4 mb-16 flex justify-center">
          <button className="w-[234px] h-[56px] bg-red-500 text-white rounded-md flex items-center justify-center text-base font-medium hover:bg-red-600 hover:scale-105 active:scale-95 transform transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>

      <div className="w-[1170px] h-px bg-gray-200 mx-auto mb-16"/>

      <div className="px-6">
        <SectionHeader title="Browse By Category" label="Categories"/>
        <div className="mt-8 mb-16">
          <img src={CatImg} alt="Categories" className="w-[1170px] h-[145px] object-cover"/>
        </div>
      </div>

      <div className="w-[1170px] h-px bg-gray-200 mx-auto mb-16"/>

      <div className="px-6">
        <SectionHeader title="Best Selling Products" label="This Month" withButton/>
        <div className="mt-8 grid grid-cols-4 gap-7">
          {bestSellingCards.map((card, idx) => (
            <img key={idx} src={card} alt={`Product ${idx + 1}`} className={`w-[270px] h-[350px] ${cardAnimation}`}/>
          ))}
        </div>
      </div>

      <div className="w-[1170px] h-px bg-gray-200 mx-auto my-16"/>

      <div className="mt-8 flex justify-center">
        <img src={JblImg} alt="JBL Banner" className="w-[1170px] h-[500px] object-cover"/>
      </div>

      <div className="w-[1170px] h-px bg-gray-200 mx-auto my-16"/>

      <div className="px-6">
        <SectionHeader title="Explore Our Products" label="Our Products"/>
        <div className="mt-8 grid grid-cols-4 gap-7">
          {ourProductsCards.map((card, idx) => (
            <img key={idx} src={card} alt={`Product ${idx + 1}`} className={`w-[270px] h-[350px] ${cardAnimation}`}/>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="w-[234px] h-[56px] bg-red-500 text-white rounded-md flex items-center justify-center text-base font-medium hover:bg-red-600 hover:scale-105 active:scale-95 transform transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>

      <div className="w-[1170px] h-px bg-gray-200 mx-auto my-16"/>

      <div className="px-6">
        <SectionHeader title="New Arrival" label="Featured"/>
        <div className="mt-8 flex justify-center">
          <img 
            src={BbigImg}
            alt="Big banner"
            className="w-[1170px] h-[600px] object-cover"
          />
        </div>

        {/* Services Section */}
        <div className="mt-16 flex justify-center gap-16">
          <div className="flex flex-col items-center text-center">
            <img 
              src={Services1}
              alt="Delivery"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">FREE AND FAST DELIVERY</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">Free delivery for all orders over $140</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img 
              src={Services2}
              alt="Customer Service"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">24/7 CUSTOMER SERVICE</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img 
              src={Services3}
              alt="Money Back"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">MONEY BACK GUARANTEE</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;