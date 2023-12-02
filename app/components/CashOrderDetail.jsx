import Link from 'next/link'
import {  AiOutlineClose } from 'react-icons/ai'

export default function CashOrderDetail() {
  return (
    <div className="w-screen h-screen bg-opacity-50 bg-gray-200 fixed top-0 z-50 flex items-center justify-center text-[#222222]">
        <div className="w-500 bg-white p-10 md:p-10 lg:p-50 rounded-2xl flex flex-col justify-between relative">
        <p className='text-3xl font-medium tracking-wide  leading-[1.5] my-6'>You will pay $12 on delivery</p>

        <div class="flex flex-col w-full mb-15 text-sm mb-5">
            <label className='mb-3 '>Name Surname</label>
            <input
            placeholder="John Doe"
            type="text"
            className="border border-solid border-black rounded-sm outline-none p-2"
          />
        </div>
        <div class="flex flex-col w-full mb-15 text-sm mb-5">
            <label className='mb-3 '>Phone Number</label>
            <input
            placeholder="+234 703 46 36"
            type="number"
            className="border border-solid border-black rounded-sm outline-none p-2"
          />
        </div>
        <div class="flex flex-col w-full mb-15 text-sm mb-5">
            <label className='mb-3 '>Address</label>
           <textarea
             rows={5}
             placeholder="10, John Street"
             type="text"
            className="border border-solid border-black rounded-sm outline-none p-2"
          />
        </div>

       <Link href="/order">
       <button className="flex bg-[#FBB200] text-black mx-auto justify-center py-2 px-4 border border-black text-base rounded-lg cursor-pointer" >
          Order
        </button>
       </Link>

       
            <div className="p-2 bg-gray-600 text-white rounded-full flex items-center justify-center my-3 cursor-pointer absolute top-0 right-[5%]">
            <AiOutlineClose size={20} />
            </div>
 
        </div>

      </div>

  )
}
