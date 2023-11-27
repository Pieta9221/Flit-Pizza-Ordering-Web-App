"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'


export default function Hero() {
  return (
    <div class="flex flex-col md:flex-row md:h-screen mx-auto p-4 relative">
        <div class=" flex md:flex-col md:w-1/2 justify-center text-center md:text-left p-4">
            <div className='w-full md:w-[90%]'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-wider leading-[1.3] mb-4'>Handmade, With an Extra Pinch of <span className='text-[#e20202]'>Love</span>
                </h1>
                <p className='text-2xl md:text-3xl tracking-wider text-[#555555] leading-[1.5] mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link href="/product">
                <button className='mx-auto md:mx-0 cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
                    <FaShoppingCart size={24} className='text-white mr-3' />
                    ORDER NOW
                </button>
                </Link>
               
            </div>
   
        </div>

        <div class="md:w-1/2 justify-center text-center m-auto">
            
        <Image src="/hero-img.png" alt="Search" width={400} height={300} className='lg:ml-20'/>
       
        <Image src="/yellow.png" alt="Search" width={600} height={300} className='hidden lg:block absolute top-0 right-0 z-[-10]'/>
        <Image src="/onion.png" alt="Search" width={100} height={100} className='hidden lg:block absolute bottom-100 left-50 z-[-10]'/>
        <Image src="/hero-img-bottom.png" alt="Search" width={200} height={200} className='hidden lg:block absolute bottom-70 right-80 z-[-10]'/>
            

 
        </div>
    </div>

  )
}
