import React, { useState } from 'react'
import { Menu, Logs, House, LibraryBig, BadgePercent, Info, Phone } from 'lucide-react'

const Menubar = () => {
  const [isopen, setIsopen] = useState(false)

  return (
    <div className='relative mt-1'>
      <button
        type='button'
        onClick={() => setIsopen(!isopen)}
        className='flex items-center justify-center text-[#0a2463] md:hidden'
        aria-label='Toggle menu'
      >
        {isopen ? <Logs size={20} /> : <Menu size={20} />}
      </button>

      {isopen && (
        <div className='absolute left-0 top-10 z-50 h-auto w-60 rounded-r-xl bg-[#0a2463] shadow-lg'>
          <ul className='flex flex-col gap-3 p-5 text-sm font-semibold tracking-wide text-white'>
            <li className='flex gap-2'><House size={18} /><a href='#'>Home</a></li>
            <li className='flex gap-2'><LibraryBig size={18} /><a href='#'>Collection</a></li>
            <li className='flex gap-2'><BadgePercent size={18} /><a href='#'>Offer</a></li>
            <li className='flex gap-2'><Info size={18} /><a href='#'>About</a></li>
            <li className='flex gap-2'><Phone size={18} /><a href='#'>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Menubar
