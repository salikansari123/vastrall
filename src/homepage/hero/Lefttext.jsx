import React from 'react'

const Lefttext = (props) => {
    return (
        <div className='relative z-10 w-full'>
            <div className='max-w-[270px] text-white'>
                <h1 className='text-3xl font-bold leading-[1.1] tracking-tight'>
                    {props.title}
                </h1>
                <h4 className='mt-3 text-sm font-medium leading-[1.5] text-slate-200'>
                    {props.description}
                </h4>
                <div className='mt-5'>
                    <a href='#' className='inline-block rounded-full bg-[#f5f1e6] px-5 py-2 text-sm font-semibold text-[#0a2463] shadow-lg transition hover:bg-white'>
                        {props.button}
                        <div className='hidden'>{props.link}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Lefttext
