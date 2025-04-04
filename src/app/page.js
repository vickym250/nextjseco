
'use client'
import { useState } from "react";
import Banner from "./Component/Banner";
import Count from "./Component/Count";
import Product from "./Component/Product";
import Todaydown from "./Component/Today";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Category from "./Component/Category";

import ComingPro from "./Component/ComingPro";
import img from "./image/laptop.png"
import Newarival from "./Component/Newarival";
import Bestsale from "./Component/Bestsale";

export default function Home() {

  let [scrol, setscrol] = useState(0)
  console.log(scrol);
  
  let left = () => {
    console.log(data.length-4);
    
    if (scrol == 0) {
      return
    }
    setscrol(scrol - 1)


  }

  let right = () => {
    
    
    if(data.length-4==scrol){

      return false
    }

    setscrol(scrol + 1)
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
      <Banner />
      <Todaydown />


      <div className=" flex container mx-auto ">
        <Count />
        <div className=" hidden  md:flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-400 flex items-center justify-center" onClick={left}><FaArrowLeft /></div>
          <div className="w-[40px] h-[40px] rounded-full bg-gray-400 flex items-center justify-center" onClick={right}><FaArrowRight />
          </div>
        </div>
      </div>
      <div className=" flex  gap-13 hide-scroll-bar overflow-x-hidden  mt-10 container mx-auto">
        {data.map((item, index) => {
          return (
            
            <div key={index} style={
              {
                transform: `translateX(-${scrol * 300}px)`,
                transition: 'transform 0.5s ease-in-out',
              }
            }>
              <Product  data={item} />

            </div>
            
          )
        })}



      </div>

      <div className=" text-center">
        <button className="  hover:text-white p-2 rounded-md hover:bg-amber-800 transition bg-amber-300">View All Product</button>
      </div>
      <Category/>
      <Bestsale/>
    <ComingPro/>
    <Newarival/>
  


    </>
  );
}
