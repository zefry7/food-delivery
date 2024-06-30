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

    return <header className="header">
        <div className="header__content">
            <div className="header__menu">
                <button className="header__menu-button" onClick={(e) => clickMenu(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="header__logo" onClick={(e) => { moveToSection(e) }}>
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className="header__burger-menu-content">
                    <nav className="header__nav">
                        <ul className="header__links-row">
                            {data?.links?.map((v, i) => (
                                <li className="header__link" id={"link-" + v?.section} key={i} data-section={v?.section} onClick={(e) => { moveToSection(e); clickMenu(e); }}>
                                    {v?.text}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <address className="header__tel">
                        <a href="tel:000 000 000">{data?.tel}</a>
                    </address>
                </div>
                <div className="header__lang">
                    <select name="lang" aria-label="Выбор языка на сайте">
                        {data?.lang?.map((v, i) => (
                            <option value={v} key={i}>{v}</option>
                        ))}
                    </select>
                </div>
                <div className="header__sing-in">
                    <div className="header__account-img">
                        <img src={data?.account?.img?.src} alt={data?.account?.img?.alt} />
                    </div>
                    <span>{data?.account?.text}</span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;