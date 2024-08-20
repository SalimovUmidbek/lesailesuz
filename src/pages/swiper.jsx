import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function SwiperUZ() {
  return (
    <>
      <Swiper  style={{
        '--swiper-navigation-color': '#fff',
      }}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper pt-[20px]"
        loop={true}
        pagination={{clickable: true}}
        
        autoplay={{
          delay: 50,
          disableOnInteraction: false
        }}
        
      >
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/07/31/K9Gn5Ql4jQd29e6XpQ0JBPPl3dbDrtOqgfTYMo9H.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/07/31/OnDQNagTxdTIGS9tyNtOUlL5ZdmqRgrwGO7zRupq.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/07/31/6jRO5PaCzDMKCtSOgH9b6oStruHrzVeiV257Xdpc.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/07/31/y0Smqb8EJ3ZpWo2YWGqRxRjxZdtnYVPlsogadTal.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/07/15/H04FiqiZctYtCg88wagfsLw6kt3CSOCuBblzOUKw.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
