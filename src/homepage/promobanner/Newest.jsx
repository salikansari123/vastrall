import React from 'react'

const Newest = (props) => {
  return (
    <div className='h-19 w-full rounded-2xl relative shadow-2xl'>
        <img className='h-full w-full object-cover rounded-md' src={props.img} alt={props.alt} srcSet="" />

        <div className="absolute inset-0 flex justify-center items-center bg-black/20 ">
            <h1 className='py-1 px-2 font-bold uppercase text-white bg-[#053e6f]/40 rounded-sm text-sm'>{props.name}</h1>
        </div>
      
    </div>
  )
}

export default Newest
