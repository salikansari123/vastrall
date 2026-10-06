import React from 'react'

const Bottomtext = (props) => {
    return (
        <div className="text-center flex flex-col gap-5 ">

            <div className="flex text-white font-bold text-sm gap-5">
                <h1>Term and Condition</h1>
                <h1>Privacy Policy</h1>
            </div>

            <div className="text-white font-bold ">
                <h1>Secured Payment</h1>
            </div>

            <div className="flex gap-4 ml-3">

                <img className='h-8 w-15 rounded-sm' src={props.img1} alt="mastercard" srcSet="" />
                <img className='h-8 w-15 rounded-sm' src={props.img2} alt="mastercard" srcSet="" />
                <img className='h-8 w-15 rounded-sm' src={props.img3} alt="mastercard" srcSet="" />

            </div>

        </div>
    )
}

export default Bottomtext
