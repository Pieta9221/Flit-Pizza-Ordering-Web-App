"use client"
import Image from 'next/image';
import { useState } from 'react'

export default function page() {
   
  return (
    <div className="flex flex-col md:flex-row items-start mx-auto p-4 my-20 gap-4">
      <div className="md:w-2/3 w-full mb-4 md:mb-0">
        <div className="overflow-auto px-5">
          <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
          
          <thead>
              <tr>
                <th className="border-b text-left p-3">Order ID</th>
                <th className="border-b text-left p-3">Customer</th>
                <th className="border-b text-left p-3">Address</th>
                <th className="border-b text-left p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex-col justify-start items-start'>
                <td className="border-b p-3 whitespace-nowrap align-top">6553e94e699e1964952785a2</td>
                <td className="border-b p-3 whitespace-nowrap align-top">0816268391</td>
                <td className="border-b p-3 whitespace-nowrap align-top">10 John Street</td>
                <td className="border-b p-3 whitespace-nowrap align-top">$160</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 mt-10 w-full">
          <div className="flex flex-col items-center">
          <Image src="/paid.png" width={30} height={30} alt="status" />
            <p>Payment</p>
            <div>
              <Image
                src="/checked.png"
                width={24}
                height={24}
                alt="status"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center preparing">
          <Image src="/bake.png" width={30} height={30} alt="status" />
            <p>Preparing</p>
            <div className='hidden'>
              <Image
                src="/checked.png"
                width={24}
                height={24}
                alt="status"
              />
            </div>
          </div>
          <div className="flex flex-col items-center opacity-30">
          <Image src="/bike.png" width={30} height={30} alt="status" />
            <p>On the way</p>
            <div className='hidden'>
              <Image
                src="/checked.png"
                width={24}
                height={24}
                alt="status"
              />
            </div>
          </div>
          <div className="flex flex-col items-center opacity-30">
          <Image src="/delivered.png" width={30} height={30} alt="status" />
            <p>Delivered</p>
            <div className='hidden'>
              <Image
                src="/checked.png"
                width={24}
                height={24}
                alt="status"
              />
            </div>
          </div>

        </div>
      </div>
      <div className="flex md:flex-col md:w-1/3 items-start md:text-left w-full">
        <div className='w-full md:w-[90%] bg-[#333333] text-white px-10 py-8'>
          <h1 className='text-xl font-bold tracking-wider mb-5'>CART TOTAL</h1>
          <p className='font-bold'>Subtotal:<span className='font-medium ml-5'>$160</span></p>
          <p className='font-bold'>Discount:<span className='font-medium ml-5'>$00.00</span></p>
          <p className='font-bold mb-20'>Total:<span className='font-medium ml-5'>$160</span></p>

        
            <div className='flex-col w-full'>
            <button  className='cursor-pointer bg-[#FBB200] w-full py-2 text-lg rounded-full flex font-semibold text-white tracking-wider align-middle justify-center'>
           PAID
          </button>
              
           </div>
          
          
        </div>
      </div>
     
    </div>
  );
}
