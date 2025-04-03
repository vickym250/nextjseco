'use client';

import Image from "next/image";
import about from '../image/about.png'
import { House } from "lucide-react";
import men from '../image/men.png'
export default function OurStory() {
  return (
    <>    <div className="container items-center flex mx-auto p-6">
      {/* Header Section */}
      <div className=" w-1/2 mb-10">
        <h2 className="text-3xl -mt-20 font-bold">Our Story</h2>
        <p className="text-gray-600 mt-4">
        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
        </p>
        <p className="mt-10">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      
      {/* Image Section */}
      <div className=" w-1/2 flex justify-center mb-10">
        <Image
          src={about}
          width={600}
          height={400}
          alt="Shopping Image"
          className="rounded-lg"
        />
      </div>
    </div>

      {/* Statistics Section */}
      <div className=" container mx-auto grid grid-cols-4 gap-4 text-center mb-10">
        {[
          { label: "Total Customers", value: "10.5k" },
          { label: "Happy Customers", value: "33k", highlight: true },
          { label: "Customer Service Calls", value: "45.5k" },
          { label: "Average Order Per Sale", value: "25k" }
        ].map((stat, index) => (
          <div key={index} className={`p-4 border  rounded-lg ${stat.highlight ? 'bg-red-500 text-white' : 'bg-gray-100'}`}>
          <House size={36} strokeWidth={1.75} className=" mx-auto" />
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      
      {/* Team Section */}
      <div className=" container  mx-auto  grid grid-cols-3 gap-6 text-center mb-10">
        {[
          { name: "Tom Cruise", role: "Founder & CEO", img: "/tom-cruise.jpg" },
          { name: "Emma Watson", role: "Managing Director", img: "/emma-watson.jpg" },
          { name: "Will Smith", role: "Product Manager", img: "/will-smith.jpg" }
        ].map((person, index) => (
          <div key={index} className="  rounded-lg">
         <div className="w-[200px] relative mx-auto bg-gray-400">
            <Image src={men} width={100} height={100} alt={person.name} className="rounded-full mx-auto -p-10 " />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-500 text-sm">{person.role}</p>
          </div>
        ))}
      </div>
      
      {/* Features Section */}
      <div className="flex justify-between text-center">
        {[
          { label: "Free and Fast Delivery", icon: "🚚" },
          { label: "24/7 Customer Service", icon: "📞" },
          { label: "Money Back Guarantee", icon: "💰" }
        ].map((feature, index) => (
          <div key={index} className="p-4 border rounded-lg w-1/3">
            <p className="text-3xl">{feature.icon}</p>
            <p className="mt-2 text-sm text-gray-700">{feature.label}</p>
          </div>
        ))}
      </div>
      </>

  );
}
