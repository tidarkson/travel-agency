import React, { useState } from 'react'
import data from '../../trip.json'
import { IoIosPaperPlane } from 'react-icons/io'
import {Link} from 'react-router-dom'


function PlanTrip() {

    const [items] = useState(data)
    return (
        <>
            <section className='px-5 md:px-20 my-5'>
                <div className='md:flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-extrabold my-2'>Plan your perfect trip</h2>
                        <p className='text-sm md:text-base'>Search Flights & Places Hire to our most popular destinations</p>
                    </div>

                    <button className='mt-4 md:mt-0 font-semibold text-xs rounded border p-2 border-teal-200'>See more places</button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 md:my-16">
                    {items.data.map((item) => {
                        const { id, image, title, tag1, tag2, tag3 } = item

                        return (
                            <div key={id} className="outline-offset-0 rounded-lg p-2 shadow shadow-slate-300">
                                <div className='flex items-center justify-start'>
                                    <img src={image} alt="" />
                                    <div className='px-5'>
                                        <p className='my-5 font-bold'>{title}</p>
                                        <div className='flex items-center justify-center gap-5'>
                                            <p className='text-xs hover:underline px-1 rounded bg-slate-100 cursor-pointer hover:bg-teal-100'>{tag1}</p>
                                            <p className='text-xs hover:underline px-1 rounded bg-slate-100 cursor-pointer hover:bg-teal-100'>{tag2}</p>
                                            <p className='text-xs hover:underline px-1 rounded bg-slate-100 cursor-pointer hover:bg-teal-100'>{tag3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='grid lg:grid-cols-2 gap-5 h-100'>
                    <div className="plantrip rounded-2xl px-3">
                        <div className='text-white flex flex-col items-center text-center gap-5 mx-auto mt-60 mb-20 lg:mt-80 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                            <h2 className='text-4xl font-bold tracking-widest'>Flights</h2>
                            <p className='text-sm'>Search Flights & Places Hire to our most popular destinations</p>
                            <Link to={'/hotel-listings'}><button className='font-semibold text-sm text-black px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosPaperPlane /> Show flights
                            </button></Link>
                            
                        </div>
                    </div>
                    <div className="plantrip1 rounded-2xl px-3">
                        <div className='text-white flex flex-col items-center text-center gap-5 mx-auto mt-60 mb-20 lg:mt-80 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                            <h2 className='text-4xl font-bold tracking-widest'>Hotels</h2>
                            <p className='text-sm'>Search Flights & Places Hire to our most popular destinations</p>
                            <Link to={'/hotel-listings'}><button className='font-semibold text-sm text-black px-3 py-2 flex items-center justify-center gap-2 rounded-lg'><IoIosPaperPlane />Book now</button></Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanTrip

