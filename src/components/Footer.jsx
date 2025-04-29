import React from 'react';
import { Link } from 'react-router-dom';
import QrCode from '../assets/footer-img/qr.svg';
import SocialIcons from '../assets/footer-img/soc.svg';
import IconSend from '../assets/footer-img/icon-send.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Первая колонка */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="text-gray-300">Subscribe</p>
            <p className="text-gray-300">Get 10% off your first order</p>
            <div className="relative w-[217px] h-[48px]">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full h-full pl-4 pr-12 bg-black border border-white rounded text-white focus:outline-none"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <img 
                  src={IconSend} 
                  alt="Send"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Вторая колонка */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <Link to="/delivery" className="text-gray-300 hover:text-white">
              111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.
            </Link>
            <Link to="/payment" className="text-gray-300 hover:text-white">
              exclusive@gmail.com
            </Link>
            <Link to="/return" className="text-gray-300 hover:text-white">
              +88015-88888-9999
            </Link>
          </div>

          {/* Третья колонка */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <p className="text-gray-300">My Account</p>
            <p className="text-gray-300">Login / Register</p>
            <p className="text-gray-300">Cart</p>
            <p className="text-gray-300">Wishlist</p>
            <p className="text-gray-300">Shop</p>
          </div>

          {/* Четвертая колонка */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4">Download App</h3>
            <p className="text-gray-300">Save $3 with App New User Only</p>
            <div className="flex flex-col gap-4">
              <img 
                src={QrCode}
                alt="QR Code"
                className="w-[198px] h-[84px] object-contain"
              />
              <img 
                src={SocialIcons}
                alt="Social Media Icons"
                className="w-[168px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;