import React from "react";
import { useContext } from "react";
import { DataContext } from "../../..";

function Advantage() {
    const data = useContext(DataContext)?.advantage

    return <section className="advantage">
        <div className="advantage__content">
            <h2 className="advantage__title">{data?.title}</h2>
            <ul className="advantage__list">
                {data.list.map((v, i) => (
                    <li className="advantage__item" key={i}>
                        <div className="advantage__item-img">
                            <img src={v?.img?.src} alt={v?.img?.alt} loading="lazy"/>
                        </div>
                        <p className="advantage__item-text">
                            <span>{v?.text[0]}</span>
                            {v?.text[1]}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}

export default Advantage;