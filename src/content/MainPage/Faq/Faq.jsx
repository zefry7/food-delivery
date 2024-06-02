import React, { useCallback, useContext } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import { useSelector } from "react-redux";

function Faq() {
    const data = useContext(DataContext).faq
    const themeFaq = useSelector(state => state.faq.themeFaq)

    const contentBlockQuestion = useCallback(() => {
            let rand = Math.trunc(Math.random() * 5)
            return data?.question?.filter((v, i) => i <= rand).map((v, i) => (
                <div className="faq__question" key={i}>
                    <input type="checkbox" name="question" className="faq__question-input" />
                    <div className="faq__question-content">
                        <h3 className="faq__question-title">{v?.title}</h3>
                        <div className="faq__question-body">
                            <p className="faq__question-text">{v?.body?.text}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            ))
        }, [themeFaq])

    return <section className="faq">
        <div className="faq__content">
            <h2 className="faq__title">{data.title}</h2>
            <SwiperConstructor setting="settingFaq" data={data.items} />
            <div className="faq__block-question" >
                {contentBlockQuestion()}
            </div>
        </div>
    </section>
}

export default Faq;