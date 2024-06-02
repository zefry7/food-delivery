import { createStore } from "redux";
import reducerMenu from "./reducer/menuReducer";
import { configureStore } from "@reduxjs/toolkit";
import reduceFAQ from "./reducer/faqReducer";


const rootReducer = {
    menu: reducerMenu,
    faq: reduceFAQ
}

const store = configureStore({
    reducer: {
        ...rootReducer
    }
})

export default store