import React, { useContext, useEffect, useRef, useState } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import MyButton from "../../../components/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
    const dispath = useDispatch()
    const data = useContext(DataContext)?.menu
    const countKcal = useRef(0)
    const [listDish, setListDish] = useState(null)
    const typeMenu = useSelector(state => state.menu.typeMenu)
    const sizeWindow = useSelector(state => state.global.sizeWindow)

    useEffect(() => {
        countKcal.current = 0
        async function getListData() {
            await new Promise((resolve) => {
                let a = data?.mainBlock?.menuList.map((v) => {
                    if (parseInt(v?.weight) + countKcal.current <= typeMenu) {
                        countKcal.current += parseInt(v?.weight)
                        return v
                    }
                    return null
                }).filter((v) => v !== null)
                resolve(a)
            }).then(result => setListDish(result))
        }
        getListData()
    }, [typeMenu])


    return <section className="menu">
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
                        <SwiperConstructor setting={"settingMenu"} data={listDish} />
                        <p className="menu__center-description">
                            {data?.mainBlock?.description}
                        </p>
                    </div>
                    <div className="menu__bottom">
                        <div className="menu__bottom-gd">
                            <p className="menu__bottom-gd-text">
                                {data?.mainBlock?.gd[0]}
                                {typeMenu}
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
                                        <span>0</span>
                                        {v?.label}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <MyButton text={data?.mainBlock?.button} class={"menu__bottom-button"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Menu;