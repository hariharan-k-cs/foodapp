"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];
const Slider =()=>{
    const[currentslide,setcurrentslide]=useState(0);
    // useEffect(()=>{
    //     const interval = setInterval(()=>setcurrentslide(pre=>(pre===data.length-1?0:pre+1)),2000)
    //     return()=>clearInterval(interval)
    // },[])
    return(
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row lg:py-4 bg-fuchsia-50">
            <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full '>
                <h1 className='text-5xl text-center uppercase md:p-10 md:text-6xl xl:text-7xl'>
                   {data[currentslide].title}
                </h1>
                <button className='bg-red-500 text-white py-2 px-8 mt-[-30px] lg:py-4'>Order Now</button>
            </div>
            <div className='w-full h-1/2 relative  lg:h-full '>
                <Image src={data[currentslide].image} alt='' fill className='object-cover'/>
            </div>
        </div>
    )
}
export default Slider//45:30