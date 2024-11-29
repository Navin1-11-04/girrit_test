import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-auto grid grid-cols-3 p-10 my-10">
      <h1 className='hero_txt uppercase font-bold flex flex-wrap w-full leading-tight tracking-tight col-span-2'>Hear the World, Redefined</h1>
      <p className='flex items-start justify-end text-wrap text-normal text-[#232323] w-full h-full flex-col'>
        "Discover premium headphones with crystal-clear sound, deep bass, and all-day comfort. Perfect for music, gaming, or travel, enjoy noise-canceling tech and long battery life."
        <br/><br/>
        <span className='font-[550] uppercase text-sm tracking-wider'>Hear every beat, feel every moment.</span>
      </p>
    </div>
  )
}

export default Hero