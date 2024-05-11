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


const slideViews = {
    // setting*Name*: slide*Name*
    "settingComplex": slideComplex
}

export default slideViews;