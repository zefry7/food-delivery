import React, { useCallback, useContext, useEffect } from "react";
import { DataContext } from "../../..";
import { moveToSection, sectionInFocus } from "../../../styles/script/functionality";
import { useSelector } from "react-redux";

function Header() {
    let burgerContent, burgerButton
    const data = useContext(DataContext).header
    const sizeWindow = useSelector(state => state.global.sizeWindow)
    const matchMediaMin = window.matchMedia("(min-width: 768px)")

    queueMicrotask(() => {
        burgerContent = document.getElementsByClassName("header__burger-menu-content")[0]
        burgerButton = document.getElementsByClassName("header__menu-button")[0]
    })

    const clickMenu = useCallback((e) => {
        e.stopPropagation()
        if (sizeWindow <= 768) {
            burgerContent.classList.toggle("header__burger-menu-content_active")
            burgerButton.classList.toggle("header__menu-button_active")
            document.body.classList.toggle("scroll-lock")
        }
    }, [sizeWindow])

    useEffect(() => {
        matchMediaMin.addEventListener("change", () => {
            burgerContent.classList.remove("header__burger-menu-content_active")
            burgerButton.classList.remove("header__menu-button_active")
            document.body.classList.remove("scroll-lock")
        })
        sectionInFocus("header__link", "data-section", "header__link_show")
    }, [])

    return <header className="header" aria-label="Верхняя часть сайта">
        <div className="header__content">
            <div className="header__menu">
                <button className="header__menu-button" onClick={(e) => clickMenu(e)} tabIndex={0} aria-label="Кнопка меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="header__logo" onClick={(e) => { moveToSection(e)}} tabIndex={0} aria-label="Логотип" role="button">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className="header__burger-menu-content">
                    <nav className="header__nav" aria-label="Навигационное меню">
                        <ul className="header__links-row">
                            {data?.links?.map((v, i) => (
                                <li key={i}>
                                    <button className="header__link" id={"link-" + v?.section} tabIndex={0} data-section={v?.section} onClick={(e) => { moveToSection(e); clickMenu(e); }}>{v?.text}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <address className="header__tel" aria-label="Информация о номере телефона">
                        <a href="tel:000 000 000" aria-label="Номер телефона">{data?.tel}</a>
                    </address>
                </div>
                <div className="header__lang" aria-label="Возможность сменить язык на сайте">
                    <select name="lang" aria-label="Выбор языка на сайте">
                        {data?.lang?.map((v, i) => (
                            <option value={v} key={i} aria-label={v}>{v}</option>
                        ))}
                    </select>
                </div>
                <button className="header__sing-in" tabIndex={0} aria-label="Кнопка для входя в аккаунт">
                    <div className="header__account-img" aria-hidden="true">
                        <img src={data?.account?.img?.src} alt={data?.account?.img?.alt} />
                    </div>
                    <span aria-hidden="true">{data?.account?.text}</span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;