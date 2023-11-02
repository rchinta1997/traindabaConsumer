import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalState from "./Context/GlobalState";
import LoginPage from "./pages/Login/Login.component";
import HomePage from "./pages/Home/HomePage.component";
import { Routes, Route } from "react-router-dom";
import PNRInfo from "./pages/PNRInfo/PNRInfo.component";
import Navbar from "./pages/Navbar/Navbar.component";
import Footer from "./pages/Home/Footer.component";
import Restaurants from "./pages/PNRInfo/Restaurants.component";
import Cart from "./pages/Cart/Cart.component";
import Checkout from "./pages/CheckOut/Checkout.component";
import FinalConfirmation from "./pages/FinalConfirmation/FinalConfirmation.component";
import TrackOrder from "./pages/TrackOrder/TrackOrder.component";
import MyOrders from "./pages/MyOrders/MyOrders.component";
import Profile from "./pages/Profile/Profile.component";
import ChangePassword from "./pages/Profile/ChangePassword.component";
import Contact from "./pages/Contact/Contact.component";

import "./Assets/css/bootstrap.css";
import "./Assets/css/fontawesome-all.css";
import "./Assets/css/slick-slider.css";
import "./Assets/css/fancybox.css";
import "./Assets/css/smartmenus.css";
import "./Assets/css/plugin.css";
import "./Assets/css/style.css";
import "./Assets/css/color.css";
import "./Assets/css/responsive.css";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation.component";
import OrderStatus from "./pages/MyOrders/OrderStatus.component";
import PnrStaus from "./pages/RailTools/PNRSataus.Component";
import TrainRunningStatus from "./pages/RailTools/TrainRunningStatus.component";
import LiveStation from "./pages/RailTools/LiveStation.component";
import TrainSchedule from "./pages/RailTools/TrainSchedule.component";
//import "./webpack.config";

function App() {
    return (
        <GlobalState>
            <div className="App">
                <div id="header" className="fixed-top header-scrolled">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/PNRInfo" element={<PNRInfo />} />
                    <Route path="/RestaurantInfo" element={<Restaurants />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/CheckOut" element={<Checkout />} />
                    <Route path="/Pay" element={<FinalConfirmation />} />
                    <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
                    <Route path="/TrackOrder" element={<TrackOrder />} />
                    <Route path="/MyOrders" element={<MyOrders />} />
                    <Route path="/orderstatus" component={<OrderStatus />} />
                    <Route path="/pnrstatus" element={<PnrStaus />} />
                    <Route path="/trainrunningstatus" element={<TrainRunningStatus />} />
                    <Route path="/livestation" element={<LiveStation />} />
                    <Route path="/trainschedule" element={<TrainSchedule />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Contact/:type" element={<Contact />} />
                </Routes>
                <Footer></Footer>
            </div>
            <ToastContainer theme="dark" />
        </GlobalState>
    );
}


export default App;
