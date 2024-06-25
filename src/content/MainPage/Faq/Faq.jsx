import React, { useCallback, useContext, useMemo } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

function Faq() {
    const data = useContext(DataContext)?.faq
    const themeFaq = useSelector(state => state?.faq?.themeFaq)
    const dispath = useDispatch()

    const contentBlockQuestion = useMemo(() => {
        let rand = Math.trunc(Math.random() * 5)

        return data?.question?.filter((_, i) => i <= rand)?.map((v, i) => (
            <div className="faq__question" key={i}>
                <input type="checkbox" name="question" className="faq__question-input" aria-label="Открыть вопрос" />
                <div className="faq__question-content">
                    <h3 className="faq__question-title">{v?.title}</h3>
                    <div className="faq__question-body">
                        <p className="faq__question-text">{v?.body?.text}</p>
                    </div>
                    <hr />
                </div>
            </div>
        ))
    }, [themeFaq, data?.question])

    const animationOpacity = useCallback((e) => {
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
    }, [dispath])

    return <section className="faq" id="faq">
        <div className="faq__content">
            <h2 className="faq__title">{data?.title}</h2>
            <SwiperConstructor setting="settingFaq" data={data?.items}>
                {data?.items?.map((value, index) => (
                    <SwiperSlide key={index}>
                        {index === 0
                            ? <input type="radio" name="faq-type" className='faq__item-input' data-index={index} defaultChecked onChange={(e) => animationOpacity(e)} onClick={(e) => e.target.blur()} aria-label='Выбор темы вопроса' />
                            : <input type="radio" name="faq-type" className='faq__item-input' data-index={index} onChange={(e) => animationOpacity(e)} onClick={(e) => e.target.blur()} aria-label='Выбор темы вопроса' />
                        }
                        <div className="faq__item">
                            <div className="faq__item-img"></div>
                            <p className="faq__item-text">{value?.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperConstructor>
            <div className="faq__block-question" >
                {contentBlockQuestion}
            </div>
        </div>
    </section>
}

export default Faq;