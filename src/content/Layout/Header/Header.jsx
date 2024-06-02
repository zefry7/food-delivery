import React, { useContext } from "react";
import { DataContext } from "../../..";

function Header() {
    const data = useContext(DataContext).header

    function clickMenu(e) {   
        e.stopPropagation()
        // e.currentTarget.classList.toggle("header__menu-button_active")
        let burgerContent = document.getElementsByClassName("header__burger-menu-content")[0]
        burgerContent.classList.toggle("header__menu-button_active")
        document.getElementById("root").classList.toggle("scroll-lock")
    }

    return <header className="header">
        <div className="header__content">
            <div className="header__menu">
                <div className="header__menu-button" onClick={(e) => clickMenu(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header__logo">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className="header__burger-menu-content">
                    <nav className="header__nav">
                        <ul className="header__links-row">
                            {data?.links.map((v, i) => (
                                <li className="header__link" key={i}>{v?.text}</li>
                            ))}
                        </ul>
                    </nav>
                    <address className="header__tel">
                        <a href="tel:000 000 000">{data?.tel}</a>
                    </address>
                </div>
                <div className="header__lang">
                    <select name="lang">
                        {data?.lang.map((v, i) => (
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