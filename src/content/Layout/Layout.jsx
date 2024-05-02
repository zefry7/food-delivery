import React from "react";
import { Header } from "../import_ts";
import { Outlet } from "react-router-dom";

function Layout() {
    return <>
        <Header />
        <Outlet/>
    </>
}

export default Layout;