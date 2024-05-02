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
        <button>
            <Link to={props?.href} className={"button " + props?.class} onClick={(e) => moveUp(e)} data-text={props?.text} aria-label={props?.text}>
            </Link>
        </button>
    </>
}

export default MyButton;