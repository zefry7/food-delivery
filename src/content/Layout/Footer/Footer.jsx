import React, { useContext } from "react";
import { DataContext } from "../../..";

function Footer() {
    const data = useContext(DataContext)?.footer;


    return <section className="footer">
        <div className="footer__content">
            <div className="footer__left-block">
                <div className="footer__logo">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <ul className="footer__links">
                    {data?.links.map((v, i) => (
                        <li className="footer__links-item" key={i}>{v}</li>
                    ))}
                </ul>
                <ul className="footer__messages">
                    {data?.messages.map((v, i) => (
                        <li className="footer__messages-item" key={i}>
                            <img src={v?.src} alt={v?.alt} />
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
            <img src={data?.decor?.src} alt={data?.decor?.alt} />
        </div>
    </section>
}

export default Footer;