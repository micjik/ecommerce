import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Promotional = () => {
  return (
    <div className='flex justify-center items-center h-[40px] bg-[#1F4529] text-white'>
      <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
    </div>
  )
}

export default Promotional
