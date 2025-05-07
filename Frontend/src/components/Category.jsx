import React from 'react'
import shoe from "/shoes.jpg"
import polo from "/polo.jpg"
import wear4 from "/wears4.jpg"
import wear1 from "/wears1.jpg"
import wears3 from "/wears3.jpg"

const Category = () => {
  return (
    <div className='flex justify-evenly m-4 gap-6'>
      <div className='h-400px shadow bg-gray-50'>
       <img src={wear1} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>shoe</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={wear4} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>Shoe</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={wears3} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>polo</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={shoe} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>Shoe</span>
      </div>
      

    </div>
  )
}

export default Category
