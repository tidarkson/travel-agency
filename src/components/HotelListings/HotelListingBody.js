import React from 'react'
import Istanbul from '../../images/istanbul.png'
import sydney from '../../images/sydney.png'
import baku from '../../images/baku.png'
import male from '../../images/male.png'
import { RiHotelFill } from 'react-icons/ri'
import landscape from '../../images/landscape.png'
import lake from '../../images/lake.png'
import trees from '../../images/trees.png'
import palm from '../../images/palm.png'


function HotelListingBody() {
    return (
        <>
            <section className='my-10 px-5 xl:px-20'>
                <div className=''>
                    <h3 className='text-3xl font-bold tracking-wide'>Your recent searches </h3>
                    <div className='grid grid-cols-2 gap-2 md:flex items-center justify-between pt-5'>
                        <div className='flex items-center justify-center'>
                            <img src={Istanbul} alt="" />
                            <div className='pl-2 xl:px-5'>
                                <p className='font-bold'>Istanbul, Turkey</p>
                                <small>325 places</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={sydney} alt="" />
                            <div className='pl-2 xl:px-5'>
                                <p className='font-bold'>Sydney, Australia</p>
                                <small>325 places</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={baku} alt="" />
                            <div className='pl-2 xl:px-5'>
                                <p className='font-bold'>Uyo, Nigeria</p>
                                <small>325 places</small>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={male} alt="" />
                            <div className='pl-2 xl:px-5'>
                                <p className='font-bold'>Male, Maldives</p>
                                <small>325 places</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mt-16'>
                        <div className='md:flex items-center justify-between'>
                            <div className='max-w-lg xl:max-w-3xl'>
                                <h2 className='text-3xl font-extrabold my-2 tracking-wide'>Fall into travel</h2>
                                <p className='text-sm md:text-base'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
                            </div>

                            <button className='mt-4 md:mt-0 font-semibold text-xs rounded border p-2 border-teal-200'>See all</button>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:flex gap-5 items-center justify-center my-10'>
                        <div className="melbourne rounded-2xl px-3 w-full">
                            <div className='flex items-center justify-between text-white gap-5 mx-auto mt-60 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                                <div>
                                    <h3 className='text-2xl font-semibold'>Melbourne</h3>
                                    <p className='text-base'>An amazing journey</p>
                                </div>
                                <p className='text-2xl font-semibold'>$700</p>
                            </div>
                            <button className='px-3 py-2 w-full flex items-center justify-center rounded-lg my-5 gap-1'><RiHotelFill />Book a Hotel</button>
                        </div>
                        <div className="paris rounded-2xl px-3">
                            <div className='flex justify-between text-white items-center gap-5 mx-auto mt-60 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                                <div>
                                    <h3 className='text-2xl font-semibold'>Paris</h3>
                                    <p>An amazing journey</p>
                                </div>
                                <p className='text-2xl font-semibold'>$700</p>
                            </div>
                            <button className='px-3 py-2 w-full flex items-center justify-center rounded-lg my-5 gap-1'><RiHotelFill />Book a Hotel</button>
                        </div>
                        <div className="london rounded-2xl px-3">
                            <div className='flex items-center justify-between text-white gap-5 mx-auto mt-60 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                                <div>
                                    <h3 className='text-2xl font-semibold'>London</h3>
                                    <p>An amazing journey</p>
                                </div>
                                <p className='text-2xl font-semibold'>$700</p>
                            </div>
                            <button className='px-3 py-2 w-full flex items-center justify-center rounded-lg my-5 gap-1'><RiHotelFill />Book a Hotel</button>
                        </div>
                        <div className="colombia rounded-2xl px-3">
                            <div className='flex items-center justify-between text-white gap-5 mx-auto mt-60 max-w-lg backdrop-brightness-50 p-5 rounded-2xl'>
                                <div>
                                    <h3 className='text-2xl font-semibold'>Colombia</h3>
                                    <p>An amazing journey</p>
                                </div>
                                <p className='text-2xl font-semibold'>$700</p>
                            </div>
                            <button className='px-3 py-2 w-full flex items-center justify-center rounded-lg mb-5 gap-1'><RiHotelFill />Book a Hotel</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='md:flex items-center justify-between'>
                        <div className='max-w-lg xl:max-w-3xl'>
                            <h2 className='text-3xl font-extrabold my-2 tracking-wide'>Fall into travel</h2>
                            <p className='text-sm md:text-base'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
                        </div>
                        <button className='mt-4 md:mt-0 font-semibold text-xs rounded border p-2 border-teal-200'>See all</button>
                    </div>

                    <div className='grid xl:grid-cols-2 items-center justify-center my-10 gap-3'>
                        <div className='lanka p-5 md:p-10 rounded-xl'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-4xl font-extrabold'>Backpacking Sri Lanka</h2>
                                <p className='bg-white px-3 py-1 rounded-lg'>From <br /><span className='font-semibold text-xl'>$700</span></p>
                            </div>
                            <p className='my-5'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>

                            <button className='px-3 py-2 w-full bg-white rounded-lg mb-4 mt-10 gap-1'>Book Flight</button>
                        </div>

                        <div className='grid mx-auto grid-cols-2 gap-3'>
                            <img src={landscape} alt="" />
                            <img src={lake} alt="" />
                            <img src={trees} alt="" />
                            <img src={palm} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotelListingBody