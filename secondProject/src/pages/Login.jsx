import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <>
      <section className='w-full h-175 flex justify-center items-center'>
                    <div className='w-150 flex flex-col gap-6 items-center'>
                        <h1 className='text-2xl font-bold'>SHOP.CO</h1>
                        <h1 className='text-3xl font-bold'>Welcome back</h1>
                        <ul className='flex border border-gray-300 w-80 h-12 rounded-3xl items-center pl-3 gap-12'>
                          <FcGoogle size={24}/>
                        <button>Continue with Google</button>
                        </ul>
                        <p>or</p>
                        <input type="email" placeholder='Enter email or username' className='border border-gray-300 rounded-lg w-80 h-12 px-4'/>
                        <button className='bg-blue-950 text-white w-80 h-12 rounded-3xl'>Continue</button>
                        <p className='font-extralight'>By continuing, you agree to our <span className='underline'>Terms</span> and <span className='underline'>Privacy Policy</span></p>
                        <p className='font-extralight pb-3'>Don't have an account? <span className='underline'>Sign up</span></p>
                    </div>
               </section>
    </>
  )
}

export default Login
