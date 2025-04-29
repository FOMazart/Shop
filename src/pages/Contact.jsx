import React from 'react';
import contactImage from '../assets/contact-img/cont.svg';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Изображение */}
          <div className="flex items-center justify-center">
            <img 
              src={contactImage} 
              alt="Contact us" 
              width={340} 
              height={457}
              className="object-contain"
            />
          </div>

          {/* Форма обратной связи */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <form className="space-y-6">
              {/* Группа из трех полей в ряд */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full max-w-[235px] h-[50px] px-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Your Name " 
                    />
                    <span className="absolute text-red-500" style={{ top: '15px', right: '40px' }}>*</span>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input 
                      type="email" 
                      className="w-full max-w-[235px] h-[50px] px-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Email "
                    />
                    <span className="absolute text-red-500" style={{ top: '15px', right: '40px' }}>*</span>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      className="w-full max-w-[235px] h-[50px] px-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Phone "
                    />
                    <span className="absolute text-red-500" style={{ top: '15px', right: '40px' }}>*</span>
                  </div>
                </div>
              </div>

              {/* Поле сообщения */}
              <div>
                <textarea 
                  className="w-full max-w-[737px] h-[207px] px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <div className="pl-4">
                <button 
                  type="submit" 
                  className="w-[215px] h-[56px] bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;