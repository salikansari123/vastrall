import React from 'react'
import Menswear from './Menswear'
import Womenswear from './Womenswear'
import Kidswear from './Kidswear'

const Categories = (props) => {
  return (
    <div className='mx-auto mb-8 mt-6 px-2 py-5'>
      <h2 className='mb-5 text-center text-[22px] font-bold uppercase tracking-[0.08em] text-[#1e1b18]'>Shop by categories</h2>

      <div className='flex items-center justify-between gap-3'>
        <Menswear {...props} />
        <Womenswear {...props} />
        <Kidswear {...props} />
      </div>
    </div>
  )
}

export default Categories
