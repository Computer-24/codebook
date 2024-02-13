import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CartPage, DashboardPage, HomePage, Login, PageNotFound, ProductDetails, ProductsList, Register} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";
import {OrderPage} from "../pages";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
                <Route path={"products"} element={<ProductsList/>}/>
                <Route path={"products/:id"} element={<ProductDetails/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"register"} element={<Register/>}/>
                <Route path={"cart"} element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
                <Route path={"order-summary"} element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
                <Route path={"dashboard"} element={<ProtectedRoutes><DashboardPage/></ProtectedRoutes>}/>

            </Routes>
        </>
    );
};

export default AllRoutes;