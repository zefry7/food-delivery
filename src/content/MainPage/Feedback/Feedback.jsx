import React, { useCallback, useContext, useEffect } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { DataContext } from "../../..";
import { changeInputTel, parallaxElement } from "../../../styles/script/functionality";

function Feedback() {
    const data = useContext(DataContext)?.feedback;

    useEffect(() => {
        parallaxElement("feedback-rellax", "feedback")
    }, [])


    const formSubmit = useCallback((e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        console.log(form.get("name"));
        // inputTel.value = inputTel.value.replace(new RegExp("[a-z]", "ig"), "")

    }, [])

    return <section className="feedback">
        <div className="feedback__content">
            <div className="feedback__info">
                <h2 className="feedback__info-title">{data?.title}</h2>
                <p className="feedback__info-text">{data?.text}</p>
            </div>
            <div className="feedback__block-form">
                <form action="" className="feedback__form" onSubmit={(e) => formSubmit(e)}>
                    <input type="text" className="feedback__form-name" name="name" minLength="3" maxLength="20" placeholder={data?.form?.name?.placeholder} aria-label={data?.form?.name?.placeholder} required />
                    <input type="tel" className="feedback__form-tel" name="tel" maxLength="11" placeholder={data?.form?.tel?.placeholder} aria-label={data?.form?.tel?.placeholder} required />
                    <input type="email" className="feedback__form-email" name="email" placeholder={data?.form?.email?.placeholder} aria-label={data?.form?.email?.placeholder} required />
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