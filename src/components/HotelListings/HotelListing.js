import React from 'react'
import hero from '../../images/pexels3.webp'
import { IoIosAdd, IoIosPaperPlane } from 'react-icons/io'
import {RiHotelFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


function HotelListing() {
    return (
        <section>
            <div className=''>
                <div style={{ backgroundImage: `url(${hero})` }} className="bg-no-repeat text-white p-5 md:p-10 bg-cover backdrop-brightness-50">

                    <div className='justify-start items-center my-20 md:px-12 mb-8 text-black max-w-2xl'>
                        <h1 className='text-2xl md:text-5xl font-bold uppercase tracking-widest'>Make your travel whishlist, we’ll do the rest</h1>
                        <p className='text-white'>Special offers to suit your plan</p>
                    </div>

                    <div className='backdrop-brightness-50 text-slate-800 rounded-xl max-w-6xl mx-auto px-5 lg:px-10 py-5 mt-20 shadow shadow-slate-700'>
                        <div className=''>
                            <h3 className='font-bold text-2xl text-white'>Where are you flying?</h3>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center my-8 gap-10'>
                            <input type="text" placeholder='Enter Destination' className='text-sm p-2 border  rounded outline-none' />
                            <input type="text" placeholder='Check In' className='text-sm p-2 border  rounded outline-none' />
                            <input type="text" placeholder='Check out' className='text-sm p-2 border  rounded outline-none' />
                            <input type="text" placeholder='Room & Guests' className='text-sm p-2 border  rounded outline-none' />
                        </div>

                        <div className='flex items-center justify-end gap-5 my-5'>
                            <div className='flex items-center justify-center gap-2'>

                                <button className='font-semibold text-sm px-3 py-2 flex items-center text-white justify-center gap-2 rounded-lg bg-inherit'><IoIosAdd /> Add Promo Code</button>
                            </div>
                            <div className=''>
                                <Link to="/hotels"><button className='font-semibold text-sm px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><RiHotelFill />Show Places</button>
</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelListing