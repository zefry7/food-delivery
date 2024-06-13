import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide } from 'swiper/react';


// const slide*Name* = (value, index, key) => {
//     return (
//         <SwiperSlide>

//         </SwiperSlide>
//     )
// }


const SlideComplex = (value, index, key) => {
    const dispath = useDispatch()

    useEffect(() => {
        if (index == 0) {
            dispath({ type: "edit", value: value?.kcal })
        }
    }, [])

    return (
        <SwiperSlide key={index} onClick={() => dispath({ type: "edit", value: value?.kcal })}>
            <input type="radio" name="complex" defaultChecked={index == 0 ? true : false} onClick={(e) => e.target.blur()}/>
            <p className='menu__complex-text'>{value.kcal} kcal</p>
        </SwiperSlide>
    )
}

const SlideMenu = (value, index, key) => {
    return (
        <SwiperSlide data-index={index + 1 < 10 ? "0" + (index + 1) : index + 1} key={index}>
            <div className="menu__center-item">
                <div className="menu__center-item-img">
                    <img src={value?.img?.src} alt={value?.img?.alt} loading="lazy"/>
                </div>
                <div className="menu__center-item-text">
                    <p className="menu__center-item-type">{value?.type}</p>
                    <p className="menu__center-item-name">{value?.name}</p>
                    <div className="menu__center-item-info">
                        <p className="menu__center-item-protein">Protein - {value?.protein} g</p>
                        <p className="menu__center-item-fat">Fat - {value?.fat} g</p>
                        <p className="menu__center-item-carbo">Carbohydrates - {value?.carbo} g</p>
                        <p className="menu__center-item-energy">Energy - {value?.energy} kcal</p>
                        <p className="menu__center-item-weight">Total weight: {value?.weight} g</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}

const SlideFaq = (value, index, key) => {
    const dispath = useDispatch()
    
    function animationOpacity(e) {
        let el = document.getElementsByClassName("faq__block-question")[0]
        let listQuestion = document.querySelectorAll("input.faq__question-input:checked")
        if (listQuestion.length > 0) {
            setTimeout(() => {
                el.style.opacity = 0;
            }, 300)
            setTimeout(() => {
                el.style.opacity = 1;
                dispath({ type: "changeTheme", value: e.target.getAttribute("data-index") })
            }, 800)
        } else {
            el.style.opacity = 0;
            setTimeout(() => {
                el.style.opacity = 1;
                dispath({ type: "changeTheme", value: e.target.getAttribute("data-index") })
            }, 500)
        }
        for (let x of listQuestion) {
            x.checked = false;
        }
    }

    return (
        <SwiperSlide key={index}>
            {index == 0
                ? <input type="radio" name="faq-type" className='faq__item-input' data-index={index} defaultChecked onChange={(e) => animationOpacity(e)} onClick={(e) => e.target.blur()}/>
                : <input type="radio" name="faq-type" className='faq__item-input' data-index={index} onChange={(e) => animationOpacity(e)} onClick={(e) => e.target.blur()}/>
            }
            <div className="faq__item">
                <div className="faq__item-img"></div>
                <p className="faq__item-text">{value?.text}</p>
            </div>
        </SwiperSlide>
    )
}

const slideViews = {
    // setting*Name*: slide*Name*
    "settingComplex": SlideComplex,
    "settingMenu": SlideMenu,
    "settingFaq": SlideFaq
}

export default slideViews;