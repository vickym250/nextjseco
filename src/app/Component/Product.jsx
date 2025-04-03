import Image from 'next/image';
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import img from "../image/star.png"
export default function Product({data}) {



    
    return (
        <>

       

        
             <div className=' w-full md:w-[255px] shrink-0 h-[350px] rounded-lg '>
                <div className=' w-[255px] relative h-250px] bg-gray-300 rounded-tl-md main  rounded-tr-md'>
             
                    <div className='flex justify-between  '> 
                        <button className='px-4 py-1 h-9 m-2 bg-red-500 rounded-md text-white'>-40%</button>
                        <div className=' mt-[10px] mr-2 '>
                            <div className='w-[30px] mt-[10px]  h-[30px] rounded-full bg-amber-50 flex items-center justify-center'><CiHeart /></div>
                            <div className='w-[30px] mt-[10px]  h-[30px] rounded-full bg-amber-50 flex items-center justify-center'><FaRegEye /></div>
                        </div>
                    </div>
                    <Image src={data.img} alt='Product' className='w-[200px] h-[170px] -mt-10 mx-auto'/>
                    <button className='w-full absolute bottom-0 h-[30px] bg-black text-white cart '>Add To Cart</button>
                </div>
                <div className='text-lg px-2 font-bold'>{data.title}</div>
                <div className='flex items-center '>
                    <div className='text-lg text-red-600 px-2'>${data.price}</div>
                    <del className='text-gray-400'>$400</del>

                </div>
                <div className=' mx-2 flex gap'>
                 <Image src={img}/>
                 <Image src={img}/>
                 <Image src={img}/>
                    <div className='ms-2 text-gray-500 text-[14px]'>(99)</div>
                </div>
               
            </div>

      
        </>
    )
}
