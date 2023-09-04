import Image from "next/image";
import React from "react";

const Cart =()=>{
    return(
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
            {/* product */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w:2/3 2xl:w-1/2 lg:px-20 xl:px-40" >
                {/* single items */}
                <div className=" flex items-center justify-between mt-16 mb-4 ">
                    <Image src="/temporary/p1.png" alt="" height={100} width={100}/>
                    <div className="">
                        <h1 className="uppercase text-xl font-bold">Slicilians</h1>
                        <span>Larg</span>
                    </div>
                    <h1 className=" font-bold">$79.88</h1>
                    <span className=" cursor-pointer ">X</span>
                </div>
                <div className=" flex items-center justify-between mb-4 ">
                    <Image src="/temporary/p1.png" alt="" height={100} width={100}/>
                    <div className="">
                        <h1 className="uppercase text-xl font-bold">Slicilians</h1>
                        <span>Larg</span>
                    </div>
                    <h1 className=" font-bold">$79.88</h1>
                    <span className=" cursor-pointer ">X</span>
                </div>
                <div className=" flex items-center justify-between mb-4 ">
                    <Image src="/temporary/p1.png" alt="" height={100} width={100}/>
                    <div className="">
                        <h1 className="uppercase text-xl font-bold">Slicilians</h1>
                        <span>Larg</span>
                    </div>
                    <h1 className=" font-bold">$79.88</h1>
                    <span className=" cursor-pointer ">X</span>
                </div>
            </div>
            {/* payment container */}
            <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w:1/3 2xl:w-1/2 lg:px-20 xl:px-40">
            <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
                <hr />
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">Check Out</button>
            </div>
        </div>
    )
}
export default Cart