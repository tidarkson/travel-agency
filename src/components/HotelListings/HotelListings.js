import React from 'react'
import Header from '../FlightListing/Header'
import HotelListing from './HotelListing'
import HotelListingBody from './HotelListingBody'

function HotelListings() {
  return (
    <>
        <Header/>
        <HotelListing/>
        <HotelListingBody/>
    </>
  )
}

export default HotelListings