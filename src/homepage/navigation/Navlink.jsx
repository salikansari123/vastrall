import React from 'react'

const Navlink = () => {
  return (
    <div >
        <nav className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-wider font-sans">
                <a href="#" className="text-black">HOME</a>
                <a href="#" className="text-black hover:text-[#0b407b]">COLLECTION</a>
                <a href="#" className="text-black hover:text-[#0b407b]">OFFERS</a>
                <a href="#" className="text-black hover:text-[#0b407b]">ABOUT</a>
                <a href="#" className="text-black hover:text-[#0b407b]">CONTACT</a>
            </nav>
    </div>
  )
}

export default Navlink
