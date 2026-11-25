import { useState } from 'react'
import './App.css'
import { MdChevronRight } from 'react-icons/md'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { FiSliders } from 'react-icons/fi'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import product from './assets/tshirt.png';

function App() {
  const [count, setCount] = useState(0)

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
      <div className='w-full h-15 flex justify-center items-center'>
        <ul className=' w-5/6 h-5 flex items-center gap-1.5'>
          <h1 className='font-light'>Home</h1>
          <MdChevronRight />
          <h1>Casual</h1>
        </ul>
      </div>
      <section className=' w-full h-full flex justify-center'>
        <div className=' w-5/6 h-full flex gap-6'>
          <div className=' w-70 h-290 text-lg flex justify-start p-3 flex-col border-2 border-gray-300 rounded-xl'>
            <ul className='flex justify-between items-center border-b-2 border-b-gray-200 py-4'>
              <h1 className='font-bold'>Filters</h1>
              <FiSliders className='text-gray-500 w-7' />
            </ul>
            <ul className='py-4 flex flex-col gap-2 border-b-2 border-b-gray-200'>
              <ul className='flex justify-between items-center'>
                <li>Tshirts</li>
                <MdChevronRight />
              </ul>
              <ul className='flex justify-between items-center'>
                <li>Shorts</li>
                <MdChevronRight />
              </ul>
              <ul className='flex justify-between items-center'>
                <li>Shirts</li>
                <MdChevronRight />
              </ul>
              <ul className='flex justify-between items-center'>
                <li>Hoodie</li>
                <MdChevronRight />
              </ul>
              <ul className='flex justify-between items-center'>
                <li>Jeans</li>
                <MdChevronRight />
              </ul>
            </ul>
            <div className=' border-b-2 border-b-gray-300 py-3'>
              <ul className='flex justify-between items-center py-3'>
                <li className='font-bold'>Price</li>
                <GoChevronUp />
              </ul>
              <div className='ml-2 w-55 h-1 bg-gray-500 rounded-4xl flex justify-center items-center relative my-2'>
                <div className='bg-black w-3 h-3 rounded-full'></div>
                <div className='bg-black h-1 w-25'></div>
                <div className='bg-black w-3 h-3 rounded-full'></div>
              </div>
              <ul className='flex justify-evenly gap-7 text-sm py-2 font-semibold'>
                <li>$50</li>
                <li>$200</li>
              </ul>
            </div>
            <div className=' border-b-2 border-b-gray-300 py-3'>
              <ul className='flex justify-between items-center py-2'>
                <li className='font-bold'>Colors</li>
                <GoChevronUp />
              </ul>
              <div className='py-2 flex flex-col gap-2'>
                <ul className='flex justify-between'>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-green-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-red-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-yellow-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-orange-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-blue-400'></li>
                </ul>
                <ul className='flex justify-between'>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-blue-950'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-purple-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-pink-700'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-white'></li>
                  <li className='w-8 h-8 rounded-full border border-gray-500  bg-black'></li>
                </ul>
              </div>
            </div>
            <div className=' border-b-2 border-b-gray-300 py-3'>
              <ul className='flex justify-between items-center py-2'>
                <li className='font-bold'>Size</li>
                <GoChevronUp />
              </ul>
              <ul className='grid grid-flow-row grid-cols-2 py-2'>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>XX-Small</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>X-Small</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>Small</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>Medium</li>
                <li className='bg-black text-white flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>Large</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>X-Large</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>XX-Large</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>3X-Large</li>
                <li className='bg-gray-200 flex justify-center items-center my-1 rounded-4xl w-20 h-9 text-sm'>4X-Large</li>
              </ul>
            </div>
            <div className='  py-3'>
              <ul className='flex justify-between items-center py-2'>
                <li className='font-bold'>Dress Style</li>
                <GoChevronUp />
              </ul>
              <ul className='py-2 flex flex-col gap-1.5'>
                <ul className='flex justify-between items-center'>
                  <li>Casual</li>
                  <MdChevronRight />
                </ul>
                <ul className='flex justify-between items-center'>
                  <li>Formal</li>
                  <MdChevronRight />
                </ul>
                <ul className='flex justify-between items-center'>
                  <li>Party</li>
                  <MdChevronRight />
                </ul>
                <ul className='flex justify-between items-center'>
                  <li>Gym</li>
                  <MdChevronRight />
                </ul>
              </ul>
              <button className='bg-black text-white w-60 rounded-4xl my-3 h-10'>Apply Filter</button>
            </div>
          </div>
          <div className=' w-5/6 h-full'>
            <ul className='flex justify-between'>
              <li className='text-3xl font-semibold'>Casual</li>
              <ul className='flex items-center gap-2'>
                <li className='font-light'>Showing 1-10 of 100 products</li>
                <li className='font-light'>Sort by: <span className='font-semibold'>Most Popular</span></li>
                <GoChevronDown />
              </ul>
            </ul>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-3 sm:gap-3 lg:grid-cols-3 xl:grid-cols-3 lg:gap-3 gap-x-0 gap-y-7 mt-5'>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>3.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>4.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <span>5.0/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>3.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>4.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <span>5.0/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>3.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStarHalf className='text-yellow-300' />
                    <span>4.5/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
              <ul className='flex flex-col'>
                <img src={product} alt="Product" className='w-85' />
                <div className='p-3'>
                  <h1 className=' font-semibold text-lg'>Polo with Tipping Details</h1>
                  <ul className='flex items-center gap-1.5'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <span>5.0/5</span>
                  </ul>
                  <h1 className='font-bold text-2xl'>$180</h1>
                </div>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default App
