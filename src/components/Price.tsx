"use client"
import React, { useEffect, useState }  from "react";

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
  };
const Price =({price,id,options}:Props)=>{
    const[total,setotal]=useState(price)
    const[quantity,setquantity]=useState(1)
    const[selected,setselected]=useState(0)
    useEffect(()=>{
        setotal(
            quantity*(options?price+options[selected].additionalPrice:price)
        )
    },[quantity,selected,options,price])
    return(
        <div className='flex flex-col gap-4'>
           <h2 className='text-2xl font-bold'>{total.toFixed(2)}</h2>
           <div className='flex gap-4'>
                {options?.map((option,index)=>(
                    <button key={option.title} className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
                    style={{
                        background:selected===index?"rgb(248 113 113)":"white",
                        color:selected===index?"white":"red"
                    }}
                    onClick={()=>setselected(index)}
                    >{option.title}</button>
             
               ))}
           </div>
           <div className='flex justify-between items-center'>
            <div className='flex  justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-4 items-center'>
                        <button onClick={()=>setquantity(pre=>(pre>1?pre-1:1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={()=>setquantity(pre=>(pre<9?pre+1:1))}>{'>'}</button>
                    </div>
                    {/* cart button */}
                    <button className='uppercase w-46 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add cart</button>
            </div>
           </div>
        </div>
    )
}
export default Price