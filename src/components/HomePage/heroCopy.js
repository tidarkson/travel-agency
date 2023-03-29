import React, { useEffect, useState } from 'react'
import hero from '../../images/pexels1.webp'
import Logo from '../../images/Logo.png'
import { IoIosBed, IoIosAirplane, IoIosAdd, IoIosPaperPlane } from 'react-icons/io'
import { Link } from 'react-router-dom'


function Hero() {

  const [city, setCity] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const fetchCity = async () => {
      const res = await fetch(`https://restcountries.com/v2/all?fields=name,capital`)
      const data = await res.json()
      setCity(data)
      console.log(data)
    }
    fetchCity()
  }, []);


  return (
    <div className='md:m-5'>
      <div style={{ backgroundImage: `url(${hero})` }} className="bg-no-repeat text-white p-5 md:p-10 bg-cover md:rounded-xl">
        <header className='flex items-center justify-between backdrop-brightness-50 p-5 rounded-lg'>
          <div className='hidden md:block md:flex items-center justify-center gap-5'>
            <div className='flex items-center gap-2'>
              <IoIosAirplane />
              <p><Link to={'/flight-listings'}>Find Flight</Link></p>
            </div>
            <div className='flex items-center gap-2'>
              <IoIosBed />
              <Link to={'/hotel-listings'}><p>Find Stays</p></Link>
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

              <Link to={'/flight-listings'}><button className='font-semibold text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosAirplane />Find Flight</button></Link>
            </div>
            <div className='flex items-center gap-2'>
              <Link to={'/hotel-listings'}><button className='bg-inherit font-semibold text-white text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosBed />Find Stays</button></Link>

            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center my-8 gap-5'>
            <div className='rounded'>
              <input type="text"
                placeholder='From'
                className='text-sm p-2 outline-none'
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                value={inputValue}
                onClick={() => setOpen(!open)} />


              <ul className={`bg-white overflow-y-auto w-32 md:w-44 ${open ? ' h-10' : 'h-0'}`}>
                {city?.map((cite, index) => {
                  const { capital, name } = cite

                  return (
                    <li key={index}
                      className={`p-2 text-xs cursor-pointer hover:bg-slate-700 hover:text-white ${capital?.toLowerCase().startsWith(inputValue) || name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
                      onClick={() => { setInputValue(capital, name); setOpen(false) }}
                    >{capital}, {name}</li>

                  )
                })}
              </ul>
            </div>

            <div className='rounded'>
              <input type="text"
                placeholder='From'
                className='text-sm p-2 outline-none inline-block'
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                value={inputValue}
                onClick={() => setOpen(!open)} />


              <ul className={`bg-white overflow-y-auto w-32 md:w-44 ${open ? ' h-10' : 'h-0'}`}>
                {city?.map((cite, index) => {
                  const { capital, name } = cite

                  return (
                    <li key={index}
                      className={`p-2 text-xs cursor-pointer hover:bg-slate-700 hover:text-white ${capital?.toLowerCase().startsWith(inputValue) || name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
                      onClick={() => { setInputValue(capital, name); setOpen(false) }}
                    >{capital}, {name}</li>

                  )
                })}
              </ul>
            </div>
            {/* <input type="text" placeholder='To' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Trip' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Departure' className='text-sm p-2 border  rounded outline-none' />
            <input type="text" placeholder='Return' className='text-sm p-2 border  rounded outline-none' /> */}
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