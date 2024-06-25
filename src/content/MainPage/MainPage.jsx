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
        const options = {
            rootMargin: "0px",
            threshold: 0.15
        }

        const list = document.querySelectorAll("section")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entrie) => {
                if (entrie.isIntersecting) {
                    entrie.target.classList.add("show-block")
                }
            })
        }, options)

        for (let sectionElement of list) {
            observer.observe(sectionElement)
        }
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