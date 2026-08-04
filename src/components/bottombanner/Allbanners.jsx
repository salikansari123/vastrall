import React from 'react'

const Allbanners = (props) => {
    return (
        <div className='relative h-[30vh] rounded-xl my-5'>

                <img className='h-full w-full object-cover rounded-md' src={props.img} alt={props.alt} srcSet="" />
                <div className="bg-[#07366d]/50 absolute inset-0 z-10"></div>

                <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className={'font-bold text-xl'}>{props.discount}</h1>
                    <h1 className={'font-semibold text-xl font-serif' + props.color}>{props.title}</h1>

                    <button className='mt-4 px-8 py-2 bg-linear-to-r from-blue-900 to-blue-700 text-white rounded-tl-xl rounded-br-xl shadow-2xl'>Shop now</button>
                </div>
        </div>
    )
}

export default Allbanners
