import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login-img/login.svg';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Левая часть с изображением */}
        <div className="flex-shrink-0">
          <img 
            src={loginImage} 
            alt="Login" 
            width={805} 
            height={781}
            className="object-contain"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full h-[50px] px-4 border-b border-gray-300 focus:outline-none focus:border-b-red-500"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[50px] px-4 border-b border-gray-300 focus:outline-none focus:border-b-red-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <button 
                type="submit" 
                className="w-[150px] h-[50px] bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Log in
              </button>
              <Link to="/forgot-password" className="text-red-600 hover:underline">
                Forgot Password?
              </Link>
            </div>


            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-red-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;