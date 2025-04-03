"use client"

import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
export default function Category() {
    let [scrol, setscrol] = useState(0)
 console.log(scrol);
 
    let left = () => {
        if(scrol==0){
            return
        }
       
        setscrol(scrol-3)
    }
   
    let right = () => {
         if(catedata.length-6<=scrol){
            return
        }
        setscrol(scrol+3)
        console.log(scrol);
     
        
        
    }
   
    let catedata = [
        {
            category:'Mobile',
            icone:<CiMobile4 />
        },
        {
            category:'Mobile',
            icone:<CiMobile4 />
        },
        {
            category:'Mobile',
            icone:<CiMobile4 />
        },
        {
            category:'Mobile',
            icone:<CiMobile4 />
        },
        {
            category:'Mobile',
            icone:<CiMobile4 />
        },
        {
            category:'Desktop',
            icone:<CiDesktop />
        },
        {
            category:'Smart Watch',
            icone:<BsSmartwatch />
        },
        {
            category:'Camera',
            icone:<CiCamera />
        },
        {
            category:'HeadPhone',
            icone:<CiHeadphones />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
        {
            category:'HeadPhone',
            icone:<LuGamepad />
        },
    ]

    console.log(catedata.length);
    
    
  return (
    <>
<div className="container flex items-center gap-2 mt-20 mx-auto">
        <div className=" w-5 rounded-md bg-red-600 h-10 text-2xl"></div>
   <h1 className='text-red-500'>Categories</h1> 
    </div>
    <div className='container mx-auto flex justify-between '>
    <div className=" h-[30px] text-4xl ">
Browse By Category
</div>
       <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-400 flex items-center justify-center" onClick={left} ><FaArrowLeft /></div>
          <div className="w-[40px] h-[40px] rounded-full bg-gray-400 flex items-center justify-center" onClick={right} ><FaArrowRight />
          </div>
          </div>


    </div>
    <div className=' mt-10 overflow-x-scroll hide-scroll-bar   gap-4 container mx-auto flex justify-around'>

     {catedata.map((item, index) => {
        return(
     <div key={index} className=' cursor-pointer max-w-xs shrink-0 hover:bg-amber-500   w-[200px] h-[200px] rounded-2xl border-2 flex flex-col items-center justify-center '
       style={{
        transform:`translateX(-${scrol*180}px)`,
        transition: 'transform 0.5s ease-in-out'
       }}
   
     >
         <div className='text-[100px]'> {item.icone}</div>
         <h2 className='text-2xl mt-2'>Mobile</h2>
     </div>
        )
     })}
        
    <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
    </div>
    </>
  )
}
