import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
    const dispath = useDispatch()
    const sizeWindow = useSelector(state => state.global.sizeWindow)

    setTimeout(() => {
        window.addEventListener("resize", () => {
            dispath({ type: "resize", value: window.innerWidth})
        })
    }, [])

    return <>
        <Header />
        <Outlet/>
        <Footer />
    </>
}

export default Layout;