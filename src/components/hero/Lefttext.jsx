import React from 'react'

const Lefttext = (props) => {

    return (
        <div>

            <div className="max-w-350 mx-auto relative z-10 w-full">
                <div className="max-w-125 text-white flex flex-col gap-4">
                    <h1 className="text-2xl leading-[1.2] font-bold font-serif-heading">
                        {props.title}
                    </h1>
                    <h4 className="text-sm font-semibold leading-[1.4] text-slate-300 mr-10">
                        {props.description}
                    </h4>
                    <div className="pt-2">
                        <a href="#" className="inline-block bg-[#09224f] text-white font-semibold text-sm px-4 py-2 rounded-md shadow-2xl hover:bg-black transition">
                            {props.button}

                            <div className="hidden">{props.link}</div>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Lefttext
