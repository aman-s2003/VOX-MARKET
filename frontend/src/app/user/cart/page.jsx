'use client'
import useCartContext from '@/context/CartContext';
import Ordercard from '@/components/Ordercard';
import React from 'react';

const Cart = () => {
  const { cartItems, removeItemFromCart, calculateTotalAmount ,addItemToCart} = useCartContext();

  

  return (
    <div>
             <h2 className="text-2xl text-center p-4 font-bold text-gray-800 mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Ordercard key={item._id} item={item} removeItem={removeItemFromCart} addItemToCart={addItemToCart } calculateTotalAmount={calculateTotalAmount} />
          ))}
         <div className="mt-4">

<div className="     w-full  lg:w-1/2">
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Order Summary
    </h3>
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">Subtotal</span>
      <span className="text-gray-800 font-semibold">RS: {calculateTotalAmount().toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">Shipping</span>
      <span className="text-gray-800 font-semibold">Rs: 100</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-600">Tax</span>
      <span className="text-gray-800 font-semibold">Rs:150</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-800 font-semibold">Total</span>
      <span className="text-gray-800 font-semibold">RS: {calculateTotalAmount().toFixed(2)}</span>
    </div>
    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Proceed to Checkout
    </button>
  </div>
</div>
</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
