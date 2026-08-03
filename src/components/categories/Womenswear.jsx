import React from 'react'
import { Heart } from 'lucide-react';

const Womenswear = (props) => {
    return (
        <div className='min-h-30 min-w-30 rounded-full p-3 relative bg-linear-to-tr from-[#0b407b]/70 via-slate-300/70 to-[#0b407b]/30 shadow-2xl'>

            <a href="/menswear" className='flex flex-col items-center'>

                <Heart size="40" className='text-red-700 ' />
                <div className='border-b-2 mt-1 shadow-2xl min-w-20'></div>
                <h1 className='font-semibold mt-1 text-sm'>Women's wear</h1>

            </a>

        </div>
    )
}

export default Womenswear;
