"use client"; // This directive tells Next.js this is a client component

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Page() {
  const router = useRouter();

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push('/dashboard');
  };

  const signin = () => {
    console.log("Signin up page");
    router.push("/signup");
  }

  return (
    <div className='flex lg:flex-row flex-col justify-center gap-10'>
      <div className='h-48 w-48 flex mt-36 mr-72'>
        <Image src="/next.svg" alt="Next.js logo" width={192} height={192} />
      </div>
      <div className='flex flex-col mt-16 border-solid border-2 border-black rounded-lg'>
        <div className='ml-20 mr-20 mt-10 mb-10 '>
          <h2 className='text-2xl mb-4 text-black font-bold'>Login</h2>
          <form className='flex flex-col gap-4' onSubmit={handleLogin}>
            <div>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                placeholder="Enter phone number"
                className='border border-gray-300 rounded-lg py-2 px-6 w-full' 
              />
            </div>
            <div>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password"
                className='border border-gray-300 rounded-lg py-2 px-6 w-full' 
              />
              <div className='text-right mt-2'>
                <a href="#" className='text-blue-500'>Forgot Password?</a>
              </div>
            </div>
            <button type="submit" className='bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400 rounded-lg text-white p-2 mt-8'>Login</button>
          </form>
          <p className="mt-12">
            Didn’t have an account? 
            <button onClick={signin} className=" ml-1">Register Now</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;
