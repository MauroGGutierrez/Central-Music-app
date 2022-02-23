import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import OrderHistory from './pages/OrderHistory'
import Wishlist from './pages/Wishlist'
import AccInformation from './pages/AccInformation'
import SecNotice from './pages/SecNotice'
import LocAndHours from './pages/LocAndHours'
import Rentals from './pages/Rentals'
import PrivacyNotice from './pages/PrivacyNotice'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout /> } />
          <Route path='/overview' element={ <Overview /> } />
          <Route path='/orderhistory' element={ <OrderHistory /> } />
          <Route path='/wishlist' element={ <Wishlist /> } />
          <Route path='/accountinformation' element={ <AccInformation /> } />
          <Route path='/securitynotice' element={ <SecNotice /> } />
          <Route path='/locationandhours' element={ <LocAndHours /> } />
          <Route path='/rentals' element={ <Rentals /> } />
          <Route path='/privacynotice' element={ <PrivacyNotice /> } />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;