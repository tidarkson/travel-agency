import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import 'react-range-slider-input/dist/style.css';
import data from '../../hotels.json'
import { ImLocation } from 'react-icons/im'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom';
import Header from '../FlightListing/Header';


function Listings() {

    const [tabs] = useState(data)
    const [value, setValue] = useState(0)
    const details = tabs.data[value].details
    const [toggleFilter, setToggleFilter] = useState(false)
    const [rating, setRating] = useState(false)
    const [airline, setAirline] = useState(false)
    const [trips, setTrips] = useState(false)


    return (
        <>
            <Header/>
            <section className='px-5 lg:px-16 mb-10'>
                <div className='text-slate-800 rounded-xl max-w-6xl mx-auto py-5 mt-10'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center my-8 gap-5'>
                        <input type="text" placeholder='Enter destination' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
                        <input type="text" placeholder='Check in' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
                        <input type="text" placeholder='Check out' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
                        <input type="text" placeholder='Rooms & Guests' className='text-xs border-slate-800 p-2 border  rounded outline-none' />
                        <button className='text-xs p-3 flex items-center justify-center gap-2 rounded'><FaSearch /></button>
                    </div>
                </div>


                <div className=' lg:flex gap-10'>
                    <div className='flex-none'>
                        <h3 className='text-xl font-bold'>Filters</h3>

                        <div className='grid md:grid-cols-3 lg:grid-cols-1 gap-10'>
                            <div className='pb-5 w-60 border-b border-slate-400'>
                                <div className='flex items-center justify-between' onClick={() => setToggleFilter(!toggleFilter)}>
                                    <p className='font-bold' >Price</p>
                                    {toggleFilter ? <IoIosArrowUp /> : <IoIosArrowDown />}
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

                            <div className='pb-5 w-60 border-b border-slate-400'>
                                <div className='flex items-center justify-between' onClick={() => setRating(!rating)}>
                                    <p className='font-bold'>Rating</p>
                                    {rating ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                                {rating &&
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

                            <div className='pb-5 w-60 border-b border-slate-400'>
                                <div className='flex items-center justify-between' onClick={() => setAirline(!airline)}>
                                    <p className='font-bold'>Freebies</p>
                                    {airline ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                                {airline &&
                                    <>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Free breakfast</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Free parking</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Free internet</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Free airport shuttle</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Free cancellation</p>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className='pb-5 w-60 border-b border-slate-400'>
                                <div className='flex items-center justify-between' onClick={() => setTrips(!trips)}>
                                    <p className='font-bold'>Amenities</p>
                                    {trips ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>


                                {trips &&
                                    <>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>24hr front desk</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Air-conditioned</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Fitness</p>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 pt-4'>
                                            <input type="checkbox" />
                                            <p className='font-semibold text-sm'>Pool</p>
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
                        </ul>

                        <div className=''>
                            <div className='flex items-center justify-between my-8'>
                                <small>showing {details.length} of <span className='text-red-400'>8 places</span></small>
                                <small>sort by <span className='font-bold'>Recommended</span></small>
                            </div>
                            {details.map((detail) => {
                                const { id, image, price, rating, location, link } = detail

                                return (
                                    <div key={id} className="md:flex items-center justify-start rounded-xl shadow shadow-slate-300 my-2 p-2 md:p-5">
                                        <img src={image} alt="" className='first:mb-6 rounded-xl w-full' />
                                        <div className='md:px-3'>
                                            <div className='xl:flex items-center justify-between md:gap-54 lg:gap-72 px-2'>
                                                <div className='flex items-center justify-start gap-3'>
                                                    <small className='border rounded px-1 border-teal-400'>4.2</small>
                                                    <small className='font-bold'>{rating}</small>
                                                    <small>54 reviews</small>
                                                </div>

                                                <div className='my-5'>
                                                    <small>Starting from</small>
                                                    <h3 className='text-red-400 text-3xl font-bold'>${price}/<span className='text-sm'>night</span></h3>
                                                </div>
                                            </div>

                                            <div className='flex items-center justify-start gap-2 px-2'>
                                                <ImLocation />
                                                <small className='font-bold'>{location}</small>
                                            </div>

                                            <div className='flex items-center justify-start gap-5 my-10 py-3'>
                                                <small className='border rounded p-2 text-lg border-teal-400'><AiOutlineHeart /></small>
                                                <Link to={''} className="block"><button className='text-sm px-3 py-2 rounded-lg w-full'>{link}</button></Link>
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