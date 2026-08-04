import React, {useState} from 'react'
import { Menu, Logs, House, LibraryBig, BadgePercent, Info, Phone  } from 'lucide-react'

const Menubar = () => {

  const [isopen, setIsopen] = useState(false);

  return (
    <div className='mt-2'>

      <div onClick={() => setIsopen(!isopen)} className="relative md:hidden">

       {isopen ? <Logs /> : <Menu />}

      </div>

      {isopen && (

        <div className="absolute z-90 top-18 left-0 h-100 w-[80%] bg-[#07366d] transform duration-300 rounded-r-md">

          <ul className="flex flex-col text-white font-sans gap-3 p-7 text-sm font-semibold tracking-wide">

            <li className='flex gap-2'><House size={18}/><a href="" >Home</a></li>
            <li className='flex gap-2'><LibraryBig size={18}/><a href="">Collection</a></li>
            <li className='flex gap-2'><BadgePercent size={18}/><a href="">Offer</a></li>
            <li className='flex gap-2'><Info size={18}/><a href="">About</a></li>
            <li className='flex gap-2'><Phone size={18}/><a href="">Contact</a></li>

          </ul>

        </div>

      )}

    </div>
  )
}

export default Menubar
