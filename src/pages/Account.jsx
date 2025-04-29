import React from 'react';

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Боковое меню */}
        <div className="w-full md:w-64 space-y-6">
          {/* Первая категория */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Manage My Account</h3>
            <ul className="space-y-2 pl-4 text-gray-600">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          {/* Вторая категория */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">My Orders</h3>
            <ul className="space-y-2 pl-4 text-gray-600">
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>

          {/* Третья категория */}
          <div>
            <h3 className="font-bold text-lg">My WishList</h3>
          </div>
        </div>

        {/* Форма редактирования */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-red-600">Edit Your Profile</h2>
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg">
            {/* Имя и фамилия */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Email и адрес */}
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <input 
                type="text" 
                placeholder="Address" 
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Пароли */}
            <div className="space-y-4">
              <input 
                type="password" 
                placeholder="Current Password" 
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <input 
                type="password" 
                placeholder="New Password" 
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Кнопки */}
            <div className="flex justify-end space-x-4 pt-4">
              <button type="button" className="px-6 py-3">
                Cancel
              </button>
              <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;