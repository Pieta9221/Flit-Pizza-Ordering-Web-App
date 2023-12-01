import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function OrderButton() {
  return (
    <Link href="/products">
      <button className='cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center'>
       
        <FaShoppingCart size={24} className='text-white mr-3' />
        
          ORDER NOW
      </button>
    </Link>
  )
}
