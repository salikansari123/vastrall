import React from 'react'
import { Shirt } from 'lucide-react';

const Menswear = (props) => {

  return (
    <div className='h-25 w-25 rounded-full p-3 relative bg-linear-to-tr from-[#0b407b]/50 via-slate-300/70 to-[#0b407b]/50 shadow-2xl'>

      <a href="/menswear" className='flex flex-col items-center'>

        <Shirt size="40" className='text-[#0b407b] '/>
        <div className='border-b-2 mt-1 shadow-2xl min-w-20'></div>
        <h1 className='font-semibold mt-1 text-[12px]'>Men's wear</h1>

      </a>

    </div>
  )
}

export default Menswear; 
