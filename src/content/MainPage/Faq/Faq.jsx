import React, { useContext } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";

function Faq() {
    const data = useContext(DataContext).faq

    return <section className="faq">
        <div className="faq__content">
            <h2 className="faq__title">{data.title}</h2>
            <SwiperConstructor setting="settingFaq" data={data.items} />
            <div className="faq__block-question">
                {data?.question?.map((v, i) => (
                    <div className="faq__question">
                        <h3 className="faq__question-title">{v?.title}</h3>
                        <div className="faq__question-body">
                            <p className="faq__question-text">{v?.body?.text}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Faq;