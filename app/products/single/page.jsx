import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

export default function single() {
  return (
    <div class="flex flex-col md:flex-row md:h-screen mx-auto p-4 relative">
        <div class="md:w-1/2 justify-center text-center m-auto">
            <Image src="/burga-pizza.png" alt="Search" width={600} height={600} className='lg:ml-20'/>
        </div>
        <div class=" flex-col md:w-1/2 p-4">
          <h1 className='text-4xl text-[#111111] font-bold tracking-wider mb-5'>Burga Pizza</h1>
          <h1 className='text-xl text-[#DC3545] font-bold tracking-wide mb-5'>$20<span className='text-[#999999] ml-5'>8 Reviews</span></h1>
          <p className='text-lg tracking-wider text-[#555555] mb-5'>This is Burga Pizza</p>
          <p className='text-lg tracking-wider text-[#555555] mb-5'>Category: Chicken, Launch, Pizza, Burger</p>
          <p className='text-lg tracking-wider text-[#555555] mb-10'>Tags: Healthy, Organic, Chicken, Sauce</p>
          <h1 className='text-xl text-[#111111] font-bold tracking-wider mb-5'>Choose Pizza Size</h1>
          <div className='mb-10 flex gap-12 align-middle items-center'>
          <div className='relative cursor-pointer'>
            <Image src="/pizza-icon.png" alt="pizza-size" width={50} height={50}/>
            <span className='absolute bg-[#DC3545] text-white text-sm top-0 right-[-30%] rounded-full py-1 px-2'>Small</span>
          </div>
          <div className='relative cursor-pointer'>
            <Image src="/pizza-icon.png" alt="pizza-size" width={70} height={70}/>
            <span className='absolute bg-[#DC3545] text-white text-sm top-0 right-[-25%] rounded-full py-1 px-2'>Medium</span>
          </div>
          <div className='relative cursor-pointer'>
            <Image src="/pizza-icon.png" alt="pizza-size" width={100} height={100}/>
            <span className='absolute bg-[#DC3545] text-white text-sm top-0 right-[-20%] rounded-full py-1 px-2'>Large</span>
          </div>
          
          </div>

          <h1 className='text-xl text-[#111111] font-bold tracking-wider mb-5'>Choose Additional Ingredient</h1>
         <div className='mb-10 flex gap-4 align-middle items-center'>
         <div className='flex items-center gap-2'>
              <input
                type="checkbox"
                className='w-5 h-5'
              />
              <label>Sauce</label>
            </div>

         </div>

         <div className='mb-10 grid grid-cols-1 md:grid-cols-3 gap-2'>
       
              <input
                type="number"
                defaultValue={1}
                className='w-1/2 md:w-full h-5 border-2 rounded-sm py-4 px-2 mb-3 outline-none'
              />
              <Link href="/cart">
                <button className='cursor-pointer bg-[#FBB200] hover:bg-[#DC3545] px-4 py-2 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider'>
                  ADD TO CART
                </button>
                </Link>
              <div className='w-10 h-10 border-gray-500 border rounded-full flex items-center justify-center'>
                <FaHeart size={20} className='text-center text-gray-500'/>
              </div>

          </div>
                
        </div>
    </div>
  )
}
