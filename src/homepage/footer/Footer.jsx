import React from 'react'
import Icons from './Icons'
import Logo from '../navigation/Logo'
import Shop from './Shop'
import Customersupport from './Customersupport'
import paypalimg from '../../assets/pay-pal.png'
import upiimg from '../../assets/upi.png'
import masterimg from '../../assets/master-card.png'
import Bottomtext from './Bottomtext'

const Footer = () => {
    return (
        <div className='mt-10 bg-[#0a2463] text-center'>
            <div className='flex flex-col items-center gap-8 px-5 py-8 text-white'>
                <Logo />

                <h1 className='max-w-260px text-sm font-semibold leading-6 text-white/90'>
                    Elevate your everyday style with Premium clothing for men, women & kids.
                </h1>

                <Icons />

                <div className='flex w-full justify-between gap-8 px-1 text-left'>
                    <Shop />
                    <Customersupport />
                </div>

                <Bottomtext img1={paypalimg} img2={upiimg} img3={masterimg} />
            </div>

            <div className='w-full bg-black p-2 text-center text-[10px] text-white'>
                <h1>@ 2026 All Rights Reserved</h1>
                <h1>Crafted by Premium Fashion</h1>
            </div>
        </div>
    )
}

export default Footer
