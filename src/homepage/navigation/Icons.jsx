import React from 'react'
import { Search, ShoppingBag } from 'lucide-react';

const Icons = () => {
  return (
    <div className='flex items-center gap-3 text-[#0a2463]'>
      <button type='button' aria-label='Search' className='p-1'>
        <Search size={18} />
      </button>
      <button type='button' aria-label='Cart' className='p-1'>
        <ShoppingBag size={18} />
      </button>
    </div>
  )
}

export default Icons
