import React from 'react'
import { IndianRupee, Heart, Star } from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="h-47 w-35 bg-black rounded-2xl shadow-2xl">

      <div className="bg-[#07366d] rounded-2xl relative h-27">
        <img className='w-full h-full object-contain' src={props.img} alt={props.alt}/>
        <div className='absolute top-2 right-2 text-white'>
          <Heart size={18} />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-2 mx-5 mt-1">

        <div className="text-sm text-white font-semibold">
          <h1>{props.name}</h1>
        </div>

        <div className="flex text-white gap-2">
          <h1 className='text-[12px] flex'><IndianRupee size={12} />{props.newprice} </h1>
          <h1 className='text-[8px] flex line-through mt-1'><IndianRupee size={10} />{props.price}</h1>
        </div>

        <div className="flex gap-1 ml-1">
          <Star color="#ffea00" fill='#ffea00' size={15}/>
          <Star color="#ffea00" fill='#ffea00' size={15}/>
          <Star color="#ffea00" fill='#ffea00' size={15}/>
          <Star color="#ffea00" fill='#ffea00' size={15}/>
          <Star color="#ffea00" size={15}/>
        </div>

      </div>

    </div>
  )
}

export default Cards
