import React from "react";
import Intro from "./Intro/Intro";
import Menu from "./Menu/Menu";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";

function MainPage() {
    return <>
        <Intro />
        <Menu />
        <Faq />
        <Feedback />
    </>
}

export default MainPage