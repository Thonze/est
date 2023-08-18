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
        <div className="container mx-auto ">
            </div>
             {/* Image */}
             <div className='brightness-50'>
                <img src="/banner.png"  alt='image'/>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="py-6 font-thin text-white text-md ">Cheerbequest</p>
                <h3 className="m-6  py-6 font-bold text-3xl text-white text-md ">Raise Funds for that project you want to Achieve</h3>
                <button className='text-white text-xl p-3  mx-3 outline outline-2 bg-sky-700'>Start a Cheerbequest</button>
                <button className='text-white text-xl p-3 outline mx-3 outline-slate-300'>See how it Works</button>
                <p className='text-white text-sm py-6 mx-3'>With a few easy steps , raise funds for a motive today</p>
              </div>
                
                </div>
        </section>

        <section className='container mx-auto py-3 my-6 px-3 bg-slate-500'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2'>
          <div className=' py-6 col-span-1 '>
          <h1 className='text-2xl text-white  py-6 pt-3'>Start a Fundraiser in three steps</h1>
          <img src='Funds.png' alt='image' className=' ps-14'/>
          </div>
           <div className='  col-span-1 text-white pt-20 '>
            <p className=' '>Start your fundraiser</p>
            <span className='text-xs my-6 py-3'>By creating an account, you can have access to create a fundraiser for a cause</span>
            <p className=' '>Share your fundraiser</p>
            <span className='text-xs py-6'>Share fundraiser with family and friends to meet fundraiser target</span>
            <p className=' '>Withdraw your fundraiser</p>
            <span className='text-xs'>Withdraw funds raise eaily after each fundraiser is completed</span>
           </div>
          </div>

        </section>

        <section className='container mx-auto py-3 my-6 px-3'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2'>
            <div className='py-6 col-span-1'>
              <h1 className='text-2xl text-black-100  py-6 pt-3 font-bold'>Raise Funds for</h1>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-3 my-6 px-3  bg-slate-950 '>
          <div className='flex'>
          <h4 className=' grow text-white font-semibold'>Topic of interest</h4>  <span className='text-white flex flex-col flex-none'>see all</span>
          </div>
          <div className='h-screen p-4 Parent'>
            <img src='' alt='' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
           <div className='col-span-1 py-3 bg-white mx-3 p-3'>
           <img src='' alt='Image' />
              <h4> Any mechanical Keyboard ethuisaist in design</h4>
              <button className='px-3 py-2 rounded-lg cursor-pointer  bg-cyan-500'>see more</button>
            </div>
           <div className='col-span-1 py-3 bg-white mx-3 p-3'>
           <img src='' alt='Image' />
              <h4> Any mechanical Keyboard ethuisaist in design</h4>
              <button className='px-3 py-2 rounded-lg cursor-pointer  bg-cyan-500'>see more</button>
            </div>
           <div className='col-span-1 py-3 bg-white mx-3 p-3'>
           <img src='' alt='Image' />
              <h4 className='p-3'> Any mechanical Keyboard ethuisaist in design</h4>
              <button className='p-3 rounded-lg cursor-pointer  bg-cyan-500'>see more</button>
              </div>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-3 my-6 px-3 '>
          <div className='py-6'>
            <h2 className='text-lg font-bold'> Fund someone</h2>
          </div>
          <div className=' grid lg:grid-cols-3 '>
            <div className='col-span-1 px-3 mx-3'>
              <img src= "" alt=''/>
              <h4 className='text-lg font-semibold text-blue-700'> Help Devita beat cancer</h4>
              <p>From supscription to gym classes to luxury classes</p>
              <div className='bg-blue outline outline-1   rounded-sm my-3'>
                <span className=' bg-white outline outline-1 rounded-sm'></span>
              </div>
              <div className=' py-3'><span className=' text-slate-950 font-medium '># 800, 000 raised </span> <span className='ml-6 text-sm'>60 donations</span></div>
            </div>
            <div className='col-span-1 px-3 mx-3'>
              <img src= "" alt=''/>
              <h4 className='text-lg font-semibold text-blue-700'> Help Father and his 20year's old son</h4>
              <p>From supscription to gym classes to luxury classes</p>
              <div className='bg-blue outline outline-1   rounded-sm my-3'>
                <span className=' bg-white outline outline-1 rounded-sm'></span>
              </div>
              <div className=' py-3'><span className=' text-slate-950 font-medium '># 800, 000 raised </span> <span className='ml-6 text-sm'>60 donations</span></div>
            </div>
            <div className='col-span-1 px-3 mx-3'>
              <img src= "" alt=''/>
              <h4 className='text-lg font-semibold text-blue-700'> Community bridge</h4>
              <p>From supscription to gym classes to luxury classes</p>
              <div className='bg-blue outline outline-1   rounded-sm my-3'>
                <span className=' bg-white outline outline-1 rounded-sm'></span>
              </div>
              <div className=' py-3'><span className=' text-slate-950 font-medium '># 800, 000 raised </span> <span className='ml-6 text-sm'>60 donations</span></div>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-3 my-6 px-3  bg-slate-900 rounded-md '>
          <div className='p-3 text-white'>
            <div className='flex'>
            <h4 className=' font-bold text-lg flex grow'>Ready to get started?</h4> <button className='flex flex-col bg-white flex-none text-black p-3 rounded-md outline-sky-700'>start a fundraiser</button>
            </div>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>

          </div>
        </section>


        <footer>
          
        </footer>
    </main>
    </>
  )
} 
