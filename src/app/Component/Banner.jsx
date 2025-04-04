'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import img from "../image/banner.png"
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
let data = [
  {
    "slug": "beauty",
    "name": "Beauty",
    "url": "https://dummyjson.com/products/category/beauty",
    "image": <ChevronRight />
  },
  {
    "slug": "fragrances",
    "name": "Fragrances",
    "url": "https://dummyjson.com/products/category/fragrances",
    "image": <ChevronRight />
  },
  {
    "slug": "furniture",
    "name": "Furniture",
    "url": "https://dummyjson.com/products/category/furniture"
  },
  {
    "slug": "groceries",
    "name": "Groceries",
    "url": "https://dummyjson.com/products/category/groceries"
  },
  {
    "slug": "home-decoration",
    "name": "Home Decoration",
    "url": "https://dummyjson.com/products/category/home-decoration"
  },
  {
    "slug": "kitchen-accessories",
    "name": "Kitchen Accessories",
    "url": "https://dummyjson.com/products/category/kitchen-accessories"
  },
  {
    "slug": "laptops",
    "name": "Laptops",
    "url": "https://dummyjson.com/products/category/laptops"
  },
  {
    "slug": "mens-shirts",
    "name": "Mens Shirts",
    "url": "https://dummyjson.com/products/category/mens-shirts"
  },
  {
    "slug": "mens-shoes",
    "name": "Mens Shoes",
    "url": "https://dummyjson.com/products/category/mens-shoes"
  },
  {
    "slug": "mens-watches",
    "name": "Mens Watches",
    "url": "https://dummyjson.com/products/category/mens-watches"
  },
  {
    "slug": "mobile-accessories",
    "name": "Mobile Accessories",
    "url": "https://dummyjson.com/products/category/mobile-accessories"
  },
  {
    "slug": "motorcycle",
    "name": "Motorcycle",
    "url": "https://dummyjson.com/products/category/motorcycle"
  },
  {
    "slug": "skin-care",
    "name": "Skin Care",
    "url": "https://dummyjson.com/products/category/skin-care"
  },
  {
    "slug": "smartphones",
    "name": "Smartphones",
    "url": "https://dummyjson.com/products/category/smartphones"
  },
  {
    "slug": "sports-accessories",
    "name": "Sports Accessories",
    "url": "https://dummyjson.com/products/category/sports-accessories"
  },
  {
    "slug": "sunglasses",
    "name": "Sunglasses",
    "url": "https://dummyjson.com/products/category/sunglasses"
  },
  {
    "slug": "tablets",
    "name": "Tablets",
    "url": "https://dummyjson.com/products/category/tablets"
  },
  {
    "slug": "tops",
    "name": "Tops",
    "url": "https://dummyjson.com/products/category/tops"
  },
  {
    "slug": "vehicle",
    "name": "Vehicle",
    "url": "https://dummyjson.com/products/category/vehicle"
  },
  {
    "slug": "womens-bags",
    "name": "Womens Bags",
    "url": "https://dummyjson.com/products/category/womens-bags"
  },
  {
    "slug": "womens-dresses",
    "name": "Womens Dresses",
    "url": "https://dummyjson.com/products/category/womens-dresses"
  },
  {
    "slug": "womens-jewellery",
    "name": "Womens Jewellery",
    "url": "https://dummyjson.com/products/category/womens-jewellery"
  },
  {
    "slug": "womens-shoes",
    "name": "Womens Shoes",
    "url": "https://dummyjson.com/products/category/womens-shoes"
  },
  {
    "slug": "womens-watches",
    "name": "Womens Watches",
    "url": "https://dummyjson.com/products/category/womens-watches"
  }
]

        
   
  return (
    <div className=' container flex-col md:flex-row gap-2 mx-auto flex justify-center'>
     <div className=' hidden md:block max-w-[20%] py-2 border-r-1'>
        {data.slice(0,14).map((item,index)=>{
            return (
              <div key={index} className=' flex justify-between  px-2 py-0.3 text-lg'>
                <h1> {item.name}</h1>
               {item.image}
              </div>
            )
          })
        }

        
        
     </div>
     <div className='max-w-full  md:max-w-[79%]  rounded-2xl p-1 '>
     <Slider {...settings}>
        <div className="w-full h-full">
          <Image src={img} alt="Slide 1" className=" w-full rounded-lg " />
        </div>
        <div className="w-full h-full">
          <Image src={img} alt="Slide 2" className=" w-full rounded-lg" />
        </div>
        <div className="w-full h-full">
          <Image src={img} alt="Slide 3" className=" w-full rounded-lg" />
        </div>
      </Slider>
    </div>
     
      
    </div>
  )
}

