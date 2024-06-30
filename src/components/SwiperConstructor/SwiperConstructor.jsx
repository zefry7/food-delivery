import { Swiper } from 'swiper/react';

import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import settingSwiper from './settingSwiper';

export default function SwiperConstructor(props) {
  const setting = props?.setting;

  return (
    <Swiper
      {...settingSwiper[setting]}
      modules={[Navigation, Pagination]}
      role="presentation"
    >
      {props.children}
    </Swiper>
  );
};