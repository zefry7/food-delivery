import React, { useContext, useEffect } from "react";
import MyButton from "../../../components/MyButton/MyButton"
import { DataContext } from "../../..";
import { parallaxElement } from "../../../styles/script/functionality";

function Intro() {
    const data = useContext(DataContext).intro

    useEffect(() => {
        parallaxElement("intro-rellax", "intro")
    }, [])


    return <section className="intro show-block" aria-label="Вступительный секция">
        <div className="intro__content">
            <h1 className="intro__title">{data?.title}</h1>
            <p className="intro__subtitle" aria-label={data?.subtitle}>{data?.subtitle}</p>
            <MyButton class="intro__button" text={data?.button?.text} />
            <div className="intro__img" aria-hidden="true">
                <img src={data?.img?.src} alt={data?.img?.alt} />
            </div>
            <div className="intro__decor" aria-hidden="true">
                {data?.decor?.map((v, i) => (
                    <div className="intro__decor-img" key={i}>
                        <img src={v?.src} alt={v?.alt} className="intro-rellax" data-speed={v?.dataSpeed}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Intro;