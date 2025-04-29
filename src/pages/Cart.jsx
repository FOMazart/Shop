
import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-8">
        
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
             
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>$0.00</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;