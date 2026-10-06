import React from 'react'
import { Shirt } from 'lucide-react'

const Menswear = (props) => {
  return (
    <div className='flex w-[100px] flex-col items-center gap-2'>
      <a href='/menswear' className='flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#eef4fd] shadow-[0_10px_20px_rgba(10,36,99,0.12)]'>
        <Shirt size={36} className='text-[#0a2463]' />
      </a>
      <h3 className='text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1e1b18]'>Men's wear</h3>
    </div>
  )
}

export default Menswear
