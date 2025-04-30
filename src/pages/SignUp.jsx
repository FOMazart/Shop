import React from 'react';
import { Link } from 'react-router-dom';
import signupImage from '../assets/signup-img/signup.svg';
import googleIcon from '../assets/signup-img/google.svg';

const SignUp = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Левая часть с изображением */}
        <div className="flex-shrink-0">
          <img 
            src={signupImage} 
            alt="Sign Up" 
            width={805} 
            height={781}
            className="object-contain"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[50px] px-4 border-b border-gray-300 focus:outline-none focus:border-b-red-500"
              />
            </div>

            {/* Email/Phone */}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full h-[50px] px-4 border-b border-gray-300 focus:outline-none focus:border-b-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[50px] px-4 border-b border-gray-300 focus:outline-none focus:border-b-red-500"
              />
            </div>

            {/* Sign Up Button */}
            <button 
              type="submit" 
              className="w-full h-[50px] bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Sign Up
            </button>

            {/* Google Sign Up */}
            <div className="flex justify-center">
              <img 
                src={googleIcon} 
                alt="Sign up with Google" 
                width={371} 
                height={56}
                className="cursor-pointer"
              />
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have account?{' '}
              <Link to="/login" className="text-red-600 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;