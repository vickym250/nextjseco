"use client"

import { useEffect, useState } from "react"

export default function Count() {
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
    <>
   

<div className="flex container  gap-3 items-center mx-auto ">
<div className=" h-[30px] text-2x md:text-4xl ">
Flash Sales
</div>
    <div className='  text-1 xl justify-around items-end gap-2 flex'>
    <div className='  rounded-md flex flex-col '>
    <span className="text-[14px]">Day</span>
    <span className="text-3xl font-bold">{day}</span> </div>
    <div className="text-4xl">:</div>
    <div className='  rounded-md flex flex-col '>
    <span className="text-[14px]">Hours</span>
    <span className="text-3xl font-bold">{hours}</span> </div>
    <div className="text-4xl">:</div>
        <div className='  rounded-md flex flex-col  '>
        <span className="text-[14px]">Minuts</span>
       <span className="text-3xl font-bold">{min}</span> 
        </div>
        <div className="text-4xl">:</div>
    <div className='  rounded-md flex flex-col  '>
    <span className="text-[14px]">Second</span>
    <span className="text-3xl font-bold">{sec}</span> 
    </div>
   
    </div>
    </div>
  


   


    </>
  )
}
