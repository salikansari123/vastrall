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
        <div className='bg-[#3E92CC] mt-10 text-center'>

            <div className="flex flex-col gap-10 items-center px-5 py-5">

                <Logo />

                <h1 className='text-sm text-white text-center font-semibold'>Elevate your everyday style
                    with Premium clothing for men, Women & Kids.</h1>

                <Icons />

                <div className="flex gap-15">

                    <Shop />

                    <Customersupport />

                </div>

                <Bottomtext img1={paypalimg} img2={upiimg} img3={masterimg} />

            </div>


            {/* copyright */}

            <div className="text-[10px] bg-black text-white w-full p-1">
                <h1 className=''>@ 2026 All Rights Reserved</h1>
                <h1>Crafted by Premium Fashion</h1>
            </div>


        </div>
    )
}

export default Footer
