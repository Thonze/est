import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './comps/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="">
      
      <section id='hero'>
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 md:flex-row ">
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left" >
            Shola's Kitchen
            </h1>
              <p className=' max-w-sm text-center text-red-400 md:text-left'
                >Welcome to our restaurant web app! We are excited to bring you a 
                new way to experience dining. With our app, you can easily browse 
                our menu, place your order, and have it delivered directly to your 
                doorstep or ready for pickup at our restaurant
                </p>
                <div className="flex justify-center md:justify-start">
                <a href='' className='md:block  p-3 px-6 pt-2 text-white bg-red-700 rounded-full
                  baseline hover:bg-red-400'>Get Started</a>
                </div>
            </div>
             {/* Image */}
             <div className='md:w-1/2'>
                <img src="/image.png"  alt='image'/>
                </div>
          </div>
        </section>
    </main>
    </>
  )
} 
