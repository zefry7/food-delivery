import React from "react";
import Intro from "./Intro/Intro";
import Menu from "./Menu/Menu";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import Advantage from "./Advantage/Advantage";
import Promotion from "./Promotion/Promotion";
import Area from "./Area/Area";

function MainPage() {
    return <>
        <Intro />
        {/* <Menu /> */}
        <Area />
        {/* <Advantage />
        <Promotion />
        <Faq />
        <Feedback /> */}
    </>
}

export default MainPage