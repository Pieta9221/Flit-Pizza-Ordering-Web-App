"use client"
import Image from 'next/image'
import Link from 'next/link'



export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen mx-auto p-4 relative gap-6">
        <div className=" flex md:flex-col md:w-1/2 justify-center text-center md:text-left p-4">
            <div className='w-full'>
                
                <h1 className='text-4xl md:text-6xl font-bold tracking-wider leading-tight mb-8'>Visit us or <span className='text-[#E20202]'>Contact us</span>
                </h1>
                
                <div className='my-5'>
                <input
                type="text"
                required
                placeholder="*Name"
                className="w-[90%] py-3 px-4 rounded-3xl border border-gray-300 rounded focus:outline-none focus:border-[#E20202] mb-5"
                />
                <input
                type="email"
                required
                placeholder="*Email Address"
                className="w-[90%] py-3 px-4 rounded-3xl border border-gray-300 rounded focus:outline-none focus:border-[#E20202] mb-5"
                />
                <input
                type="tel"
                required
                placeholder="*Phone Number"
                className="w-[90%] py-3 px-4 rounded-3xl border border-gray-300 rounded focus:outline-none focus:border-[#E20202] mb-5"
                />
                
                <textarea
                rows="4"
                placeholder="*Message"
                className="w-[90%] border border-gray-300 rounded p-4 focus:outline-none focus:border-[#E20202] resize-none font-cursive"
            ></textarea>


                </div>
                
                <button type='submit' className='mx-auto md:mx-0 cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
                    
                   SEND MESSAGE
                </button>
                
               
            </div>
   
        </div>

        <div className="md:w-1/2 justify-center item-center text-center m-auto">
            
        <Image src="/greek-pizza.png" width={500} height={500} alt="Search" />
       
        </div>
    </div>

  )
}
