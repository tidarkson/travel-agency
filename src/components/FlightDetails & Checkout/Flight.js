import React from 'react'
import { BsFillShareFill } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineWifi } from 'react-icons/ai'
import { FaStopwatch } from 'react-icons/fa'
import {IoIosAirplane} from 'react-icons/io'
import {MdOutlineAirlineSeatReclineNormal, MdFastfood} from 'react-icons/md'
import Header from '../FlightListing/Header'
import emirates from '../../images/emirates_plane.png'
import feature1 from '../../images/feature1.png'
import feature2 from '../../images/feature2.png'
import feature3 from '../../images/feature3.png'
import feature4 from '../../images/feature4.png'
import feature5 from '../../images/feature5.png'
import feature6 from '../../images/feature6.png'
import emirate from '../../images/emirates-icon.png'




function FlightDetails() {
    return (
        <>
            <Header />
            <section className='px-20'>
                <article className='flex items-center justify-between py-2'>
                    <div>
                        <h2 className='font-bold text-2xl'>Emirates A380 Airbus</h2>
                        <small>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</small>
                        <div className='flex items-center justify-start gap-2'>
                            <small className='p-1 border'>4.2</small>
                            <small className='font-bold'>Very Good</small>
                            <small>54 reviews</small>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-3xl font-bold text-red-400 text-end'>$240</h2>
                        <div className='flex items-center justify-center gap-3'>
                            <button className='bg-inherit p-1 border border-teal-200 px-1 py-2 border border-teal-100'><AiOutlineHeart className='' /></button>
                            <button className='bg-inherit p-1 border border-teal-200 px-1 py-2 border border-teal-100'><BsFillShareFill  className=''/></button>
                            <a href=""><button className='px-3 py-2 rounded'>Book now</button></a>
                        </div>
                    </div>
                </article>
                <article className='my-10'>
                    <div>
                        <img src={emirates} alt="" />
                    </div>

                    <div className='flex items-center justify-between my-5'>
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

                    <div className='flex items-center justify-between'>
                        <img src={feature1} alt="" />
                        <img src={feature2} alt="" />
                        <img src={feature3} alt="" />
                        <img src={feature4} alt="" />
                        <img src={feature5} alt="" />
                        <img src={feature6} alt="" />
                    </div>
                </article>

                <article>
                    <div className='flight flex items-center justify-between rounded p-5'>
                        <div>
                            <h3 className='text-2xl font-bold'>Emirates Airline Policies</h3>
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

                    <div className='flex items-center justify-between my-5 px-5'>
                        <div className='flex items-center justify-start gap-5 border border-slate-200 rounded px-5 py-2'>
                            <img src={emirate} alt="" />
                            <div>
                                <h3 className='text-2xl font-semibold'>Emirates</h3>
                                <small>Airbus A320</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-10'>
                            <button className='bg-inherit'><IoIosAirplane/></button>
                            <button className='bg-inherit'><AiOutlineWifi/></button>
                            <button className='bg-inherit'><FaStopwatch/></button>
                            <button className='bg-inherit'><MdFastfood/></button>
                            <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal/></button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-12'>
                        <div className='flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>

                        <div>
                            <button className='flex items-center justify-between gap-3 bg-inherit'>&larr; <IoIosAirplane className='text-4xl'/> &rarr;</button>
                        </div>

                        <div className='flex items-center justify-center gap-3'>
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

                    <div className='flex items-center justify-between my-5 px-5'>
                        <div className='flex items-center justify-start gap-5 border border-slate-200 rounded px-5 py-2'>
                            <img src={emirate} alt="" />
                            <div>
                                <h3 className='text-2xl font-semibold'>Emirates</h3>
                                <small>Airbus A320</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-10'>
                            <button className='bg-inherit'><IoIosAirplane/></button>
                            <button className='bg-inherit'><AiOutlineWifi/></button>
                            <button className='bg-inherit'><FaStopwatch/></button>
                            <button className='bg-inherit'><MdFastfood/></button>
                            <button className='bg-inherit'><MdOutlineAirlineSeatReclineNormal/></button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-12'>
                        <div className='flex items-center justify-center gap-3'>
                            <h3 className='text-2xl font-semibold'>12pm</h3>
                            <small>Newark(EWR)</small>
                        </div>

                        <div>
                            <button className='flex items-center justify-between gap-3 bg-inherit'>&larr; <IoIosAirplane className='text-4xl'/> &rarr;</button>
                        </div>

                        <div className='flex items-center justify-center gap-3'>
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