import React, { useContext, useEffect, useRef, useState } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import MyButton from "../../../components/MyButton/MyButton";
import { useSelector } from "react-redux";
import { parallaxElement } from "../../../styles/mixins/functionality";

function Menu() {
    const data = useContext(DataContext)?.menu
    const countKcal = useRef(0)
    const countList = useRef([0, 0, 0])
    const countPrice = useRef(0)
    const [listDish, setListDish] = useState(null)
    const typeMenu = useSelector(state => state.menu.typeMenu)
    const sizeWindow = useSelector(state => state.global.sizeWindow)

    useEffect(() => {
        countKcal.current = 0
        countPrice.current = 0
        countList.current = [0, 0, 0]
        async function getListData() {
            await new Promise((resolve) => {
                let a = data?.mainBlock?.menuList.map((v) => {
                    if (parseInt(v?.weight) + countKcal.current <= typeMenu) {
                        countKcal.current += parseInt(v?.weight)
                        countList.current[0] += parseInt(v?.protein)
                        countList.current[1] += parseInt(v?.carbo)
                        countList.current[2] += parseInt(v?.fat)
                        countPrice.current += parseInt(v?.price)
                        return v
                    }
                    return null
                }).filter((v) => v !== null)
                resolve(a)
            }).then(result => setListDish(result))
        }
        getListData()
    }, [typeMenu])

    useEffect(() => {
        parallaxElement("menu-rellax", "menu")
    }, [])

    function switchComposition(str) {
        switch (str) {
            case "Protein":
                return countList.current[0]
            case "Carbohydrates":
                return countList.current[1]
            case "Fat":
                return countList.current[2]
            default:
                break;
        }
    }

    return <section className="menu" id="menu">
        <div className="menu__content">
            <h2 className="menu__title">{data?.title}</h2>
            <div className="menu__complex">
                <SwiperConstructor data={data?.complex} setting="settingComplex" />
            </div>
            <div className="menu__wrapper-main-block">
                <div className="menu__main-block">
                    <div className="menu__top">
                        <div className="menu__line-week">
                            {data?.mainBlock?.days.map((v, i) => (
                                <div className="menu__day" key={i}>
                                    <input type="radio" name="week" defaultChecked={i == 0 ? true : false} />
                                    <p className="menu__day-text">{sizeWindow > 1024 ? v : v.slice(0, 2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="menu__center">
                        <div className="menu__center-swiper">
                            <div className="menu__center-arrow-prev"></div>
                            <SwiperConstructor setting={"settingMenu"} data={listDish} />
                            <div className="menu__center-arrow-next"></div>
                        </div>
                        <p className="menu__center-description">
                            {data?.mainBlock?.description}
                        </p>
                    </div>
                    <div className="menu__bottom">
                        <div className="menu__bottom-gd">
                            <p className="menu__bottom-gd-text">
                                {data?.mainBlock?.gd[0]}
                                {countPrice.current}
                                {data?.mainBlock?.gd[1]}
                            </p>
                            <p className="menu__bottom-total">
                                Total: <span>{countKcal.current} kcal</span>
                            </p>
                        </div>
                        <ul className="menu__bottom-composition">
                            {data?.mainBlock?.composition?.map((v, i) => (
                                <li className="menu__bottom-item" key={i}>
                                    <div className="menu__bottom-img">
                                        <img src={v?.img?.src} alt={v?.img?.alt} />
                                    </div>
                                    <p className="menu__bottom-text">
                                        <span>{switchComposition(v?.label)}</span>
                                        {v?.label}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <MyButton text={data?.mainBlock?.button} class={"menu__bottom-button"} />
                    </div>
                </div>
            </div>
            <div className="menu__decor">
                {data?.decor?.map((v, i) => (
                    <div className="menu__decor-img" key={i}>
                        <img src={v?.src} alt={v?.alt} className="menu-rellax" data-speed={v?.dataSpeed} />
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Menu;