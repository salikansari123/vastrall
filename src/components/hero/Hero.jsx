import React from 'react'
import Lefttext from './Lefttext'
import heroImg from '../../assets/hero.png'

const Hero = (props) => {
  
  return (
    <div>

      <div className='relative bg-cover bg-center h-100 flex flex-col px-5 justify-center' style={{backgroundImage:`url(${heroImg})`}}>

        <div className="absolute inset-0 bg-linear-to-r from-[#07366d] via-[#0a488e]/70 to-transparent">
        </div>

        <Lefttext {...props} />
        
      </div> 

    </div>
  )
}

export default Hero
