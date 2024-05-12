import React, { useContext } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import MyButton from "../../../components/MyButton/MyButton";

function Menu() {
    const data = useContext(DataContext)?.menu

    return <section className="menu">
        <div className="menu__content">
            <h2 className="menu__title">{data?.title}</h2>
            <div className="menu__complex">
                <SwiperConstructor data={data?.complex} setting="settingComplex" />
            </div>
            <div className="menu__main-block">
                <div className="menu__top">
                    <div className="menu__line-week">
                        {data?.mainBlock?.days.map((v, i) => (
                            <div className="menu__day">
                                <input type="radio" name="week" defaultChecked={i == 0 ? true : false} />
                                <p className="menu__day-text">{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="menu__center">
                    <SwiperConstructor setting={"settingMenu"} data={[1, 2, 3]}/>
                    <p className="menu__center-description">
                        {data?.mainBlock?.description}
                    </p>
                </div>
                <div className="menu__bottom">
                    <div className="menu__bottom-gd">
                        <p className="menu__bottom-gd-text">
                            {data?.mainBlock?.gd[0]}
                            0
                            {data?.mainBlock?.gd[1]}
                        </p>
                    </div>
                    <p className="menu__bottom-total">
                        Total: <span>0 kcal</span>
                    </p>
                    <ul className="menu__bottom-composition">
                        {data?.mainBlock?.composition?.map((v, i) => (
                            <li className="menu__bottom-item">
                                <div className="menu__bottom-img">
                                    <img src={v?.img?.src} alt={v?.img?.alt} />
                                </div>
                                <p className="menu__bottom-text">
                                    <span>0</span>
                                    {v?.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <MyButton text={data?.mainBlock?.button} class={"menu__bottom-button"}/>
                </div>
            </div>
        </div>
    </section>
}

export default Menu;