'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../image/banner.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
    { slug: "beauty", name: "Beauty", url: "https://dummyjson.com/products/category/beauty", icon: <ChevronRight /> },
    { slug: "fragrances", name: "Fragrances", url: "https://dummyjson.com/products/category/fragrances", icon: <ChevronRight /> },
    { slug: "furniture", name: "Furniture", url: "https://dummyjson.com/products/category/furniture", icon: <ChevronRight /> },
    { slug: "groceries", name: "Groceries", url: "https://dummyjson.com/products/category/groceries", icon: <ChevronRight /> },
    { slug: "home-decoration", name: "Home Decoration", url: "https://dummyjson.com/products/category/home-decoration", icon: <ChevronRight /> },
    { slug: "kitchen-accessories", name: "Kitchen Accessories", url: "https://dummyjson.com/products/category/kitchen-accessories", icon: <ChevronRight /> },
    { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops", icon: <ChevronRight /> },
    { slug: "mens-shirts", name: "Mens Shirts", url: "https://dummyjson.com/products/category/mens-shirts", icon: <ChevronRight /> },
    { slug: "mens-shoes", name: "Mens Shoes", url: "https://dummyjson.com/products/category/mens-shoes", icon: <ChevronRight /> },
    { slug: "mens-watches", name: "Mens Watches", url: "https://dummyjson.com/products/category/mens-watches", icon: <ChevronRight /> },
    { slug: "mobile-accessories", name: "Mobile Accessories", url: "https://dummyjson.com/products/category/mobile-accessories", icon: <ChevronRight /> },
    { slug: "motorcycle", name: "Motorcycle", url: "https://dummyjson.com/products/category/motorcycle", icon: <ChevronRight /> },
    { slug: "skin-care", name: "Skin Care", url: "https://dummyjson.com/products/category/skin-care", icon: <ChevronRight /> },
    { slug: "smartphones", name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones", icon: <ChevronRight /> },
  ];

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-3 py-3">

      {/* LEFT CATEGORY MENU */}
      <div className="hidden md:block max-w-[20%] border-r pr-3">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="flex justify-between items-center px-2 py-1 text-[17px] font-medium 
            text-blue-700 hover:text-blue-500 transition-all"
          >
            {item.name}
            {item.icon}
          </Link>
        ))}
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-full md:max-w-[80%] rounded-2xl overflow-hidden">
        <Slider {...settings}>
          <div>
            <Image src={img} alt="Slide 1" className="w-full rounded-xl" />
          </div>
          <div>
            <Image src={img} alt="Slide 2" className="w-full rounded-xl" />
          </div>
          <div>
            <Image src={img} alt="Slide 3" className="w-full rounded-xl" />
          </div>
        </Slider>
      </div>

    </div>
  );
}
