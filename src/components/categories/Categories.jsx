import React from "react";
import Menswear from './Menswear';
import Womenswear from './Womenswear';
import Kidswear from './Kidswear';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  

  return (

    <div className='max-w-350 mt-10 mx-auto px-4 py-5 bg-slate-200 rounded-xl mb-10'>

      <h2 className="text-xl font-semibold tracking-wide text-black mb-10 text-center">SHOP BY CATEGORIES</h2>

      {/* <Slider {...settings}> */}

        <div className='flex gap-4 md:gap-16'>

          <Menswear {...props} />
          <Womenswear {...props} />
          <Kidswear {...props} />

        </div>

      {/* </Slider> */}

    </div >
  )
}

export default Categories
