import React from 'react'
import Lefttext from './Lefttext'
import heroImg from '../../assets/hero.png'

const Hero = (props) => {
  return (
    <div className='pt-0'>
      <div
        className='relative flex min-h-[310px] flex-col justify-center overflow-hidden rounded-b-lg bg-cover bg-center px-5 py-8'
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-[#0a2463] via-[#0a346f]/85 to-transparent' />
        <Lefttext {...props} />
      </div>
    </div>
  )
}

export default Hero
