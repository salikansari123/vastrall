import React from 'react'
import Trending from './Trending'
import Newest from './Newest'
import Offer from './Offer'
import Trendingimg from '../../assets/trending.jpg'
import Newestimg from '../../assets/newest.jpg'
import Offerimg from '../../assets/offers.jpg'

const Promobanner = () => {

    return (
        <div className='mx-4 py-10 flex gap-2'>

            <Trending img={Trendingimg} alt='Trendingimg' name='trending' />

            <div className="flex flex-col gap-2 w-full">

                <Newest img={Newestimg} alt='Newestimg' name='newest' />

                <Offer img={Offerimg} alt='offers' name='Buy 1 Get 1 free' />

            </div>

        </div>
    )
}

export default Promobanner
