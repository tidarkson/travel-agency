import React, {useState} from 'react'
import logo from '../images/footer logo.png'
import mailbox from '../images/mailbox.png'
import data from '../footer.json'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'


function Footer() {
    const [items] = useState(data)
  return (
    <>
        <footer className='xl:px-20'>
            <div className='grid grid-cols-2 mailbox p-5 rounded-lg'>
                <div className='my-auto'>
                    <h1 className='text-3xl font-bold'>Subscribe Newsletter</h1>
                    <h3 className='mt-5 font-bold'>The Travel</h3>
                    <p className='mb-5'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                    <div className='flex items-center justify-start'>
                        <input type="text" placeholder='your email address' className='text-sm py-2 px-3 mr-5 w-96 rounded'/>
                        <button className='bg-emerald-900 text-white px-3 py-2 text-sm rounded'>subscribe</button>
                    </div>
                </div>
                <div className='md:p-10'>
                    <img src={mailbox} alt="" className='w-full' />
                </div>
            </div>

            <div className='flex items-center justify-between p-5 md:p-10'>
                <div className=''>
                    <img src={logo} alt="" />
                    <div >
                        <ul className='flex items-center justify-center gap-3 my-5'>
                            <li><button><FaFacebook/></button></li>
                            <li><button><FaTwitter/></button></li>
                            <li><button><FaYoutube/></button></li>
                            <li><button><FaInstagram/></button></li>
                        </ul>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 xl:grid-cols-5 p-5 xl:px-20'>
                    {items.data.map((item) => {
                        const {id, title,contents}= item
                        return (
                            <div key={id} className="mx-2">
                                <h2 className='font-bold my-2'>{title}</h2>
                                <ul>
                                    {contents.map((content) =>
                                        <li className='text-xs md:text-sm tracking-widest'>{content}</li>
                                     )}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer