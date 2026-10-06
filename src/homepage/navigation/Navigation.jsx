import React from 'react'
import { Search } from 'lucide-react'
import Logo from './Logo'
import Icons from './Icons'
import Topbar from './Topbar'
import Menu from './Menubar'

const Navigation = () => {
  return (
    <div className='bg-white'>
      <Topbar />

      <div className='flex items-center justify-between px-4 py-3'>
        <Menu />
        <Logo />
        <Icons />
      </div>

      <div className='border-t border-[#efeae2] bg-white px-4 pb-3'>
        <div className='mt-3 flex items-center gap-2 rounded-md bg-[#f2f0ee] px-3 py-2.5 shadow-sm'>
          <Search size={16} className='text-[#0a2463]' />
          <input
            type='text'
            placeholder='Search products, brands...'
            className='w-full border-0 bg-transparent text-sm text-[#1e1b18] placeholder:text-[#6b7280] outline-none'
            aria-label='Search products'
          />
        </div>
      </div>
    </div>
  )
}

export default Navigation
