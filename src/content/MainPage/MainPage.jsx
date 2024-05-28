import React from "react";
import Intro from "./Intro/Intro";
import Menu from "./Menu/Menu";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import Advantage from "./Advantage/Advantage";

function MainPage() {
    return <>
        <Intro />
        <Menu />
        <Advantage />
        <Faq />
        <Feedback />
    </>
}

export default MainPage