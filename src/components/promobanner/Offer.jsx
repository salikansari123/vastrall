import React from 'react'

const Offer = (props) => {
  return (
    <div>
         <div className='h-14 w-30 rounded-2xl relative shadow-2xl'>
        <img className='h-full w-full object-cover rounded-md' src={props.img} alt={props.alt} srcSet="" />

        <div className="absolute inset-0 flex justify-center items-center bg-black/20">
            <h1 className='py-1 px-2 font-bold uppercase text-white bg-[#053e6f]/40 rounded-sm text-[10px]'>{props.name}</h1>
        </div>
      
    </div>
      
    </div>
  )
}

export default Offer
