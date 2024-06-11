import React, { useEffect } from "react";
import Intro from "./Intro/Intro";
import Menu from "./Menu/Menu";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import Advantage from "./Advantage/Advantage";
import Promotion from "./Promotion/Promotion";
import Area from "./Area/Area";

function MainPage() {

    useEffect(() => {
        const list = document.querySelectorAll("section")
        window.addEventListener("load", () => {
            for(let el of list) {
                if(el.offsetTop - (window.innerHeight * 0.8)  < window.scrollY) {
                    el.classList.add("show-block")
                }
            }
        })
        document.addEventListener("scroll", () => {
            for(let el of list) {
                if(el.offsetTop - (window.innerHeight * 0.8)  < window.scrollY) {
                    el.classList.add("show-block")
                }
            }
        })
    }, [])

    return <>
        <Intro />
        <Menu />
        <Area />
        <Advantage />
        <Promotion />
        <Faq />
        <Feedback />
    </>
}

export default MainPage