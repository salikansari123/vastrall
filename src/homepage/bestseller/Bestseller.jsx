import Card from './Cards';

import hoodie from '../../assets/hoodie.png';
import denimjecket from '../../assets/denimjecket.png';
import fusionwear from '../../assets/fusionwear.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const defaultProducts = [
  {
    id: 1,
    title: 'Cotton Hoodie',
    price: 1999,
    oldPrice: 2999,
    rating: 4.5,
    image: hoodie,
  },
  {
    id: 2,
    title: 'Denim Jacket',
    price: 2999,
    oldPrice: 3999,
    rating: 4.6,
    image: denimjecket,
  },
  {
    id: 3,
    title: 'Fusion Kurti',
    price: 3999,
    oldPrice: 4999,
    rating: 4.8,
    image: fusionwear,
  },
  {
    id: 4,
    title: 'Premium Tee',
    price: 1499,
    oldPrice: 2199,
    rating: 4.4,
    image: fusionwear,
  },
];

const Bestseller = ({ data }) => {
  const products = Array.isArray(data) && data.length > 0 ? data : defaultProducts;

  return (
    <div className='py-5'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-[28px] font-bold tracking-tight text-[#1e1b18]'>Best sellers</h2>
        <button type='button' className='text-xs font-semibold uppercase tracking-[0.12em] text-[#0a2463]'>View all</button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={12}
        slidesPerView='auto'
        className='overflow-visible pb-1'
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className='!w-[170px]'>
            <Card
              title={item.title}
              price={item.price}
              oldprice={item.oldPrice ?? item.oldprice}
              img={item.image}
              rating={item.rating ?? 4}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Bestseller
