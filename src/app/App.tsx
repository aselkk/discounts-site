import {useDispatch} from "react-redux";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {FloatingButton} from "./FloatingButton";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {AboutUs} from "@/pages/AboutUs";
import {Creator} from "@/pages/Creator";
import "./styles/null.scss";
import "./styles/global.scss";
import {TrendCoupons} from "@/pages/TrendCoupons";
import {SearchResult} from "@/pages/SearchResult";
import {Contacts} from "@/pages/Contacts";
import {Help} from "@/pages/Help";
import {PrivacyPolicy} from "@/pages/PrivacyPolicy";
import {ErrorPage} from "@/pages/ErrorPage";
import {Breadcrumbs} from "./Breadcrumbs";
import React from "react";
import {getNetworkInfoFromServer} from "./store/networkInfoRequest/networkInfoAction";
import {SignUp} from "@/pages/SignUp";
import {CategoryCoupons} from "@/pages/CategoryCoupons";
import {SignIn} from "@/pages/SignIn";


export const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getNetworkInfoFromServer());
    }, [dispatch]);


    return (
        <BrowserRouter>
            <Header/>
            <Breadcrumbs/>
            <FloatingButton/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/trends" element={<TrendCoupons/>}/>
                <Route path="/category/:id" element={<CategoryCoupons/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path="/partner/:partnerId" element={<Creator/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/register" element={<SignUp/>}/>
                <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/> {/* TODO: change*/}
                <Route path="*" element={<ErrorPage/>}/> {/* TODO: change*/}
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<SignIn/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};
