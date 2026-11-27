import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'

const Navbar = () => {
  return (
    <>
      <div className='bg-black text-white w-full h-7 flex justify-center md:mx-0'>Sign up and get 20% off to your first order. Sign Up Now.</div>
                  <nav className='flex w-full h-20 justify-center'>
                    <div className='w-5/6 flex justify-between items-center border-b-2 border-b-gray-200'>
                      <h1 className='font-extrabold text-3xl'>SHOP.CO</h1>
                      <ul className='flex justify-between gap-10'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                      </ul>
                      <ul className='flex bg-gray-200 w-150 h-10 rounded-4xl justify-start items-center gap-2 pl-3'>
                        <li><CiSearch /></li>
                        <li><input type="text" placeholder='Search for products...' className='border-none outline-none' /></li>
                      </ul>
                      <ul className='flex px-5 gap-5'>
                        <CiShoppingCart className='h-7 w-7' />
                        <CgProfile className='h-6 w-6' />
                      </ul>
                    </div>
                  </nav>
    </>
  )
}

export default Navbar
