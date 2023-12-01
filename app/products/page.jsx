import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import OrderButton from '../components/OrderButton'
import Link from 'next/link'


export default function page() {
  return (
    <div className="p-4">
       <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-8">
      <div className='w-1/2'>
      <button className='cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider justify-center'>
       <Image src="/filter.png" alt="filter" width={24} height={24} className='mr-3 mt-1'/>
         Filter
      </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-around">
        <p className='font-bold text-xl py-2'>Showing all 9 results</p>
        <select
        placeholder='Default Sorting'
        className='w-1/2 md:w-full  border-2 rounded-lg px-4 py-2 text-lg'
        >
          <option>Default Sorting</option>
          <option>A - Z</option>
        </select>
        
      </div>

</div>
       
               
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
            <Link href={`products/single`}>
            <Image src="/burga-pizza.png" alt="food" width={200} height={200} className='m-auto cursor-pointer'/>
            </Link>
           
            <div className='flex justify-between mt-3 w-full'>
              <h1 className="text-3xl font-bold tracking-wider leading-[1.3]">Burga Pizza</h1>
              <h1 className="text-3xl font-bold tracking-wider text-[#e20202] leading-[1.3]">$20</h1>
            </div>
            
              <div className='my-3 flex text-[#FBB200]'> 
              <FaStar size={20} className='mr-1' />
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              </div>
              <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mb-6">This is a burga pizza</p>
              <OrderButton />
           </div>
        
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
            <Link href={`products/single`}>
            <Image src="/burga-pizza.png" alt="food" width={200} height={200} className='m-auto cursor-pointer'/>
            </Link>
             
            <div className='flex justify-between mt-3 w-full'>
              <h1 className="text-3xl font-bold tracking-wider leading-[1.3]">Burga Pizza</h1>
              <h1 className="text-3xl font-bold tracking-wider text-[#e20202] leading-[1.3]">$20</h1>
            </div>
            
              <div className='my-3 flex text-[#FBB200]'> 
              <FaStar size={20} className='mr-1' />
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              </div>
              <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mb-6">This is a burga pizza</p>
              <OrderButton />
           </div>
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
          <Link href={`products/single`}>
            <Image src="/new-pizza.png" alt="food" width={200} height={200}  className='m-auto cursor-pointer'/>
            </Link>
          <div className='flex justify-between mt-3 w-full'>
              <h1 className="text-3xl font-bold tracking-wider leading-[1.3]">New Pizza</h1>
              <h1 className="text-3xl font-bold tracking-wider text-[#e20202] leading-[1.3]">$10</h1>
            </div>
            
              <div className='my-3 flex text-[#FBB200]'> 
              <FaStar size={20} className='mr-1' />
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              </div>
              <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mb-6">This is a new pizza</p>
              <OrderButton />
           </div>

                 
          
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
          <Link href={`products/single`}>
            <Image src="/greek-pizza.png" alt="food" width={200} height={200} className='m-auto cursor-pointer'/>
            </Link>
            
            <div className='flex justify-between mt-3 w-full'>
              <h1 className="text-3xl font-bold tracking-wider leading-[1.3]">Greek Pizza</h1>
              <h1 className="text-3xl font-bold tracking-wider text-[#e20202] leading-[1.3]">$20</h1>
            </div>
            
              <div className='my-3 flex text-[#FBB200]'> 
              <FaStar size={20} className='mr-1' />
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              <FaStar size={20} className='mr-1'/>
              </div>
              <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mb-6">This is a greek pizza</p>
              <OrderButton />
           </div>
        

          
        </div>        
          
    </div>
  )
}
