import React from 'react'
import hero from '../images/hero.png'
import Logo from '../images/Logo.png'
import { IoIosBed, IoIosAirplane, IoIosAdd, IoIosPaperPlane } from 'react-icons/io'


function Hero() {
  return (
    <div className='md:m-5'>
      <div style={{ backgroundImage: `url(${hero})` }} className="bg-no-repeat text-white p-5 md:p-10 bg-cover md:rounded-xl">
        <header className='flex items-center justify-between backdrop-brightness-50 p-5 rounded-lg'>
          <div className='hidden md:block flex items-center justify-center gap-5'>
            <div className='flex items-center gap-2'>
              <IoIosAirplane />
              <p>Find Flight</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoIosBed />
              <p>Find Stays</p>
            </div>
          </div>

          <img src={Logo} alt="Logo" />

          <div className='flex items-center justify-center gap-5'>
            <button className='hidden md:block px-3 py-2 items-center justify-center rounded-lg bg-inherit'>Login</button>
            <button className=' text-slate-900 bg-white px-3 py-2 items-center justify-center rounded-lg'>Sign up</button>
          </div>
        </header>

        <div className='flex flex-col justify-center items-center my-20 gap-5 mb-8'>
          <h3 className='text-2xl md:text-3xl font-bold'>Helping others</h3>
          <h1 className='text-4xl md:text-7xl font-bold uppercase tracking-widest'>Live & Travel</h1>
          <p>Special offers to suit your plan</p>
        </div>

        <div className='backdrop-brightness-50 text-slate-800 rounded-xl max-w-6xl mx-auto px-5 lg:px-20 py-5 mt-20 shadow shadow-slate-700'>
          <div className='flex items-center justify-start gap-5 my-5'>
            <div className='flex items-center gap-2'>
              
              <button className='font-semibold text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosAirplane />Find Flight</button>
            </div>
            <div className='flex items-center gap-2'>
              
              <button className='bg-inherit font-semibold text-white text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosBed />Find Stays</button>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center my-8 gap-5'>
            <input type="text" placeholder='From' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='To' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Trip' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Departure' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Return' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Passenger-Class' className='text-sm text p-2 border  rounded outline-none' />
          </div>

          <div className='flex items-center justify-end gap-5 my-5'>
            <div className='flex items-center justify-center gap-2'>
              
              <button className='font-semibold text-sm px-3 py-2 flex items-center text-white justify-center gap-2 rounded-lg bg-inherit'><IoIosAdd /> Add Promo Code</button>
            </div>
            <div className=''>
              <button className='font-semibold text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosPaperPlane />Show Flights</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero