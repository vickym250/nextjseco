'use client'

import { useState } from "react";

export default function Checkout() {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
    paymentMethod: "cash",
    coupon: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <form className="space-y-4">
          <input type="text" name="firstName" placeholder="First Name*" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="companyName" placeholder="Company Name" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="streetAddress" placeholder="Street Address*" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="apartment" placeholder="Apartment, Floor (optional)" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="city" placeholder="Town/City*" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number*" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address*" className="w-full p-2 border rounded" onChange={handleChange} />
          <div className="flex items-center">
            <input type="checkbox" name="saveInfo" className="mr-2" onChange={handleChange} />
            <label>Save this information for faster check-out next time</label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="bg-gray-100 p-4 rounded space-y-4">
          <div className="flex justify-between">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex justify-between">
            <span>Hi Gamepad</span>
            <span>$1100</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-4 space-y-2">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="bank" className="mr-2" onChange={handleChange} />
            Bank
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="cash" className="mr-2" defaultChecked onChange={handleChange} />
            Cash on Delivery
          </label>
        </div>

        {/* Coupon Code */}
        <div className="mt-4 flex">
          <input type="text" name="coupon" placeholder="Coupon Code" className="w-full p-2 border rounded-l" onChange={handleChange} />
          <button className="bg-red-500 text-white px-4 rounded-r">Apply Coupon</button>
        </div>

        {/* Place Order */}
        <button className="mt-4 w-full bg-red-500 text-white p-2 rounded">Place Order</button>
      </div>
    </div>
  );
}
