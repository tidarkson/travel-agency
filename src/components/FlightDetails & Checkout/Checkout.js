import React from 'react'
import Header from '../FlightListing/Header'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaStopwatch } from 'react-icons/fa'
import { IoIosAirplane } from 'react-icons/io'
import { MdOutlineAirlineSeatReclineNormal, MdFastfood } from 'react-icons/md'
import emirate from '../../images/emirates-icon.png'
import airbus from '../../images/airbus.png'




function Checkout() {
  return (
    <>
      <Header />
      <section className='px-20'>
        <article className='flex gap-10'>

          <article>
            <article className='rounded-xl shadow shadow-slate-300 my-10 mb-20 p-5 flex-grow'>
              <article className='flex items-center justify-between py-2'>
                <div>
                  <h2 className='font-bold text-3xl'>Emirates A380 Airbus</h2>
                </div>

                <div>
                  <h2 className='text-3xl font-bold text-red-400 text-end'>$240</h2>
                </div>

              </article>
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
                  <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal /></button>
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

            <article className='rounded-xl shadow shadow-slate-300 my-10 mb-20 p-5'>
              <div className='payfull flex items-center justify-between rounded p-5'>
                <div >
                  <p className='font-semibold'>Pay in full</p>
                  <small>Pay the total and you are all set</small>
                </div>

                <div>
                  <input type="radio" />
                </div>
              </div>

              <div className='flex items-center justify-between rounded p-5 my-1'>
                <div >
                  <p className='font-semibold'>Pay part now, pay part later</p>
                  <small>Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</small>
                </div>

                <div>
                  <input type="radio" />
                </div>
              </div>
              <small className='my-5 underline cursor-pointer'>More info</small>
            </article>
          </article>


          <article className='flex-none'>
            <div className='flex items-center justify-center gap-5'>
              <img src={airbus} alt="" />
              <div>
                <small>Economy</small>
                <h2 className='font-bold text-2xl'>Emirates A380 Airbus</h2>
                <div className='flex items-center justify-start gap-2'>
                  <small className='p-1 border'>4.2</small>
                  <small className='font-bold'>Very Good</small>
                  <small>54 reviews</small>
                </div>
              </div>
            </div>
          </article>
        </article>
      </section>
    </>
  )
}

export default Checkout