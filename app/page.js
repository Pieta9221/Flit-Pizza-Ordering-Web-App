import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import { FaStar } from 'react-icons/fa'
import OrderButton from './components/OrderButton'

export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <div className="bg-[#FFFAED] mx-auto py-20 px-4 relative">
        <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-3">Our Strength</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-10">Why We Are The Best?</h1>
        <Image src="/slice.png" alt="Search" width={170} height={170} className="absolute top-[20%] md:top-[15%] right-0"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
          <div className="col-span-1">
            <Image src="/food.png" alt="food" width={40} height={40} />
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/fan.png" alt="fan" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/smile.png" alt="smile" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/location.png" alt="location" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
        </div>        
          
    </div>
      <div className="p-4">
        <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-2">Popular Dishes</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-16">Browse Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
            
            <Image src="/burga-pizza.png" alt="food" width={200} height={200} className='m-auto'/>
           
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
        
          <div className="col-span-1 border-2 rounded-2xl mx-auto flex-col text-left items-center w-full p-8">
              
            <Image src="/burga-pizza.png" alt="food" width={200} height={200} className='m-auto'/>
             
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
          <div className="col-span-1 border-2 rounded-2xl mx-auto flex-col text-left items-center w-full p-8">
              
            <Image src="/new-pizza.png" alt="food" width={200} height={200}  className='m-auto'/>
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

                 
          
          <div className="col-span-1 border-2 rounded-2xl mx-auto flex-col text-left items-center w-full p-8">
            
            <Image src="/greek-pizza.png" alt="food" width={200} height={200} className='m-auto'/>
            
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
    <div className="mx-auto py-20 px-4 relative">
        <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-3 mt-2">Customer Feedback</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-6 pb-16">Client Testimonials</h1>
        <Image src="/leaf.png" alt="Search" width={100} height={100} className="absolute top-0 left-0"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <Image src="/client-1.jpg" alt="food" width={100} height={100} className='mx-auto rounded-full'/>
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">Takar Bowa</h1>
            <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
                  
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <Image src="/client-2.jpg" alt="food" width={100} height={100} className='mx-auto rounded-full'/>
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">Takar Bowa</h1>
            <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
                  
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <Image src="/client-3.jpg" alt="food" width={100} height={100} className='mx-auto rounded-full'/>
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">Takar Bowa</h1>
            <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
                  
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <Image src="/client-4.jpg" alt="food" width={100} height={100} className='mx-auto rounded-full'/>
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">Takar Bowa</h1>
            <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
                  
        </div>

          
     
      
    </div>
    </main>
  )
}
