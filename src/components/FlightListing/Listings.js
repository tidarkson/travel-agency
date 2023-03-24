import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import 'react-range-slider-input/dist/style.css';
import data from '../../flightListing.json'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'


function Listings() {

  const [tabs] = useState(data)
  const [value, setValue] = useState(0)
  const details = tabs.data[value].details
  const [toggleFilter, setToggleFilter] = useState(false)

  return (
    <>
      <section className='px-5 lg:px-20 mb-10'>
        <div className='text-slate-800 rounded-xl max-w-6xl mx-auto py-5 mt-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center my-8 gap-5'>
            <input type="text" placeholder='From' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
            <input type="text" placeholder='To' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
            <input type="text" placeholder='Trip' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
            <input type="text" placeholder='Departure' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
            <input type="text" placeholder='Return' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
            <input type="text" placeholder='Passenger-Class' className='text-xs border-slate-800 text p-2 border  rounded outline-none' />
            <button className='text-xs p-3 flex items-center justify-center gap-2 rounded'><FaSearch /></button>
          </div>
        </div>


        <div className=' lg:flex gap-10'>
          <div className='flex-none'>
            <h3 className='text-xl font-bold'>Filters</h3>

            <div className='grid md:grid-cols-3 lg:grid-cols-1 gap-10'>
              <div className='my-5 w-60 pb-10 border-b border-slate-400'>
                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                  <p className='font-bold' >Price</p>
                  {toggleFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>

                {toggleFilter &&
                  <>
                    <input type="range" value={5} />
                    <div className='flex items-center justify-between w-60'>
                      <small className='text-xs'>$50</small>
                      <small className='text-xs'>$1200</small>
                    </div>
                  </>
                }
              </div>
              <div className='my-5 w-60 pb-10 border-b border-slate-400'>

                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                  <p className='font-bold'>Departure Time</p>
                  {toggleFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {toggleFilter &&
                  <>
                    <input type="range" />
                    <div className='flex items-center justify-between w-60'>
                      <small className='text-xs'>12:00am</small>
                      <small className='text-xs'>11:50pm</small>
                    </div>
                  </>
                }
              </div>

              <div className='my-5 w-60 pb-10 border-b border-slate-400'>
                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                  <p className='font-bold'>Rating</p>
                  {toggleFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>

                {toggleFilter &&
                  <>
                    <div className='flex items-center justify-start gap-10 pt-3'>
                      <small className='border rounded px-1 border-teal-400'>+1</small>
                      <small className='border rounded px-1 border-teal-400'>+2</small>
                      <small className='border rounded px-1 border-teal-400'>+3</small>
                      <small className='border rounded px-1 border-teal-400'>+4</small>
                    </div>
                  </>
                }
              </div>

              <div className='my-5 w-60 pb-10 border-b border-slate-400'>
                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                  <p className='font-bold'>Airlines</p>
                  {toggleFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>

                {toggleFilter &&
                  <>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Emirates</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Fly Dubai</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Qatar</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Etihad</p>
                    </div>
                  </>
                }
              </div>

              <div className='my-5 w-60 pb-10 border-b border-slate-400'>
                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                  <p className='font-bold'>Trips</p>
                  {toggleFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>


                {toggleFilter &&
                  <>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Round Trip</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>One Way</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>Multi-City</p>
                    </div>
                    <div className='flex items-center justify-start gap-4 pt-4'>
                      <input type="checkbox" />
                      <p className='font-semibold text-sm'>My dates are flexible</p>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>


          <div className='grow md:px-10'>
            <ul className='grid grid-cols-2 md:flex items-center justify-center text-center gap-20 rounded shadow-lg p-5'>
              {tabs.data.map((tab, index) => {
                const { id, button } = tab

                return (
                  <>
                    <li key={id} className={`${index === value && "border-b-4 border-teal-300"} shadow shadow-slate-300`}><button className='font-bold bg-inherit text-center px-5 py-2' onClick={() => setValue(index)}>{button}</button></li>
                  </>
                )
              })}
              <li className='flex items-center justify-start gap-2 shadow-lg px-5 py-2'><GiHamburgerMenu /> Other Sort</li>
            </ul>

            <div className=''>
              <div className='flex items-center justify-between my-8'>
                <small>showing {details.length} of <span className='text-red-400'>257 airways</span></small>
                <small>sort by <span className='font-bold'>Recommended</span></small>
              </div>
              {details.map((detail) => {
                const { id, image, price, rating, departure, arrival, stops, duration, link } = detail

                return (
                  <div key={id} className="md:flex items-center justify-start rounded-xl shadow shadow-slate-300 my-2 p-2 md:p-5">
                    <img src={image} alt="" className='first:mb-6 ' />
                    <div className='md:px-10'>
                      <div className='md:flex items-center justify-between md:gap-54 lg:gap-72 px-2'>
                        <div className='flex items-center justify-start gap-3'>
                          <small className='border rounded px-1 border-teal-400'>4.2</small>
                          <small className='font-bold'>{rating}</small>
                          <small>54 reviews</small>
                        </div>

                        <div className='my-5 md:my-0'>
                          <small>Starting from</small>
                          <h3 className='text-red-400 text-3xl font-bold'>${price}</h3>
                        </div>
                      </div>

                      <div className='flex items-center justify-start gap-10 px-2'>
                        <input type="checkbox" />
                        <small className='font-bold'>{departure} - {arrival}</small>
                        <small className='text-xs'>{stops}</small>
                        <small className='font-bold'>{duration}</small>
                      </div>

                      <div className='flex items-center justify-start gap-5 my-10 py-3'>
                        <small className='border rounded p-2 text-lg border-teal-400'><AiOutlineHeart /></small>
                        <button className='text-sm px-3 py-2 rounded-lg w-full'>{link}</button>
                      </div>
                    </div>
                  </div>
                )
              })}

              <button className='w-full bg-emerald-900 text-white p-3 rounded-lg my-5'>Show More Results</button>
            </div>
          </div>
        </div>
      </section>


    </>
  )

}

export default Listings