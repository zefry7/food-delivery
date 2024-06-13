import React, { useContext } from "react";
import { DataContext } from "../../..";
import { moveToSection } from "../../../styles/mixins/functionality";

function Footer() {
    const data = useContext(DataContext)?.footer;


    return <footer className="footer" id="footer">
        <div className="footer__content">
            <div className="footer__left-block">
                <div className="footer__logo">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} onClick={(e) => {moveToSection(e)}} loading="lazy"/>
                </div>
                <ul className="footer__links">
                    {data?.links.map((v, i) => (
                        <li className="footer__links-item" key={i} data-section={v?.section} onClick={(e) => moveToSection(e)}>{v?.text}</li>
                    ))}
                </ul>
                <ul className="footer__messages">
                    {data?.messages.map((v, i) => (
                        <li className="footer__messages-item" key={i}>
                            <img src={v?.src} alt={v?.alt} loading="lazy"/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__right-block">
                <address className="footer__address">
                    {data?.info.map((v, i) => (
                        <a className="footer__address-link" key={i}>{v}</a>
                    ))}
                </address>
            </div>
        </div>
        <div className="footer__decor">
            <img src={data?.decor?.src} alt={data?.decor?.alt} loading="lazy"/>
        </div>
    </footer>
}

export default Footer;