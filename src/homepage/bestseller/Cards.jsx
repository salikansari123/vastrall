import React from 'react'
import { IndianRupee, Heart, Star } from 'lucide-react'

const Cards = (props) => {
  return (
    <div className='w-[170px] overflow-hidden rounded-[20px] border border-[#f1efe9] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]'>
      <div className='relative h-[170px] overflow-hidden bg-[#eaf1fa]'>
        <span className='absolute left-2 top-2 z-10 rounded-full bg-[#0a2463] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white'>
          New
        </span>

        <img className='h-full w-full object-cover' src={props.img} alt={props.title} />

        <button
          type='button'
          aria-label='Add to wishlist'
          className='absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0a2463] shadow-sm'
        >
          <Heart size={14} />
        </button>
      </div>

      <div className='space-y-2 px-3 pb-3 pt-2.5'>
        <div className='text-[13px] font-semibold text-[#1e1b18]'>{props.title}</div>

        <div className='flex items-center gap-2 text-[#0a2463]'>
          <span className='flex items-center text-sm font-bold'>
            <IndianRupee size={12} />
            {props.price}
          </span>
          <span className='flex items-center text-[10px] font-medium text-[#8b8a88] line-through'>
            <IndianRupee size={9} />
            {props.oldprice}
          </span>
        </div>

        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={11}
              color={index < 4 ? '#f9b234' : '#d1d5db'}
              fill={index < 4 ? '#f9b234' : 'none'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
