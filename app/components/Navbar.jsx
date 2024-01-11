"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'



const SearchModal = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here, for now, just log the query
    console.log('Search query:', searchQuery);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="p-8 rounded-md w-4/5 h-3/5 bg-transparent flex flex-col items-center relative">
        <button onClick={onClose} className="text-white hover:text-[#e20202] absolute top-[-10%] right-2 focus:outline-none p-2 border border-white rounded-full">
          <AiOutlineClose size={24} />
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What pizza are you craving?"
          className="border p-4 w-full rounded-full text-lg bg-transparent placeholder-white focus:outline-none mt-4"
        />
        <div className="absolute top-[16%] md:top-[15%] right-10 cursor-pointer text-white">
          <AiOutlineSearch size={24} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const openSearchModal = () => {
    setIsSearchModalOpen(true)
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false)
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 h-150 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
      <div className="absolute top-[-30px] md:top-[-10px] left-[20%]">
          <Image src="/header-img.png" alt="Logo" width={200} height={70} />
      </div>
       
        <Link href="/">
          <span className="cursor-pointer flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={70} height={50} />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="md:flex items-center space-x-8 list-none font-bold">
          <div className="hidden md:flex items-center space-x-8 list-none">
          <li>
            <Link href="/">
              <span className="cursor-pointer">HOME</span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span className="cursor-pointer">PRODUCTS</span>
            </Link>
          </li>
          
          <li>
            <Link href="/blog">
              <span className="cursor-pointer">BLOG</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="cursor-pointer">CONTACT</span>
            </Link>
          </li>
          </div>
          <div className="flex md:flex items-center justify-center space-x-8">
            <div onClick={openSearchModal} className='cursor-pointer'>
            <Image src="/search-icon.png" alt="Search" width={24} height={24} className='cursor-pointer' />
          </div>
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <Image src="/cart-blue.png" alt="Cart" width={30} height={30}/>
              <div className="absolute top-[-8px] right-[-8px] w-5 h-5 bg-[#DC3545] rounded-full p-2 flex items-center justify-center font-bold text-sm text-white">
                2 
              </div>
            </div>
          </Link>
        </div>

        </ul>

   
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMobileNavOpen ? <AiOutlineClose size={30} className='ml-3' /> : <AiOutlineMenu size={30} className='ml-3'/>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <ul className="md:hidden border-t  border-gray-200 list-none font-bold mx-4">
          <li>
            <Link href="/">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">HOME</span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">PRODUCTS</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">BLOG</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">CONTACT</span>
            </Link>
          </li>
          
        </ul>
      )}

      {/* Search Modal */}
      {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
    
    </nav>
  )
}

export default Navbar
