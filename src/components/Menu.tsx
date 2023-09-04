"use client"
import Link from "next/link";
import React, { useState } from "react";
import Carticon from '@/components/Carticon'
const Menu =()=>{
    const user = false
    const [open,setopen]=useState(false)
    const link =[
        {id:1,title:"Homepage",url:"/"},
        {id:2,title:"Menu",url:"/menu"},
        {id:3,title:"Working Hours",url:"/"},
        {id:4,title:"Contact",url:"/"}

    ]
    return(
        <div>
        <div>
           {!open? (<img src="/open.png" alt="" width={20} height={20} onClick={()=>setopen(true)}  />
           ):(<img src="/close.png" alt="" width={20} height={20} onClick={()=>setopen(false)} />)}
        </div>
{open && (

<div className='bg-red-500 text-white absolute left-0 top-24 w-full  h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
{
    link.map(link=>(
        <Link href={link.url} key={link.id} onClick={()=>setopen(false)} >{link.title}</Link>
    ))
}
{!user?(<Link href='/login' onClick={()=>setopen(false)}>Login</Link>):
(<Link href='/order' onClick={()=>setopen(false)}>order</Link>)}
<Link href='/cart' onClick={()=>setopen(false)}>
    <Carticon/>
</Link>
</div>)}
        </div>
    )
}
export default Menu