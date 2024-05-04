import React from "react";
import { Link } from "react-router-dom";

function MyButton(props) {

    const moveUp = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <>
        <button className={"my-button " + props?.class}>
            {props?.text}
        </button>
    </>
}

export default MyButton;