import React, { useContext, useEffect } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { DataContext } from "../../..";
import { parallaxElement } from "../../../styles/mixins/functionality";

function Feedback() {
    const data = useContext(DataContext)?.feedback;

    useEffect(() => {
        parallaxElement("feedback-rellax", "feedback")
    }, [])

    return <section className="feedback">
        <div className="feedback__content">
            <div className="feedback__info">
                <h2 className="feedback__info-title">{data?.title}</h2>
                <p className="feedback__info-text">{data?.text}</p>
            </div>
            <div className="feedback__block-form">
                <form action="" className="feedback__form">
                    <input type="text" className="feedback__form-name" placeholder={data?.form?.name?.placeholder} title={data?.form?.name?.placeholder} aria-label={data?.form?.name?.placeholder} required/>
                    <input type="tel" className="feedback__form-tel" placeholder={data?.form?.tel?.placeholder} title={data?.form?.tel?.placeholder} aria-label={data?.form?.tel?.placeholder} required />
                    <input type="email" className="feedback__form-email" placeholder={data?.form?.email?.placeholder} title={data?.form?.email?.placeholder} aria-label={data?.form?.email?.placeholder} required />
                    <MyButton class="feedback__form-button" text={data?.button?.text} type={"submit"} />
                    <a href="https://web.telegram.org/k/" className="feedback__href-tg">
                        <img src={data?.hrefTg?.img?.src} alt={data?.hrefTg?.img?.alt} loading="lazy" />
                    </a>
                </form>
            </div>
            <div className="feedback__decor">
                {data?.decor?.map((v, i) => (
                    <div className="feedback__decor-img" key={i}>
                        <img src={v?.src} alt={v?.alt} className="feedback-rellax" data-speed={v?.dataSpeed} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Feedback;