import React from 'react'

const Allbanners = (props) => {
    return (
        <div className='relative h-[30vh] rounded-xl my-5'>

                <img className='h-full w-full object-cover rounded-md' src={props.img} alt={props.alt} srcSet="" />
                <div className="bg-[#07366d]/40 absolute inset-0 z-10"></div>

                <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className='font-bold text-xl'>Up to 30% Off on </h1>
                    <h1 className='font-semibold text-xl'>MEN'S WEAR</h1>

                    <button className='mt-4 px-8 py-2 bg-red-600 rounded-xl'>Shop now</button>
                </div>
        </div>
    )
}

export default Allbanners
