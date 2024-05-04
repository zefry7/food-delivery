import React, { useContext, useEffect } from "react";
import MyButton from "../../../components/MyButton/MyButton"
import { DataContext } from "../../..";

function Intro() {
    const data = useContext(DataContext).intro

    useEffect(() => {

    }, [])



    return <section className="intro">
        <div className="intro__content">
            <h1 className="intro__title">{data?.title}</h1>
            <p className="intro__subtitle">{data?.subtitle}</p>
            <MyButton class="intro__button" text={data?.button?.text} />
            <div className="intro__img">
                <img src={data?.img?.src} alt={data?.img?.alt} />
            </div>
            <div className="intro__decor">
                {data?.decor.map((v, i) => (
                    <div className="intro__decor-img rellax" key={i} data-rellax-speed={3}>
                        <img src={v?.src} alt={v?.alt} />
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Intro;