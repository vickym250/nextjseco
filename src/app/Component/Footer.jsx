'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import qr from "../image/qrcode.jpg"

export default function Footer() {
  return (
    <footer className="bg-black mt-10 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive */}
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="mt-2 text-sm">Get 10% off your first order</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-white border-2 border-red-200 rounded-l-md"
            />
            <button className="bg-gray-700 px-4 py-2 rounded-r-md">&gt;</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="mt-2 text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-1 text-sm">exclusive@gmail.com</p>
          <p className="mt-1 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="mt-2 text-sm">Save $3 with App New User Only</p>
          <div className="mt-3">
            <Image
              src={qr}
              alt="QR Code"
              width={80}
              height={80}
              className="mb-2"
            />
            <div className="flex gap-2">
              <Image src="/google-play.png" alt="Google Play" width={120} height={40} />
              <Image src="/app-store.png" alt="App Store" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
      </div>
      
      {/* Copyright */}
      <p className="mt-6 text-center text-sm">&copy; Copyright Rimel 2022. All rights reserved</p>
    </footer>
  );
}
