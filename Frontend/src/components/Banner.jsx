import React from 'react'

const Banner = () => {
  return (
    <div className="relative bg-[url('/banner1.jpg')] bg-no-repeat h-[80vh] bg-cover">

        

            <div className='pt-[70px] px-[10%] w-150'>
                <h1 className='text-2xl text-black font-semibold pb-[20px]'>Dress Beyond the Ordinary
                    this Summer with Styles that meets Sophistication.
                </h1>
                <p className='px-[20px] mb-[10px] text-2xl'>Elegance Redefined</p>
                 <div className='space-x-5 space-y-4'>
                    <button className='text-white bg-[#1F4529] rounded p-2 cursor-pointer'>Shop Now</button>
                    <button className='text-white bg-[#1F4529] rounded p-2 cursor-pointer'>Call+447423141830</button>
                 </div>

            </div>

        
    

    </div>
  )
}

export default Banner
