import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import Product1 from '../assets/gradient_tshirt.png';
import Product2 from '../assets/polo_tshirt.png';
import Product3 from '../assets/jeans_pant.png';
import { GoArrowRight } from 'react-icons/go';
import { HiTrash } from 'react-icons/hi';

const Cart = () => {
  return (
    <>

          <div className='w-full h-15 flex justify-center items-center'>
              <ul className=' w-5/6 h-5 flex items-center gap-1.5'>
                  <h1 className='font-light'>Home</h1>
                  <MdChevronRight />
                  <h1>Cart</h1>
              </ul>
          </div>
          <section className='w-full h-full flex justify-center'>
                <div className='w-5/6'>
                <h1 className='text-3xl font-bold py-3'>YOUR CART</h1>
                <div className='flex gap-6'>
                    <div className='w-4/6 flex flex-col gap-4 border border-gray-300 rounded-2xl p-2'>
                    <div className='flex items-center gap-3 m-3 border-b border-b-gray-400 pb-5 justify-between'>
                      <div className='flex items-center gap-3'>
                        <img src={Product1} alt="Product1" className='w-30' />
                              <div>
                                  <h1 className='text-lg font-semibold'>Gradient Graphic T-shirt</h1>
                                  <p className='text-sm font-extralightlight'>Size: Large</p>
                                  <p className='text-sm font-extralightlight'>Color: White</p>
                                  <h1 className='text-lg font-semibold'>$145</h1>
                              </div>
                      </div>
                      <div className=' h-full flex flex-col justify-between items-end px-3'>
                        <HiTrash className='h-10 w-7 text-red-600 ' />
                        <h1 className='text-xl font-medium bg-gray-200 w-30 h-10 rounded-3xl flex justify-center items-center'><pre>- 1 +</pre></h1>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 m-3 border-b border-b-gray-400  pb-5 justify-between'>
                        <div className='flex items-center gap-3'>
                          <img src={Product2} alt="Product2" className='w-30' />
                              <div>
                                  <h1 className='text-lg font-semibold'>Checkered Shirt</h1>
                                  <p className='text-sm font-extralightlight'>Size: Medium</p>
                                  <p className='text-sm font-extralightlight'>Color: Red</p>
                                  <h1 className='text-lg font-semibold'>$180</h1>
                              </div>
                        </div>
                        <div className=' h-full flex flex-col justify-between items-end px-3'>
                        <HiTrash className='h-10 w-7 text-red-600 ' />
                        <h1 className='text-xl font-medium bg-gray-200 w-30 h-10 rounded-3xl flex justify-center items-center'><pre>- 1 +</pre></h1>
                      </div>
                      </div>
                    <div className='flex items-center gap-3 m-3 pb-5 justify-between'>
                      <div className='flex items-center gap-3'>
                        <img src={Product3} alt="Product2" className='w-30' />
                              <div>
                                  <h1 className='text-lg font-semibold'>Skinny Fit Jeans</h1>
                                  <p className='text-sm font-extralightlight'>Size: Large</p>
                                  <p className='text-sm font-extralightlight'>Color: Blue</p>
                                  <h1 className='text-lg font-semibold'>$240</h1>
                              </div>
                      </div>
                      <div className=' h-full flex flex-col justify-between items-end px-3'>
                        <HiTrash className='h-10 w-7 text-red-600 ' />
                        <h1 className='text-xl font-medium bg-gray-200 w-30 h-10 rounded-3xl flex justify-center items-center'><pre>- 1 +</pre></h1>
                      </div>
                    </div>
                    
                    
                    </div>
                      <div className='w-2/6 border border-gray-300 rounded-2xl h-100'>
                      <div className='border-b border-gray-300 flex flex-col gap-3 p-5'>
                          <h2 className='text-xl font-semibold'>Order Summary</h2>
                          <ul className='flex justify-between'>
                            <li className='text-sl font-extralight'>Subtotal</li>
                            <li className='text-lg font-semibold'>$565</li>
                          </ul>
                          <ul className='flex justify-between'>
                            <li className='text-sl font-extralight'>Discount (-20%)</li>
                            <li className='text-lg font-semibold text-red-600'>-$113</li>
                          </ul>
                          <ul className='flex justify-between'>
                            <li className='text-sl font-extralight'>Delivery Fee</li>
                            <li className='text-lg font-semibold'>$15</li>
                          </ul>
                          </div>
                      <ul className='flex justify-between p-5'>
                        <li className='text-xl font-extralightsemibold'>Total</li>
                        <li className='text-xl font-semibold'>$467</li>
                      </ul>
                      <ul className='px-5 flex gap-2'>
                        <li><input type="text" placeholder='Add promo code' className='w-80 h-10 bg-gray-200 rounded-4xl px-2'/></li>
                        <li><button className='bg-black text-white w-25 h-10 rounded-4xl'>Apply</button></li>
                      </ul>
                      <ul className='bg-black text-white w-106 h-12 rounded-4xl m-5 flex justify-center items-center gap-2'>
                        <button>Go to Checkout</button>
                        <GoArrowRight />
                      </ul>
                      </div>
                </div>
                </div>
          </section>
    </>
  )
}

export default Cart
