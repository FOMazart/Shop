import React from 'react';
import SideImage from '../assets/about-img/side.svg';
import MonImage from '../assets/about-img/mon.svg';
import ManImage from '../assets/about-img/man.svg';
import Services4 from '../assets/about-img/Services4.svg';
import Services5 from '../assets/about-img/Services5.svg';
import Services6 from '../assets/about-img/Services6.svg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-[625px] ml-[104px]">
          <h1 className="text-6xl font-bold mb-12">Our Story</h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mt-8">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-end mr-[-16px]">
          <img 
            src={SideImage} 
            alt="About Us" 
            className="w-[705px] h-[609px] object-contain"
          />
        </div>
      </div>

      {/* Metrics Image */}
      <div className="mt-24 flex justify-center">
        <img 
          src={MonImage}
          alt="Metrics"
          className="w-[1170px] h-[230px] object-contain mb-16"
        />
      </div>

      {/* MBA */}
      <div className="flex-1 flex justify-end mr-[-16px]">
          <img 
            src={ManImage} 
            alt="About Us" 
            className="w-[1170px] h-[564px] object-contain"
          />
    </div>

    <div className="mt-16 flex justify-center gap-16">
          <div className="flex flex-col items-center text-center">
            <img 
              src={Services4}
              alt="Delivery"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">FREE AND FAST DELIVERY</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">Free delivery for all orders over $140</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img 
              src={Services5}
              alt="Customer Service"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">24/7 CUSTOMER SERVICE</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img 
              src={Services6}
              alt="Money Back"
              className="w-20 h-20 animate-[spin_8s_linear_infinite]"
            />
            <h3 className="mt-4 font-bold text-xl">MONEY BACK GUARANTEE</h3>
            <p className="mt-2 text-gray-600 max-w-[200px]">We return money within 30 days</p>
          </div>
        </div>

  </div>
  );
};

export default About;