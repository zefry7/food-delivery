import reducerMenu from "./reducer/menuReducer";
import { configureStore } from "@reduxjs/toolkit";
import reduceFAQ from "./reducer/faqReducer";
import reduceGlobal from "./reducer/globalReducer";


const rootReducer = {
    global: reduceGlobal,
    menu: reducerMenu,
    faq: reduceFAQ
}

const store = configureStore({
    reducer: {
        ...rootReducer
    }
})

export default store