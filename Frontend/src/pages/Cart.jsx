import React from 'react'
import shoe from '/shoes.jpg'
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className='bg-gray-100'>

       <h1 className='p-7'>ShoppingCart</h1>
        
       <h2 className='pl-7'>Your items</h2>

       <div className='pl-4 flex gap-6'>
      
      <div className='w-[70%] shadow-md p-4 flex gap-8'>
      
        <div>
        
         <img src={shoe} alt="" height={150} width={150} className='mt-4' />
         </div>
         <div className='mt-10'>
          <p>Mekis Grapeseed & Sweet Almond oil 300ml for dull</p>
          <p className='text-gray-700'>what is good about almond oil with grape seed combo for your skin and hair</p>
         </div>
         <div className='mt-8'>
         <span className='mt-8'>$90</span>
         <span className='bg-red-600 text-red-600'><AiTwotoneDelete /></span>
         </div>

         
          

      </div>

      <div className='w-[30%] shadow-md'>
         <h3 className='pl-10'>Order Summary</h3>
         <div className='flex justify-evenly space-x-4'>
          <h4>SubTotal</h4>
           <span>$90</span>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
