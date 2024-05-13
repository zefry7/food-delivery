import { createStore } from "redux";
import reducerMenu from "./reducer/menuReducer";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = {
    menu: reducerMenu
}

const store = configureStore({
    reducer: {
        menu: reducerMenu
    }
})

export default store