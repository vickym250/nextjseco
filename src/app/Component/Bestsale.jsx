import React, { useState } from 'react'
import img from "../image/laptop.png"

import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import Image from 'next/image';
export default function Bestsale() {
     
    let [show, setshow]=useState(false)
       

    let toggle = () => {
        setshow(!show)
    }

  


      let data = [
        {
          title: "IPS LCD Gaming Monitor",
          price: 100,
          img: img
        },
        {
          title: "IPS LCD Gaming Monitor",
          price: 100,
          img: img,
        },
        {
          title: "IPS LCD Gaming Monitor",
          price: 100,
          img: img,
        },
        {
          title: "IPS LCD Gaming Monitor",
          price: 100,
          img: img,
        },
        {
          title: "IPS LCD Gaming Monitor",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
        {
          title: "hello",
          price: 100,
          img: img,
        },
      ]
  return (
    <>

  
    <div className="container flex items-center gap-2 mt-10 mx-auto">
    <div className=" w-5 rounded-md bg-red-600 h-10 text-2xl"></div>
<h1 className=" text-red-500">This Month</h1> 
</div>
   
   <div className='container mx-auto flex  justify-between  items-center'>
    <h1 className='text-2xl '>Best Selling Products</h1>
    <button onClick={toggle} className='text-2xl py-2 px-3 bg-amber-400  rounded-md'  >{show?"Close All " : "View All"}</button>
   </div>
  <div className={ ` grid  justify-center  md:grid-cols-4 grid-rows-1 container mx-auto mt-5 `}>
   {
    data.slice(0,show ? data.length : 4 ).map((v,i)=>{

        return(
            <div key={i} className=' w-full md:w-[255px]  h-[350px] rounded-lg '>
                <div className=' w-[255px] h-250px] bg-gray-300 rounded-tl-md main relative  rounded-tr-md'>
             
                    <div className='flex justify-between  '> 
                        <button className='px-4 py-1 h-9 m-2 bg-red-500 rounded-md text-white'>-40%</button>
                        <div className=' mt-[10px] mr-2 '>
                            <div className='w-[30px] mt-[10px]  h-[30px] rounded-full bg-amber-50 flex items-center justify-center'><CiHeart /></div>
                            <div className='w-[30px] mt-[10px]  h-[30px] rounded-full bg-amber-50 flex items-center justify-center'><FaRegEye /></div>
                        </div>
                    </div>
                      <Image src={v.img} alt='Product' className='w-[200px] h-[170px] -mt-10 mx-auto'/>
                    <button className='w-full  h-[30px] absolute bottom-0 bg-black text-white cart '>Add To Cart</button>
                </div>
                <div className='text-lg px-2 font-bold'></div>
                <div className='flex items-center '>
                    <div className='text-lg text-red-600 px-2'></div>
                    <del className='text-gray-400'>$400</del>

                </div>
                <div className=' mx-2 flex gap'>
                    <img src='vector (2).png'></img>
                    <img src='vector (2).png'></img>
                    <img src='vector (2).png'></img>
                    <img src='vector (3).png'></img>
                    <div className='ms-2 text-gray-500 text-[14px]'>(99)</div>
                </div>
               
            </div>

        )

    })
   }

  </div>




  </>
  )
}
