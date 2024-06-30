import React, { useContext } from "react";
import { DataContext } from "../../..";
import { moveToSection } from "../../../styles/script/functionality";

function Footer() {
    const data = useContext(DataContext)?.footer;

    return <footer className="footer" id="footer">
        <div className="footer__content">
            <div className="footer__left-block">
                <button className="footer__logo" tabIndex={0} onClick={(e) => { moveToSection(e) }}>
                    <img src={data?.logo?.src} alt={data?.logo?.alt}  loading="lazy" />
                </button>
                <ul className="footer__links">
                    {data?.links?.map((v, i) => (
                        <li className="footer__links-item" key={i} data-section={v?.section} onClick={(e) => moveToSection(e)} tabIndex={0} role="button">{v?.text}</li>
                    ))}
                </ul>
                <ul className="footer__messages">
                    {data?.messages?.map((v, i) => (
                        <li className="footer__messages-item" key={i} tabIndex={0} role="button">
                            <img src={v?.src} alt={v?.alt} loading="lazy" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__right-block">
                <address className="footer__address">
                    {data?.info?.map((v, i) => (
                        <a className="footer__address-link" href="#" key={i} tabIndex={0}>{v}</a>
                    ))}
                </address>
            </div>
        </div>
        <div className="footer__decor">
            <img src={data?.decor?.src} alt={data?.decor?.alt} loading="lazy" />
        </div>
    </footer>
}

export default Footer;