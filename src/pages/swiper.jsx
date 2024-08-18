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
      >
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2022/11/25/LgEDSHKBwO32f34wX2Y8v7PgEPXw8j8efaUahYZO.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2022/02/23/0RkMpnz75Nb53YPXtFtOPEgq1Y4eZ0B7Y6WlEuxX.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2024/06/03/DmxEfFfkTx9oWWTl1FIxnRbD9gZH3s9cAbXrR3DC.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width={1260} className='rounded-[20px]' src="https://api.lesailes.uz/storage/sliders/2023/11/29/ITCh1U2D50OUxSp20cP6ELMgvS5nxhio2QRnsRYT.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
