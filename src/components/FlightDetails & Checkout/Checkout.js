import React from 'react'
import Header from '../FlightListing/Header'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaStopwatch } from 'react-icons/fa'
import {IoIosAirplane} from 'react-icons/io'
import {MdOutlineAirlineSeatReclineNormal, MdFastfood} from 'react-icons/md'
import emirate from '../../images/emirates-icon.png'



function Checkout() {
  return (
    <>
      <Header />
      <section>
        <article className='flex'>
          <article className='rounded-xl shadow shadow-slate-300 my-10 mb-20 p-5 flex-grow'>
            <div className='mt-10 flex items-center justify-between'>
              <h3 className='text-xl font-semibold'>Return Wed, Dec 8</h3>
              <p>2h 28min</p>
            </div>

            <div className='flex items-center justify-between my-5 px-5'>
              <div className='flex items-center justify-start gap-5 border border-slate-200 rounded px-5 py-2'>
                <img src={emirate} alt="" />
                <div>
                  <h3 className='text-2xl font-semibold'>Emirates</h3>
                  <small>Airbus A320</small>
                </div>
              </div>
              <div className='flex items-center justify-between gap-10'>
                <button className='bg-inherit'><IoIosAirplane /></button>
                <button className='bg-inherit'><AiOutlineWifi /></button>
                <button className='bg-inherit'><FaStopwatch /></button>
                <button className='bg-inherit'><MdFastfood /></button>
                <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal/></button>
              </div>
            </div>

            <div className='flex items-center justify-center gap-12'>
              <div className='flex items-center justify-center gap-3'>
                <h3 className='text-2xl font-semibold'>12pm</h3>
                <small>Newark(EWR)</small>
              </div>

              <div>
                <button className='flex items-center justify-between gap-3 bg-inherit'>&larr; <IoIosAirplane className='text-4xl' /> &rarr;</button>
              </div>

              <div className='flex items-center justify-center gap-3'>
                <h3 className='text-2xl font-semibold'>12pm</h3>
                <small>Newark(EWR)</small>
              </div>
            </div>
          </article>

          <article className='flex-none'>
            <div>
              
            </div>
          </article>
        </article>
      </section>
    </>
  )
}

export default Checkout