
'use client'
import Image from "next/image";
import game from "../image/game.png"
import game1 from "../image/game1.png"
import { useState } from "react";
import { Heart, Truck, RefreshCcw } from "lucide-react";

const ProductPage = () => {
    const [quantity, setQuantity] = useState(2);

     let [color,setcolor]=useState("black")

    return (
      <div className=" container mx-auto p-6 space-y-6">
        {/* Product Section */}
        <div className="grid md:grid-cols-2 items-start gap-6">
          {/* Image */}

         
        <div className="flex gap-2 items-center">
        <div className=" w-[20%] ">
            <div className=" flex items-center  mt-5 p-4 w-full h-[80px] rounded-xl bg-gray-400">
                <Image src={game1} className=" w-full  " />
            </div>
            <div className=" flex items-center  mt-5 p-4 w-full h-[80px] rounded-xl bg-gray-400">
                <Image src={game1} className=" w-full  " />
            </div>
            <div className=" flex items-center  mt-5 p-4 w-full h-[80px] rounded-xl bg-gray-400">
                <Image src={game1} className=" w-full  " />
            </div>
            <div className=" flex items-center  mt-5 p-4 w-full h-[80px] rounded-xl bg-gray-400">
                <Image src={game1} className=" w-full  " />
            </div>
            
            </div>
          <div className="">
        </div><div className="w-[80%] bg-gray-400 rounded-lg p-10">
          <Image src={game} className="w-full rounded-xl" />
          </div>
          </div>
          {/* Product Info */}
          <div className="p-4 w-full max-w-sm  rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Havic HV G-92 Gamepad</h2>
      <div className="flex items-center space-x-2 text-yellow-500 text-sm">
        ⭐⭐⭐⭐☆ <span className="text-gray-500">(150 Reviews)</span> <span className="text-green-500">| In Stock</span>
      </div>
      <p className="text-lg font-semibold mt-2">$192.00</p>
      <p className="text-sm text-gray-600 mt-1">
        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
        for easy bubble-free install & mess-free removal Pressure sensitive.
      </p>
      
      <div className="flex gap-2 items-center">
  color :
  <div className={` ${color ==="black" ? " border-1 " : "" }  flex items-center justify-center p-0.5 rounded-full`}>
   <button className={`w-[20px] h-[20px] bg-black  rounded-full    `} onClick={()=>{
    setcolor("black")
   }}
 ></button>
 </div>
  <div className={` ${color ==="red" ? " border-1 " : "" }  flex items-center justify-center p-0.5 rounded-full`}>
   <button className={`w-[20px] h-[20px] bg-red-600  rounded-full    `} onClick={()=>{
    setcolor("red")
   }}
 ></button>
 </div>
  <div className={` ${color ==="green" ? " border-1 " : "" }  flex items-center justify-center p-0.5 rounded-full`}>
   <button className={`w-[20px] h-[20px] bg-green-600  rounded-full    `} onClick={()=>{
    setcolor("green")
   }}
 ></button>
 </div>
  <div className={` ${color ==="yellow" ? " border-1 " : "" }  flex items-center justify-center p-0.5 rounded-full`}>
   <button className={`w-[20px] h-[20px] bg-yellow-400  rounded-full    `} onClick={()=>{
    setcolor("yellow")
   }}
 ></button>
 </div>
  



</div>

      
      <div className="mt-3">
        <p className="font-medium">Size:</p>
        <div className="flex space-x-2 mt-1">
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <button key={size} className={`px-3 py-1 border rounded-md ${size === 'M' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>{size}</button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 mb-4">
        <div className="flex items-center space-x-2 border rounded-md px-3 py-1">
          <button
            className="text-xl"
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            className="text-xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded-md font-medium border-2 border-transparent focus:border-blue-500">
          Buy Now
        </button>
        <button className="p-2 border rounded-full">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="border rounded-md p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <Truck className="w-5 h-5" />
          <div>
            <p className="font-medium">Free Delivery</p>
            <p className="text-sm text-gray-500 underline cursor-pointer">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 border-t pt-3">
          <RefreshCcw className="w-5 h-5" />
          <div>
            <p className="font-medium">Return Delivery</p>
            <p className="text-sm text-gray-500">
              Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
          
        </div>
        
        {/* Related Items */}
        <div>
          <h2 className="text-xl font-bold mb-4">Related Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="border rounded-lg p-4 text-center">
                <img src={`/related-${item}.jpg`} alt="Related Product" className="w-full h-24 object-cover rounded-md" />
                <p className="mt-2">Product {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductPage;
















  
