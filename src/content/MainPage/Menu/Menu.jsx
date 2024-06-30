import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import SwiperConstructor from "../../../components/SwiperConstructor/SwiperConstructor";
import { DataContext } from "../../..";
import MyButton from "../../../components/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { parallaxElement } from "../../../styles/script/functionality";
import { SwiperSlide } from "swiper/react";

function Menu() {
    const data = useContext(DataContext)?.menu
    const countKcal = useRef(0)
    const countList = useRef([0, 0, 0])
    const countPrice = useRef(0)
    const [listDish, setListDish] = useState(null)
    const typeMenu = useSelector(state => state?.menu?.typeMenu)
    const typeComplex = useSelector(state => state?.menu?.typeComplex)
    const sizeWindow = useSelector(state => state?.global?.sizeWindow)
    const dispath = useDispatch()

    const switchComposition = useCallback((str) => {
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
    }, [])

    useEffect(() => {
        countKcal.current = 0
        countPrice.current = 0
        countList.current = [0, 0, 0]
        async function getList() {
            await new Promise((resolve) => {
                let a = data?.mainBlock?.menuList?.map((v) => {
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
        getList()
    }, [typeMenu, data?.mainBlock?.menuList])

    useEffect(() => {
        parallaxElement("menu-rellax", "menu")
        dispath({ type: "edit", value: data?.complex[0]?.kcal })
    }, [dispath, data?.complex])

    useEffect(() => {
        const listComplexButton = document.getElementsByClassName("menu__complex-text");
        [...listComplexButton].forEach((v, i) => {
            if (i == typeComplex)
                v.classList.add("menu__complex-text_select")
            else
                v.classList.remove("menu__complex-text_select")
        })
    }, [typeComplex])

    const selectComplex = useCallback((value, index) => {
        dispath({ type: "complex", value: index }); 
        dispath({ type: "edit", value: value?.kcal })
    }, [])

    return <section className="menu" id="menu" aria-label="Секция с меню">
        <div className="menu__content">
            <h2 className="menu__title" aria-label="Меню блюд">{data?.title}</h2>
            <div className="menu__complex" aria-label="Выбор калорийности на день">
                <SwiperConstructor data={data?.complex} setting="settingComplex">
                    <>
                        {data?.complex?.map((value, index) => (
                            <SwiperSlide key={index} >
                                <p className='menu__complex-text' onClick={() => selectComplex(value, index)} onKeyDown={(e) => { if(e.keyCode == 13) { selectComplex(value, index) }}} role="button" tabIndex={0}>
                                    {value.kcal} kcal
                                </p>
                            </SwiperSlide>
                        ))}
                    </>
                </SwiperConstructor>
            </div>
            <div className="menu__wrapper-main-block">
                <div className="menu__main-block">
                    <div className="menu__top">
                        <div className="menu__line-week">
                            {data?.mainBlock?.days?.map((v, i) => (
                                <div className="menu__day" key={i}>
                                    <input type="radio" name="week" defaultChecked={i === 0 ? true : false} tabIndex={0} aria-label="Выбор дня недели" />
                                    <p className="menu__day-text">{sizeWindow > 1024 ? v : v?.slice(0, 2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="menu__center">
                        <div className="menu__center-swiper">
                            <button className="menu__center-arrow-prev" tabIndex={0} aria-label="Перемещение списка блюд вправо"></button>
                            <SwiperConstructor setting={"settingMenu"} data={listDish} >
                                {listDish?.map((value, index) => (
                                    <SwiperSlide data-index={index + 1 < 10 ? "0" + (index + 1) : index + 1} key={index}>
                                        <div className="menu__center-item">
                                            <div className="menu__center-item-img">
                                                <img src={value?.img?.src} alt={value?.img?.alt} loading="lazy" />
                                            </div>
                                            <div className="menu__center-item-text">
                                                <p className="menu__center-item-type">{value?.type}</p>
                                                <p className="menu__center-item-name">{value?.name}</p>
                                                <div className="menu__center-item-info">
                                                    <p className="menu__center-item-protein">Protein - {value?.protein} g</p>
                                                    <p className="menu__center-item-fat">Fat - {value?.fat} g</p>
                                                    <p className="menu__center-item-carbo">Carbohydrates - {value?.carbo} g</p>
                                                    <p className="menu__center-item-energy">Energy - {value?.energy} kcal</p>
                                                    <p className="menu__center-item-weight">Total weight: {value?.weight} g</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </SwiperConstructor>
                            <button className="menu__center-arrow-next" tabIndex={0} aria-label="Перемещение списка блюд влево"></button>
                        </div>
                        <div className="menu__center-pagination"></div>
                        <p className="menu__center-description">
                            {data?.mainBlock?.description}
                        </p>
                    </div>
                    <div className="menu__bottom">
                        <div className="menu__bottom-gd">
                            <p className="menu__bottom-gd-text" tabIndex={0} role="button">
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
    </section >
}

export default Menu;