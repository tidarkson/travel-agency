import React, {useState, useEffect} from 'react'
import { BsFillShareFill } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineWifi } from 'react-icons/ai'
import { FaStopwatch } from 'react-icons/fa'
import { IoIosAirplane } from 'react-icons/io'
import { MdOutlineAirlineSeatReclineNormal, MdFastfood } from 'react-icons/md'
import Header from '../FlightListing/Header'
import emirates from '../../images/emirates_plane.png'
import feature1 from '../../images/feature1.png'
import feature2 from '../../images/feature2.png'
import feature3 from '../../images/feature3.png'
import feature4 from '../../images/feature4.png'
import feature5 from '../../images/feature5.png'
import feature6 from '../../images/feature6.png'
import emirate from '../../images/emirates-icon.png'
import { Link, useParams } from 'react-router-dom'
import data from '../../flightListing.json'




function FlightDetails() {

    const {name} = useParams()
    const [singleFlight, setSingleFlight] = useState([])

    useEffect(()=> {
        const findFlight = () => {
            const newFlight = data.data.find((flight)=> flight.details)
            const details = newFlight.details.find((detail)=> detail.name === name)
            setSingleFlight(details)
            // console.log(details)
        }
        findFlight()
    }, [])

    return (
        <>
            <Header />
            <section className='px-2 md:px-5 xl:px-20'>
                <article className='flex items-center justify-between py-2'>
                    <div>
                        <h2 className='font-bold text-2xl'>{name} A380 Airbus</h2>
                        <small>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</small>
                        <div className='flex items-center justify-start gap-2'>
                            <small className='p-1 border'>4.2</small>
                            <small className='font-bold'>Very Good</small>
                            <small>54 reviews</small>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-3xl font-bold text-red-400 text-end'>${singleFlight.price}</h2>
                        <div className='flex items-center justify-center gap-3'>
                            <div className='hidden md:block'>
                                <button className='bg-inherit p-1 border border-teal-200 px-1 py-2 border border-teal-100'><AiOutlineHeart className='' /></button>
                                <button className='bg-inherit p-1 border border-teal-200 px-1 py-2 border border-teal-100'><BsFillShareFill className='' /></button>
                            </div>
                            <Link to='/checkout'><button className='px-3 py-2 rounded'>Book now</button></Link>
                        </div>
                    </div>
                </article>
                <article className='my-10'> 
                    <div>
                        <img src={singleFlight.large} alt="image" className='h-2/4 w-3/4 mx-auto rounded-xl'/>
                    </div>

                    <div className='md:flex items-center justify-between my-5'>
                        <h2 className='text-2xl font-bold'>Basic Features</h2>
                        <div className=''>
                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <small className='pl-1 pr-3 font-semibold'>Economy</small>
                                <input type="checkbox" />
                                <small className='pl-1 pr-3 font-semibold'>First class</small>
                                <input type="checkbox" />
                                <small className='pl-1 pr-3 font-semibold'>Business class</small>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center md:justify-between gap-2'>
                        <img src={feature1} alt="" className='hidden md:block' />
                        <img src={feature2} alt="" className='hidden md:block' />
                        <img src={feature3} alt="" className='' />
                        <img src={feature4} alt="" className='hidden xl:block' />
                        <img src={feature5} alt="" />
                        <img src={feature6} alt="" className='hidden md:block' />
                    </div>
                </article>

                <article>
                    <div className='flight md:flex items-center justify-between rounded p-5'>
                        <div>
                            <h3 className='text-2xl font-bold'>{name} Airline Policies</h3>
                            <div className='flex items-center gap-1'>
                                <small><FaStopwatch /></small>
                                <small>Pre-flight cleaning, Installation of HEPA filters</small>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-1'>
                                <small><FaStopwatch /></small>
                                <small>Pre-flight health cleaning questions</small>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </article>

                <article className='rounded-xl shadow shadow-slate-300 my-10 p-5'>
                    <div className='mt-10 flex items-center justify-between'>
                        <h3 className='text-xl font-semibold'>Return Wed, Dec 8</h3>
                        <p>2h 28min</p>
                    </div>

                    <div className='md:flex items-center justify-between my-5 px-5'>
                        <div className='flex items-center justify-start gap-5 border md:border-slate-200 rounded px-5 py-2'>
                            <img src={emirate} alt="" />
                            <div>
                                <h3 className='text-2xl font-semibold'>{name}</h3>
                                <small>Airbus A320</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-10 my-2'>
                            <button className='bg-inherit'><IoIosAirplane /></button>
                            <button className='bg-inherit'><AiOutlineWifi /></button>
                            <button className='bg-inherit'><FaStopwatch /></button>
                            <button className='bg-inherit'><MdFastfood /></button>
                            <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal /></button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-12'>
                        <div className='md:flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>

                        <div>
                            <button className='flex items-center justify-between gap-3 bg-inherit'>&larr; <IoIosAirplane className='text-4xl' /> &rarr;</button>
                        </div>

                        <div className='md:flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>
                    </div>
                </article>

                <article className='rounded-xl shadow shadow-slate-300 my-10 mb-20 p-5'>
                    <div className='mt-10 flex items-center justify-between'>
                        <h3 className='text-xl font-semibold'>Return Wed, Dec 8</h3>
                        <p>2h 28min</p>
                    </div>

                    <div className='md:flex items-center justify-between my-5 px-5'>
                        <div className='flex items-center justify-start gap-5 border md:border-slate-200 rounded px-5 py-2'>
                            <img src={emirate} alt="" />
                            <div>
                                <h3 className='text-2xl font-semibold'>{name}</h3>
                                <small>Airbus A320</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-10 my-2'>
                            <button className='bg-inherit'><IoIosAirplane /></button>
                            <button className='bg-inherit'><AiOutlineWifi /></button>
                            <button className='bg-inherit'><FaStopwatch /></button>
                            <button className='bg-inherit'><MdFastfood /></button>
                            <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal /></button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-12'>
                        <div className='md:flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>

                        <div>
                            <button className='flex items-center justify-between gap-3 bg-inherit'>&larr; <IoIosAirplane className='text-4xl' /> &rarr;</button>
                        </div>

                        <div className='md:flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default FlightDetails