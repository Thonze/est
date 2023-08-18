import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {

  // const btn = document.getElementById('menu-btn')!
  // const nav = document.getElementById('menu')!

  // btn.addEventListener('click', () =>{
  //     btn.classList.toggle('open')
  //     nav.classList.toggle('flex')
  //     nav.classList.toggle('hidden')
  // })
  
  return (
    <nav className='relative container mx-auto p-6 border-b-4'>
      <div className='flex items-center justify-between'>      
        <div className="logo pt-2">
      </div>
      <div className='hidden md:flex space-x-12'>
      <a className='hover:text-orange-500' href="/">search</a>
      <a className='hover:text-orange-500' href="/about">Fund someone</a>
      <a className='hover:text-orange-500 ' href="/massa">How it works</a>
      <a className='hover:text-orange-500' href="/massa"><img className='lg-absolute ' src="/logo.png" alt='Sk'   /></a>
      <a className='hover:text-orange-500' href="/massa">About us</a>
      <a className='hover:text-orange-500' href="/massa">Blog</a>
      </div>
      <a href='' className=' hidden md:block  p-3 px-6 pt-2 text-blue-500 border-slate border border-slate-500  rounded-full  ring-offset-4
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
      <div className='md:hidden' role='menubar'>
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
