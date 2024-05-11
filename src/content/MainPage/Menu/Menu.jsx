import React, { useContext } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";

function Menu() {
    const data = useContext(DataContext)?.menu

    return <section className="menu">
        <div className="menu__content">
            <h2 className="menu__title">{data?.title}</h2>
            <div className="menu__complex">
                <SwiperConstructor data={data?.complex} setting="settingComplex"/>
            </div>
            <div className="menu__main-block">
                <div className="menu__line-week">
                    {data?.mainBlock?.days.map((v, i) => (
                        <div className="menu__day">
                            <input type="radio" name="week" defaultChecked={i == 0 ? true : false}/>
                            <p className="menu__day-text">{v}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Menu;