import React from 'react'
import { Heart } from 'lucide-react'

const Womenswear = (props) => {
  return (
    <div className='flex w-[100px] flex-col items-center gap-2'>
      <a href='/womenswear' className='flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#fdf0f1] shadow-[0_10px_20px_rgba(10,36,99,0.12)]'>
        <Heart size={34} className='text-[#d13a52]' />
      </a>
      <h3 className='text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1e1b18]'>Women's wear</h3>
    </div>
  )
}

export default Womenswear
