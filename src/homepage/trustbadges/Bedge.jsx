import React from 'react'
import {Truck, Lock, RefreshCcw,    Headset } from 'lucide-react'

const Bedge = () => {
  return (
    <div className='mx-auto py-5'>
        
         <div className="flex flex-col gap-3 px-5 ">

             {/* Badge 1  */}
            <div className="bg-[#dfe9ef] shadow-md rounded-xl p-4 flex items-center justify-center gap-4 min-h-10">
                <div className="pl-2">
                      <Truck size={25} />
                </div>
                <div>
                    <h3 className="text-[11px] font-bold text-[#d13146] uppercase">FREE SHIPING</h3>
                    <p className="text-[10px] text-black font-medium">On order over $100</p>
                </div>
            </div>

            {/* <!-- Badge 2 --> */}

            <div className="bg-[#dfe9ef] shadow-md rounded-xl p-4 flex items-center justify-center gap-4">
                <div className="pl-2">
                  <Lock size={25} />
                </div>
                <div>
                    <h3 className="text-[11px] font-bold text-[#d13146] uppercase">Secure Payment</h3>
                    <p className="text-[10px] text-black font-medium">100% secure cash</p>
                </div>
            </div>

            {/* <!-- Badge 3 --> */}

            <div className="bg-[#dfe9ef] shadow-md rounded-xl p-4 flex items-center justify-center gap-4">
                <div className="pl-2">
                    <RefreshCcw size={25} />
                </div>
                <div>
                    <h3 className="text-[11px] font-bold text-[#d13146] uppercase">Easy Return</h3>
                    <p className="text-[10px] text-black font-medium">30-day Return</p>
                </div>
            </div>

            {/* <!-- Badge 4 --> */}

            <div className="bg-[#dfe9ef] shadow-md rounded-xl p-4 flex items-center justify-center gap-4">
                <div className="pl-2">
                  <Headset size={25} />
                </div>
                <div>
                    <h3 className="text-[11px] font-bold text-[#d13146] uppercase">24/7 Support</h3>
                    <p className="text-[10px] text-black font-medium">Always here to help</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Bedge
