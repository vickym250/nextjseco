'use client'

import { useState } from "react";

export default function ProfileEdit() {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Account</h1>
        <p className="text-red-500">Welcome! Md Rimel</p>
      </header>

      <div className="flex flex-1">
        <aside className="w-1/4 bg-white p-6 shadow-md">
          <nav>
            <h2 className="font-bold text-lg mb-4">Manage My Account</h2>
            <ul className="space-y-2">
              <li className="text-red-500 font-medium">My Profile</li>
              <li className="text-gray-600">Address Book</li>
              <li className="text-gray-600">My Payment Options</li>
            </ul>
            <h2 className="font-bold text-lg mt-6 mb-4">My Orders</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">My Returns</li>
              <li className="text-gray-600">My Cancellations</li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 mx-auto">
            <h2 className="text-xl font-semibold text-red-500 mb-4">Edit Your Profile</h2>
            <div className="space-y-4">
              <input type="text" name="firstName" value={formData.firstName} readOnly className="w-full p-2 border rounded" />
              <input type="text" name="lastName" value={formData.lastName} readOnly className="w-full p-2 border rounded" />
              <input type="email" name="email" value={formData.email} readOnly className="w-full p-2 border rounded" />
              <input type="text" name="address" value={formData.address} readOnly className="w-full p-2 border rounded" />
              <h3 className="text-lg font-medium">Password Changes</h3>
              <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="password" name="confirmPassword" placeholder="Confirm New Password" onChange={handleChange} className="w-full p-2 border rounded" />
              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Save Changes</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
