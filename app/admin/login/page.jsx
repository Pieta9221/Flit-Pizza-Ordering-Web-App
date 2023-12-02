import Link from 'next/link'


export default function page() {
  return (
    <div className=" bg-white p-10 md:p-10 lg:p-50 rounded-2xl flex flex-col justify-center items-center mx-auto my-20 relative">
        <p className='text-3xl font-semibold text-center tracking-wide leading-[1.5] mb-3'>Admin Dashboard</p>
        <div className='w-[60%] md:w-[30%] flex flex-col'>
        <input
            placeholder="Enter Email"
            type="text"
            className="w-full border border-solid border-black rounded-sm outline-none p-2 mb-3"
          />
        <input
            placeholder="Enter Password"
            type="password"
            className="w-full border border-solid border-black rounded-sm outline-none p-2 mb-3"
          />
         <Link href="/admin">
        <button className="w-full flex justify-center py-2 px-4 text-white mx-auto bg-teal-600 rounded-sm outline-none p-2">
            Sign In
          </button>  
        </Link>
        </div>
    </div>
 
  )
}
