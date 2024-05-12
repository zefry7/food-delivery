import { SwiperSlide } from 'swiper/react';


// const slide*Name* = (value, index, key) => {
//     return (
//         <SwiperSlide>

//         </SwiperSlide>
//     )
// }


const slideComplex = (value, index, key) => {
    return (
        <SwiperSlide>
            <p className='menu__complex-text'><span>{value.name}</span>{value.kcal}</p>
        </SwiperSlide>
    )
}

const slideMenu = (value, index, key) => {
    return (
        <SwiperSlide data-index={index + 1 < 10 ? "0" + (index + 1) : index + 1}>
            {value}
        </SwiperSlide>
    )
}


const slideViews = {
    // setting*Name*: slide*Name*
    "settingComplex": slideComplex,
    "settingMenu": slideMenu
}

export default slideViews;