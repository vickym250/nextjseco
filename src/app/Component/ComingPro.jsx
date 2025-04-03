import React, { useEffect, useState } from 'react'
import "./co.css";
import Image from 'next/image';
import img from '../image/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'

export default function ComingPro() {
  let [day,setday]=useState(0)
  let [hours,sethours]=useState(0)
  let [min,setmin]=useState(0)
  let [sec,setsec]=useState(0)
let counta = ()=>{
        let enddate = "18 march 2025 8:37 PM"
        let end = new Date(enddate)
       let today = new Date()
       let seconds = Math.floor((end - today) / 1000);
       if(seconds<0){
           clearInterval(counta)
           return
       }
       let day = Math.floor(seconds/3600/24)
       let hourse = Math.floor((seconds/3600) %24)
       let minutes = Math.floor((seconds/60) % 60)
       let secondsdat = Math.floor(seconds % 60)
       
       setday(day)
       sethours(hourse)
       setmin(minutes)
       setsec(secondsdat)

       
       
  
       
       
       

       
        
    }
useEffect(()=>{
   
    let interval = setInterval(()=>{
        counta()
    },1000)
    return ()=>{
        clearInterval(interval)
    }

},[])




  return (
    <div className='background1 flex container ] mx-auto'>
       <div className='w-1/2 p-10 '>
        <h1 className='text-[14px] text-green-400'>Categories</h1>
        <p className=' text-xl md:text-5xl mt-2 text-white'>Enhance Your Music Experience </p>
       <div className='flex gap-3 mt-10'>
      <div className='bg-white p-8 md:p-2 flex justify-center items-center  w-[50px] md:w-[70px] h-[50px] md:h-[70px] flex-col  rounded-full '>
       <span className='text-[17px]   font-bold '>{day}</span>
       <span className='-mt-2 md:text-[14px]'>Day</span>
      </div>
      <div className='bg-white p-8 md:p-2 flex justify-center items-center    w-[50px] md:w-[70px] h-[50px] md:h-[70px] flex-col  rounded-full '>
       <span className='text-[17px]   font-bold '>{hours}</span>
       <span className='-mt-2 md:text-[14px]'>Hourse</span>
      </div>
      <div className='bg-white p-8 md:p-2 flex justify-center items-center  w-[50px] md:w-[70px] h-[50px] md:h-[70px] flex-col  rounded-full '>
       <span className='text-[17px]   font-bold '>{min}</span>
       <span className='-mt-2 md:text-[14px]'>Minuts</span>
      </div>
      <div className='bg-white p-8 md:p-2 flex justify-center items-center  w-[50px] md:w-[70px] h-[50px] md:h-[70px] flex-col  rounded-full '>
       <span className='text-[17px]   font-bold '>{sec}</span>
       <span className='-mt-2 md:text-[14px]'>Second</span>
      </div>


       </div>

        <div className='  mt-10 '>
          <button className='rounded-md text-white text-xl bg-red-400 hover:bg-red-600 text-center px-2 py-2 w-[150px]'> Discover Now</button>
        </div>
       </div>
       <div className='w-1/2 '>
        <Image src={img} className='mt-10'/>
       </div>
    </div>
  )
}
