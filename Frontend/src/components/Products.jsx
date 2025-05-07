import React from 'react'
import children from "/children1.jpg"

const Products = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className=' w-[300px] h-[350px]'>
         <img src={children} alt="" className='h-[300px] w-[300px] bg-cover' />
         <h2 className='text-center'>Linen Blend Shirt</h2>
         <span className='block text-center'>$ 49</span>
          

      </div>
      <div className=' w-[300px] h-[350px]'>
         <img src={children} alt="" className='h-[300px] w-[300px] bg-cover' />
         <h2 className='text-center'>Linen Blend Shirt</h2>
         <span className='block text-center'>$ 49</span>
          

      </div>
      <div className=' w-[300px] h-[350px]'>
         <img src={children} alt="" className='h-[300px] w-[300px] bg-cover' />
         <h2 className='text-center'>Linen Blend Shirt</h2>
         <span className='block text-center'>$ 49</span>
          

      </div>
      <div className=' w-[300px] h-[350px]'>
         <img src={children} alt="" className='h-[300px] w-[300px] bg-cover' />
         <h2 className='text-center'>Linen Blend Shirt</h2>
         <span className='block text-center'>$ 49</span>
          

      </div>
    </div>
  )
}

export default Products
