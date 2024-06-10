import { Swiper } from 'swiper/react';

import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import settingSwiper from './settingSwiper';
import slideViews from './slideViews';

export default function SwiperConstructor(props) {
  const data = props?.data;
  const setting = props?.setting;


  return (
    <Swiper
      { ...settingSwiper[setting] }
      modules={[Navigation, Pagination]}
    >
      {data?.map((v, i) => (
        slideViews[setting](v, i)
      ))} 
    </Swiper>
  );
};