"use client"
import Image from 'next/image'
import Link from 'next/link'



export default function Page() {
  return (
    <main className='p-4 mx-auto'>
        <div className="flex flex-col md:flex-row mx-auto p-4 relative gap-6">
        <div className=" flex md:flex-col md:w-1/2 justify-center text-center md:text-left px-4 py-10">
            <div className='w-full'>
                
                <h1 className='text-4xl md:text-3xl font-bold tracking-wider leading-tight mb-4'>Exploring Unique Pizza Toppings That Will Tantalize Your Taste Buds</h1>
                <p className="text-lg tracking-wider text-[#888888] leading-[1.7] mb-4">10th Jan, 2024</p>
                <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mb-4">Dive into the world of unconventional pizza toppings as we explore a kaleidoscope of flavors that go beyond the classic Margherita. Join us on a flavor-packed journey that promises to redefine your pizza experience and elevate your taste buds to new heights...</p>
                             
                <button className='mx-auto md:mx-0 cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
                    
                   READ MORE
                </button>
                
               
            </div>
   
        </div>

        <div className="md:w-1/2 justify-center item-center text-center m-auto">
            
        <Image src="/blog1.jpg" width={500} height={500} alt="Search" className='transition-transform transform-gpu hover:scale-110 rounded-md' />
       
        </div>
    </div>
    
    <div className="flex flex-col-reverse md:flex-row mx-auto p-4 relative gap-6">
    <div className="md:w-1/2 justify-center item-center text-center m-auto">
            
        <Image src="/blog3.png" width={500} height={500} alt="Search" className='transition-transform transform-gpu hover:scale-110 rounded-md' />
       
        </div>

        <div className=" flex md:flex-col md:w-1/2 justify-center text-center md:text-left px-4 py-10">
            <div className='w-full'>
                
                <h1 className='text-4xl md:text-3xl font-bold tracking-wider leading-tight mb-4'>Crafting the Perfect Pizza: A Journey through Flavor and Artisanal Mastery</h1>
                <p className="text-lg tracking-wider text-[#888888] leading-[1.7] mb-4">30th Dec, 2023</p>
                <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mb-4">Embark on a culinary adventure as we delve into the art of crafting the perfect pizza. From selecting the finest ingredients to mastering the art of dough, discover the secrets that make our pizzas a culinary masterpiece...</p>
                             
                <button className='mx-auto md:mx-0 cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
                    
                   READ MORE
                </button>
                
               
            </div>
   
        </div>

        
    </div>
    
    <div className="flex flex-col md:flex-row mx-auto p-4 relative gap-6">
        <div className=" flex md:flex-col md:w-1/2 justify-center text-center md:text-left px-4 py-10">
            <div className='w-full'>
                
                <h1 className='text-4xl md:text-3xl font-bold tracking-wider leading-tight mb-4'>Sustainability in Every Slice: A Greener Approach to Pizza Making</h1>
                <p className="text-lg tracking-wider text-[#888888] leading-[1.7] mb-4">24th Dec, 2023</p>
                <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mb-4">Discover our commitment to sustainability as we take you behind the scenes of our eco-friendly pizza-making practices. From locally sourced ingredients to eco-conscious packaging, learn how we're making a positive impact on the planet, one delicious slice at a time...</p>
                             
                <button className='mx-auto md:mx-0 cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
                    
                   READ MORE
                </button>
                
               
            </div>
   
        </div>

        <div className="md:w-1/2 justify-center item-center text-center m-auto">
            
        <Image src="/slice.png" width={400} height={400} alt="Search" className='transition-transform transform-gpu hover:scale-110 rounded-md' />
       
        </div>
    </div>
    

    </main>
    
  )
}
