import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import OrderHistory from "./pages/OrderHistory";
import Wishlist from "./pages/Wishlist";
import AccInformation from "./pages/AccInformation";
import SecNotice from "./pages/SecNotice";
import LocAndHours from "./pages/LocAndHours";
import Rentals from "./pages/Rentals";
import PrivacyNotice from "./pages/PrivacyNotice";
import PageNotFound from "./pages/PageNotFound";
import Accessories from "./pages/Accessories";
import Guitars from "./pages/Guitars";
import Repairs from "./pages/Repairs";
import Lessons from "./pages/Lessons";
import Storage from "./pages/Storage";
import ShopCart from "./pages/ShopCart";
import MyUser from "./pages/MyUser";
import CardItems from "./pages/CardItems";
// import NavHeader from "./components/NavHeader";
import "normalize.css";

const App = () => {
  return (
    <>
      <Router>
        {/* <NavHeader /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/guitars" element={<Guitars />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/shopcart" element={<ShopCart />} />
          <Route path="/myuser" element={<MyUser />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/accountinformation" element={<AccInformation />} />
          <Route path="/securitynotice" element={<SecNotice />} />
          <Route path="/locationandhours" element={<LocAndHours />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/privacynotice" element={<PrivacyNotice />} />
          <Route path="/sectionproduct:id" element={<CardItems />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
