'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import SearchBar from './Search';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
   

  return (
    <>
    <div className='w-full  py-1 text-center bg-black'>
      <span className=' text-[14px] text-white' >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span> <Link href={'/'} className='text-white text-[14px] underline'>Shop Now</Link>
    </div>

<header className='w-full md:border-b-2 '>
<nav className="bg-white shadow-md p-4 top-1 sticky">
      <div className="container  mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Exclusive</div>
        
        {/* Menu for large screens */}
        <div className="hidden md:flex gap-6 text-lg">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
         
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">Singup</Link>
        </div>

        {/* Search Bar */}
    
         {/* Icons */}
     
       <div className=' md:w-[200px] w-1/2 mx-2 visible  '>

       <SearchBar/>
          </div>

          <div className='flex gap-1 md:gap-3 items-center'>
          <FaRegHeart  className='text-2xl' />
          <Link href={'/cart'}> <IoCartOutline className='text-2xl' /></Link>
          <Link href={'/account'}><FaUserCircle className='text-2xl' /></Link>
       
          <button onClick={()=>setIsOpen(!isOpen)}>
       <FiAlignJustify className='text-3xl md:hidden '/>
       </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col delay-75 items-center gap-4 py-4 border-t mt-1">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
   
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">Singup</Link>
        </div>
      )}
    </nav>
</header>

    </>
  )
}
