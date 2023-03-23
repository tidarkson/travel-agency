import React, {useState} from 'react'
import data from '../reviews.json'
import {AiFillStar} from 'react-icons/ai'

function Reviews() {
  const [cards] = useState(data)
  const [isTruncated, setIsTruncated] = useState(true)
  return (
    <>
        <section className='px-5 md:px-20 my-10'>
        <div className='md:flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-extrabold my-2'>Reviews</h2>
                        <p className=''>What people say about Golobe facilities</p>
                    </div>

                    <button className='mt-4 font-semibold text-xs rounded border p-2 border-teal-200'>See all</button>
                </div>
          <div className='grid md:grid-cols-3 mb-16 mt-8 xl:gap-12 xl:px-5 '>
            {cards.data.map((card) => {
              const {id, title, desc, name, image, google, tag} = card

              return (
                <div key={id} className="outline-offset-0 rounded-lg p-5 shadow shadow-slate-300">
                  <h2 className='text-xl font-bold my-5'>{title}</h2>
                  <p className='text-sm'>{isTruncated ? `${desc.substring(0, 50)}...`: `${desc}`}</p>
                  <button className='font-bold bg-inherit text-center text-xs pb-3 md:p-5' onClick={()=>setIsTruncated(!isTruncated)}>view more</button>
                  <div className='flex items-center justify-start md:my-3'>
                    <AiFillStar className='fill-yellow-500'/>
                    <AiFillStar className='fill-yellow-500'/>
                    <AiFillStar className='fill-yellow-500'/>
                    <AiFillStar className='fill-yellow-500'/>
                    <AiFillStar className='fill-yellow-500'/>
                  </div>
                  <small className='font-bold'>{name}</small>
                  <p className='text-sm'>{tag}</p>
                  <div className='flex items-center justify-start gap-3 my-2'>
                  <img src={google} alt="Google"/>
                  <small>Google</small>
                  </div>
                  <img src={image} alt="" className='mt-10 w-full'/>
                </div>
              )
            })}
          </div>
        </section>
    </>
  )
}

export default Reviews