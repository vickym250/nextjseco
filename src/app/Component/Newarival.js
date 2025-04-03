import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import "./co.css";

export default function Newarival() {
  return (
    <>    <div>
      <div className="container flex items-center gap-2 mt-10 mx-auto">
        <div className=" w-5 rounded-md bg-red-600 h-10 text-2xl"></div>
   <h1 className=" text-red-500">Todaya`s</h1> 
    </div>
    </div>
  <div className=' container mt-10  justify-between mx-auto  flex flex-col md:flex-row '>
    <div className='  container1 rounded-2xl w-full md:w-[45%]  h-[500px]'></div>
    <div className=' w-full md:w-[49%] h-[500px] gap-10 flex flex-col  '>
   
    <div className='w-full rounded-xl   h-1/2 grid grid-cols-2 beauty  '>
    
    </div>
    <div className='  flex  justify-between  w-full h-1/2 '>
       <div className=' w-[250px] h-full minidj rounded-xl '></div>
        <div className=' w-[250px]  per h-full rounded-xl '></div>
    </div>
    </div>
  </div>
 
    </>
  )
}
