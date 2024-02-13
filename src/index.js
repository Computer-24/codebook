import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ScrollToTop} from "./components";
import {CartContextProvider, FilterProvider} from "./context";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartContextProvider>
                <FilterProvider>
                    <ScrollToTop/>
                    <ToastContainer position={"bottom-center"} limit={1} theme={"dark"}/>
                    <App/>
                </FilterProvider>
            </CartContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);