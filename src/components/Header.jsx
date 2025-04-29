import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import cartIcon from '../assets/header-img/caa.svg';
import userIcon from '../assets/header-img/user.svg';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="h-12 bg-white border-b border-black">
      <nav className="container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          <div className="w-1/4">
            <Link to="/" className="font-bold text-xl">Exclusive</Link>
          </div>
          
          <ul className="flex space-x-8 justify-center w-1/2 -ml-20">
            {['/', '/contact', '/about', '/signup'].map((path) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `
                    hover:text-gray-600 pb-1 relative
                    ${isActive ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black' : ''}
                  `}
                >
                  {path === '/' ? 'Home' : 
                   path === '/contact' ? 'Contact' :
                   path === '/about' ? 'About' : 'Sign Up'}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="w-1/4 flex justify-end items-center space-x-4">
            <div className="relative w-[291px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-[38px] pl-4 pr-10 border rounded-md text-sm"
                style={{ fontSize: '18px', lineHeight: '18px' }}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <NavLink 
              to="/wishlist" 
              className={({ isActive }) => `hover:text-gray-600 transition-colors duration-200`}
            >
              {({ isActive }) => (
                <svg
                  className={`w-5 h-5 ${
                    isActive 
                      ? 'text-red-500 fill-red-500' 
                      : 'text-black fill-white'
                  }`}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </NavLink>
            
            <NavLink 
              to="/cart" 
              className={({ isActive }) => `hover:text-gray-600 transition-colors duration-200`}
            >
              <img src={cartIcon} alt="Cart" className="w-8 h-8 cursor-pointer" />
            </NavLink>
            
            <div className="relative">
              <img 
                src={userIcon} 
                alt="User" 
                className={`w-8 h-8 cursor-pointer ${isUserMenuOpen ? 'fill-red-500 stroke-red-500' : ''}`}
                style={{ filter: isUserMenuOpen ? 'invert(35%) sepia(84%) saturate(2728%) hue-rotate(337deg) brightness(111%) contrast(111%)' : 'none' }}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-sm border rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/account" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                  >
                    Manage My Account
                  </Link>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                  >
                    My Orders
                  </a>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                  >
                    My Cancellations
                  </a>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                  >
                    My Reviews
                  </a>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;