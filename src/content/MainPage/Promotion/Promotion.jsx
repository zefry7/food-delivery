import React, { useContext, useEffect } from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { DataContext } from "../../..";
import { parallaxElement } from "../../../styles/script/functionality";

function Promotion() {
    const data = useContext(DataContext)?.promotion

    useEffect(() => {
        parallaxElement("promotion-rellax", "promotion")
    }, [])


    return <section className="promotion">
        <div className="promotion__content">
            <h2 className="promotion__title">{data?.title}</h2>
            <p className="promotion__text">{data?.text}</p>
            <MyButton class="promotion__button" text={data?.button?.text} />
            <div className="promotion__decor">
                {data?.decor?.map((v, i) => (
                    <div className="promotion__decor-item" key={i}>
                        <img src={v?.src} alt={v?.alt} data-speed={v?.dataSpeed} className="promotion-rellax" loading="lazy"/>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Promotion;