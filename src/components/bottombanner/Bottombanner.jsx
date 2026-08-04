import Allbanners from './Allbanners';
import Mensimage from '../../assets/menswear-discount.jpg';
import Womensimage from '../../assets/womens-discount.jpg';
import Kidsimage from '../../assets/kids-discount.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Bottombanner = () => {
  return (
    <div className='flex'>

       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >

      <SwiperSlide>
        <Allbanners  img={Mensimage} alt="mensimg" title="MEN'S WEAR" discount="Up to 30% Off" color="text-white" />
      </SwiperSlide>

      <SwiperSlide>
        <Allbanners  img={Womensimage} alt="womensimg" title="WOMEN'S WEAR" discount="Up to 40% Off" color="text-sky-300" />
      </SwiperSlide>

      <SwiperSlide>
        <Allbanners  img={Kidsimage} alt="kidsimg" title="KID'S WEAR" discount="Up to 50% Off" color='text-pink-400'  />
      </SwiperSlide>


      </Swiper>

    </div>
  )
}

export default Bottombanner
