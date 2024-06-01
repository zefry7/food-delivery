import React, { useContext } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { DataContext } from "../../..";

function Feedback() {
    const data = useContext(DataContext)?.feedback;


    return <section className="feedback">
        <div className="feedback__content">
            <div className="feedback__info">
                <h2 className="feedback__info-title">{data?.title}</h2>
                <p className="feedback__info-text">{data?.text}</p>
            </div>
            <div className="feedback__block-form">
                <form action="" className="feedback__form">
                    <input type="text" className="feedback__form-name" placeholder={data?.form?.name?.placeholder} title={data?.form?.name?.placeholder} required/>
                    <input type="tel" className="feedback__form-tel" placeholder={data?.form?.tel?.placeholder} title={data?.form?.tel?.placeholder} required/>
                    <input type="email" className="feedback__form-email" placeholder={data?.form?.email?.placeholder} title={data?.form?.email?.placeholder} required/>
                    <MyButton class="feedback__form-button" text={data?.button?.text} type={"submit"}/>
                    <a href="" className="feedback__href-tg">
                        <img src={data?.hrefTg?.img?.src} alt={data?.hrefTg?.img?.alt} />
                    </a>
                </form>
            </div>
        </div>
        <div className="feedback__decor">
            <img src={data?.decor?.src} alt={data?.decor?.alt} />
        </div>
    </section>
}

export default Feedback;