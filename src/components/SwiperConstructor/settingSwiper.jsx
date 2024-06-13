//настройки для свайперов

const settingComplex = {
    slidesPerView: 'auto',
}

const settingMenu = {
    slidesPerView: 'auto',
    spaceBetween: "10",
    centeredSlides: "true",
    navigation: {
        prevEl: ".menu__center-arrow-prev",
        nextEl: ".menu__center-arrow-next"
    },
    pagination: {
        el: ".menu__center-pagination",
        clickable: true,
    }
}

const settingFaq = {
    slidesPerView: 'auto',
}


const settingSwiper = {
    "settingComplex": settingComplex,
    "settingMenu": settingMenu,
    "settingFaq": settingFaq 
}

export default settingSwiper;


