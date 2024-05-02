import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";
import SwiperConstructor from "./components/SwiperConstructor/SwiperConstructor"

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
}

export const UserContext = createContext()


root.render(
  <UserContext.Provider value={data}>
    <BrowserRouter basename={`${url[1]}/`}>
      <Routes>
        <Route path="/" element={<SwiperConstructor data={[1, 2, 3]} setting={"settingComment"}/>}>
        </Route>
      </Routes>
    </BrowserRouter >
  </UserContext.Provider>
);


