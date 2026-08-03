import React from 'react'
import Card from './Cards'
import hoodie from '../../assets/hoodie.png'
import denimjacket from '../../assets/denimjecket.png'
import fusionwear from '../../assets/fusionwear.png'

const Bestseller = () => {
  return (
    <div className='ml-2 py-5 '>
        <div className="text-2xl font-semibold mb-5">
            <h1>Best seller</h1>
        </div>

        <div className="flex gap-2 overflow-hidden">
          <Card img={hoodie} alt="Hoodie" name='cotton hoodie' price='2,999.00' newprice='1,999.00'/>
          <Card img={denimjacket} alt="jacket" name='denim jacket' price='3,999.00' newprice='2,999.00'/>
          {/* <Card img={fusionwear} alt="fusionwear" name='fusion wear' price='4,999.00' newprice='3,999.00'/> */}
        </div>
      
    </div>
  )
}

export default Bestseller
