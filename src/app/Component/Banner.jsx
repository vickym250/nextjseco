'use client'

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../image/banner.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// React Slick FIX: Load only on client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Banner() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const data = [
    { name: "Beauty", url: "https://dummyjson.com/products/category/beauty", icon: <ChevronRight /> },
    { name: "Fragrances", url: "https://dummyjson.com/products/category/fragrances", icon: <ChevronRight /> },
    { name: "Furniture", url: "https://dummyjson.com/products/category/furniture", icon: <ChevronRight /> },
    { name: "Groceries", url: "https://dummyjson.com/products/category/groceries", icon: <ChevronRight /> },
    { name: "Home Decoration", url: "https://dummyjson.com/products/category/home-decoration", icon: <ChevronRight /> },
    { name: "Kitchen Accessories", url: "https://dummyjson.com/products/category/kitchen-accessories", icon: <ChevronRight /> },
    { name: "Laptops", url: "https://dummyjson.com/products/category/laptops", icon: <ChevronRight /> },
    { name: "Mens Shirts", url: "https://dummyjson.com/products/category/mens-shirts", icon: <ChevronRight /> },
    { name: "Mens Shoes", url: "https://dummyjson.com/products/category/mens-shoes", icon: <ChevronRight /> },
    { name: "Mens Watches", url: "https://dummyjson.com/products/category/mens-watches", icon: <ChevronRight /> },
    { name: "Mobile Accessories", url: "https://dummyjson.com/products/category/mobile-accessories", icon: <ChevronRight /> },
    { name: "Motorcycle", url: "https://dummyjson.com/products/category/motorcycle", icon: <ChevronRight /> },
    { name: "Skin Care", url: "https://dummyjson.com/products/category/skin-care", icon: <ChevronRight /> },
    { name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones", icon: <ChevronRight /> },
  ];

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-3 py-3">

      {/* LEFT SIDE MENU */}
      <div className="hidden md:block w-[20%] border-r pr-3">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="flex justify-between items-center px-2 py-1 
            text-[17px] font-medium text-blue-700 hover:text-blue-500 transition-all"
          >
            {item.name}
            {item.icon}
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE SLIDER */}
      <div className="w-full md:w-[80%] rounded-2xl overflow-hidden min-h-[230px]">
        <Slider {...settings}>
          <div>
            <Image src={img} alt="Slide 1" priority className="w-full rounded-xl" />
          </div>
          <div>
            <Image src={img} alt="Slide 2" priority className="w-full rounded-xl" />
          </div>
          <div>
            <Image src={img} alt="Slide 3" priority className="w-full rounded-xl" />
          </div>
        </Slider>
      </div>

    </div>
  );
}
