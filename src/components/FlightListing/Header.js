import React from 'react'
import { IoIosBed, IoIosAirplane, IoIosHeart } from 'react-icons/io'
import Logo from '../../images/golobe.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <header className='flex items-center justify-between p-5'>
        <div className='hidden md:block md:flex items-center justify-center gap-5'>
          <div className='flex items-center gap-2'>
            <IoIosAirplane />
            <p><Link to={'/flight-listings'}>Find Flight</Link></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoIosBed />
            <p>Find Stays</p>
          </div>
        </div>

        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>

        <div className='flex items-center justify-center gap-2'>
          <small className='flex items-center justify-center gap-1 hover:underline px-3 py-2'><IoIosHeart />favorites</small>
          <div className='h-5 border border-r border-slate-900'></div>
          <img src="" alt="" />
          <small className='px-3 py-2'>John Doe</small>
        </div>
      </header>
    </>
  )
}

export default Header