import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/end-style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";
import Layout from './content/Layout/Layout';
import MainPage from './content/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
}

export const DataContext = createContext()

root.render(
  <Provider store={store}>
    <DataContext.Provider value={data}>
      <BrowserRouter basename={`${url[1]}/`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </DataContext.Provider>
  </Provider>
);


