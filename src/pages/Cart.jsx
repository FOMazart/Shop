import React from 'react';
import { Link } from 'react-router-dom';
import monitorImage from '../assets/cart-img/monik.svg';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: monitorImage,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      subtotal: 650
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Заголовок */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Cart</h1>
      </div>

      {/* Основной контент */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Таблица товаров */}
        <div className="flex-grow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-4 text-left">Product</th>
                <th className="pb-4 text-left">Price</th>
                <th className="pb-4 text-left">Quantity</th>
                <th className="pb-4 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-red-500">✕</button>
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <div className="flex items-center border rounded-md w-32">
                      <button className="px-3 py-1 hover:bg-gray-100">-</button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button className="px-3 py-1 hover:bg-gray-100">+</button>
                    </div>
                  </td>
                  <td className="py-4">${item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-6">
            <Link to="/" className="px-6 py-2 border rounded hover:bg-gray-50">
              Return To Shop
            </Link>
            <button className="px-6 py-2 border rounded hover:bg-gray-50">
              Update Cart
            </button>
          </div>
        </div>

        {/* Сайдбар с итогами */}
        <div className="w-full lg:w-[400px] bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span>Subtotal:</span>
              <span>$650</span>
            </div>
            
            <div className="flex justify-between border-b pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>$650</span>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition-colors mt-4">
              Proceed to Checkout
            </button>

            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-grow px-4 py-2 border rounded"
                />
                <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;