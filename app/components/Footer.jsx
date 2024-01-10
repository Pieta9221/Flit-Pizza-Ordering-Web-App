import Image from "next/image";


export default function Footer() {
  return (
    <div className="bg-[#FFFAED] mx-auto py-12 px-4 relative">
     
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
          <div className="col-span-1 p-4">
            <div className="flex flex-col items-start">
            
           <h1 className="text-xl font-bold tracking-wider leading-[1.3]">INFORMATION</h1>
            <ul className="text-lg font-bold tracking-wider text-[#888888] leading-[2.5] mt-5 cursor-pointer">
             <li>Home</li>
             <li>Blog</li>
             <li>About Us</li>
             <li>Menu</li>
             <li>Contact Us</li>
            </ul>
          </div>
          </div>
          <div className="col-span-1 p-4">
          <div className="flex flex-col items-start">
            
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] ">TOP ITEMS</h1>
            <ul className="text-lg font-bold tracking-wider text-[#888888] leading-[2.5] mt-5 cursor-pointer">
             <li>Pepperoni</li>
             <li>Swiss Mushroom</li>
             <li>Barbeque Chicken</li>
             <li>Vegetarian</li>
             <li>Ham & Cheese</li>
            </ul>
          </div>
          </div>
          
          <div className="col-span-1 p-4">
          <div className="flex flex-col items-start">            
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] ">OTHERS</h1>
            <ul className="text-lg font-bold tracking-wider text-[#888888] leading-[2.5] mt-5 cursor-pointer">
             <li>Checkout</li>
             <li>Cart</li>
             <li>Product</li>
             <li>Locations</li>
             <li>Legal</li>
            </ul>
          </div>
          </div>

          <div className="col-span-1 p-4">
          <div className="flex flex-col items-start">            
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] ">SOCIAL MEDIA</h1>
           <div className='mt-8 flex text-blue cursor-pointer'>
              <Image src="/facebook.png" alt="social-icon" width={40} height={40} className="mr-3" />
              <Image src="/pinterest.png" alt="social-icon" width={40} height={40} className="mr-3" />
              <Image src="/twitter1.png" alt="social-icon" width={40} height={40} className="mr-3" />
              <Image src="/instagram.png" alt="social-icon" width={40} height={40} />
          </div>
          <p className="text-lg tracking-wider text-[#666666] leading-[1.7] my-8">Sign up and get exclusive offers and coupon codes</p>

          <button className='cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
             SIGN UP
          </button>

          </div>
          </div>

          
         
        </div>        
          
    </div>
  )
}
