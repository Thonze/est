import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
  
  return (
    <nav className='relative container mx-auto p-6 border-b-4'>
      <div className='flex items-center justify-between'>      
        <div className="logo pt-2">
        <img src="/logo.png" alt='Sk'   />
      </div>
      <div className='hidden md:flex space-x-6'>
      <a className='hover:text-orange-500' href="/">Home</a>
      <a className='hover:text-orange-500' href="/about">About</a>
      <a className='hover:text-orange-500' href="/massa">Make your order</a>
      </div>
      <a href='' className=' hidden md:block  p-3 px-6 pt-2 text-white bg-red-700 rounded-full
      baseline hover:bg-red-400'>Get Started</a>
      {/* Hambuger */}
      <button id='menu-btn' className='block hamburger md:hidden
      focus:outline-none'> 
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
       
      </button>
      
     
      </div>
       {/* mobile menu */}
      <div className='md:hidden'>
        <div id='menu' className='absolute flex flex-col items-center self-end hidden py-8
        mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6
        drop-shadow-md'>
          <a className='hover:text-orange-500' href="/">Home</a>
          <a className='hover:text-orange-500' href="/about">About</a>
          <a className='hover:text-orange-500' href="/massa">Make your order</a>

        </div>

      </div>
      <script src='js/index.js'></script> 
    </nav>
    

  )
}
