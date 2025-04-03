'use client'

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "LCD Monitor", price: 850, quantity: 1 },
    { id: 2, name: "HF Gamepad", price: 350, quantity: 2 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Product</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Quantity</th>
              <th className="p-3 border">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border">
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">${item.price}</td>
                <td className="p-3 border">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-12 p-1 border rounded text-center"
                  />
                </td>
                <td className="p-3 border">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6">
        <button className="bg-gray-600 text-white px-4 py-2 rounded">Return To Shop</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">Update Cart</button>
      </div>
      <div className="mt-6 flex justify-between">
        <input type="text" placeholder="Coupon Code" className="border p-2 rounded w-1/3" />
        <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
      </div>
      <div className="mt-6 border p-4 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-semibold">Cart Total</h2>
        <p className="mt-2">Subtotal: ${subtotal}</p>
        <p>Shipping: Free</p>
        <p className="font-bold">Total: ${subtotal}</p>
        <button className="bg-red-500 text-white w-full mt-4 py-2 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
}
