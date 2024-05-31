import React, { useContext } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { DataContext } from "../../..";

function Promotion() {
    const data = useContext(DataContext)?.promotion

    return <section className="promotion">
        <div className="promotion__content">
            <h2 className="promotion__title">{data?.title}</h2>
            <p className="promotion__text">{data?.text}</p>
            <MyButton class="promotion__button" text={data?.button?.text} />
        </div>
        <div className="promotion__decor">
            {data?.decor.map((v, i) => (
                <div className="promotion__decor-item">
                    <img src={v?.src} alt={v?.alt} />
                </div>
            ))}
        </div>
    </section>
}

export default Promotion;