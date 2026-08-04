import Card from './Cards';
import hoodie from '../../assets/hoodie.png';
import denimjacket from '../../assets/denimjecket.png';
import fusionwear from '../../assets/fusionwear.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Bestseller = () => {

  return (
    <div className='ml-2 py-5 '>


      <div className="text-2xl font-semibold mb-5">
        <h1>Best seller</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={2.5}
      >

        <SwiperSlide>
          <Card img={hoodie} alt="Hoodie" name='Cotton hoodie' price='2,999.00' newprice='1,999.00' />
        </SwiperSlide>

        <SwiperSlide>
          <Card img={denimjacket} alt="jacket" name='Denim jacket' price='3,999.00' newprice='2,999.00' />
        </SwiperSlide>

        <SwiperSlide>
          <Card img={fusionwear} alt="fusionwear" name='Fusion wear' price='4,999.00' newprice='3,999.00' />
        </SwiperSlide>

        <SwiperSlide>
          <Card img={fusionwear} alt="fusionwear" name='Fusion wear' price='4,999.00' newprice='3,999.00' />
        </SwiperSlide>


        <SwiperSlide>
          <Card img={fusionwear} alt="fusionwear" name='Fusion wear' price='4,999.00' newprice='3,999.00' />
        </SwiperSlide>


        <SwiperSlide>
          <Card img={fusionwear} alt="fusionwear" name='Fusion wear' price='4,999.00' newprice='3,999.00' />
        </SwiperSlide>


        <SwiperSlide>
          <Card img={fusionwear} alt="fusionwear" name='fusion wear' price='4,999.00' newprice='3,999.00' />
        </SwiperSlide>


      </Swiper>

    </div>

  )
}

export default Bestseller
