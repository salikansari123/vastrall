import React from 'react'

const Trending = (props) => {
    
  return (
    <div className='relative h-40 w-full  bg-amber-500 rounded-2xl shadow-2xl'>
        <img className='w-full h-full object-cover rounded-md' src={props.img} alt={props.alt} srcSet="" />

        <div className='absolute flex inset-0 justify-center items-center bg-black/20'>
            <h1 className='py-1 px-5 bg-[#053e6f]/40 text-white font-bold uppercase rounded-md'>{props.name}</h1>
        </div>
      
    </div>
  )
}

export default Trending
