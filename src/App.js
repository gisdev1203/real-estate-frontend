import React, { useId } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homefour from "./components/pages/Homefour";
import Chat from "./components/pages/Chat";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Retirement from "./components/pages/Agentarchive";
import Submitlisting from "./components/pages/Submitlisting";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import Pricing from "./components/pages/Pricing";
import Sell from "./components/pages/Sell";
import Rent from "./components/pages/Rent";

import Distress from "./components/pages/Distress";
import Planing from "./components/pages/Planing";
import Modification from "./components/pages/Modification";
import Management from "./components/pages/Management";
import Planner from "./components/pages/Planner";

import Property from "./components/pages/Property";
import Terms from "./components/pages/Terms";
import Estate from "./components/pages/Estate";
import Retire from "./components/pages/Retire";

import Mortgage from "./components/pages/Mortgage";
import Invest from "./components/pages/Invest";
import Loans from "./components/pages/Loans";

import Listing from "./components/pages/Listingmap";
import Contact from "./components/pages/Contact";
import ListingDetailsOne from "./components/pages/Listingdetailsone";
import "./index.css";
import PropertyListing from "./components/pages/PropertyListing";
import View from "./components/sections/view-all/View-All";

import AdminLogin from "./components/pages/AdminLogin";
import AdminPanel from "./components/pages/AdminPanel";
import AdminUser from "./components/pages/AdminUser";
import AdminUserCreate from "./components/pages/AdminUserCreate";
import AdminUserEdit from "./components/pages/AdminUserEdit";
import AdminCategory from "./components/pages/AdminCategory";
import AdminCategoryCreate from "./components/pages/AdminCategoryCreate";
import AdminCategoryEdit from "./components/pages/AdminCategoryEdit";
import AdminProperty from "./components/pages/AdminProperty";
import AdminPropertyCreate from "./components/pages/AdminPropertyCreate";
import AdminPropertyEdit from "./components/pages/AdminPropertyEdit";
import AdminPropertyDetail from "./components/pages/AdminPropertyDetail";
import AdminCurrency from "./components/pages/AdminCurrency";
import AdminCurrencyCreate from "./components/pages/AdminCurrencyCreate";
import AdminCurrencyEdit from "./components/pages/AdminCurrencyEdit";
import AdminFeature from "./components/pages/AdminFeature";
import AdminFeatureCreate from "./components/pages/AdminFeatureCreate";
import AdminFeatureEdit from "./components/pages/AdminFeatureEdit";
import AdminLocation from "./components/pages/AdminLocation";
import AdminLocationCreate from "./components/pages/AdminLocationCreate";
import AdminLocationEdit from "./components/pages/AdminLocationEdit";
import AdminNearbytype from "./components/pages/AdminNearbytype";
import AdminNearbytypeCreate from "./components/pages/AdminNearbytypeCreate";
import AdminNearbytypeEdit from "./components/pages/AdminNearbytypeEdit";
import AdminFaq from "./components/pages/AdminFaq";
import AdminFaqCreate from "./components/pages/AdminFaqCreate";
import AdminFaqEdit from "./components/pages/AdminFaqEdit";

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log('------> userInfo', userInfo);

  return (
    <div className="App">
      {userInfo && userInfo.isAdmin ? (
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<AdminPanel url="/admin" />} />
          <Route
            path="/admin/users"
            element={<AdminUser url="/admin/users" />}
          />
          <Route
            path="/admin/user/create"
            element={<AdminUserCreate url="/admin/users" />}
          />
          <Route
            path="/admin/user/:id"
            element={<AdminUserEdit url="/admin/users" />}
          />
          <Route
            path="/admin/categories"
            element={<AdminCategory url="/admin/categories" />}
          />
          <Route
            path="/admin/category/create"
            element={<AdminCategoryCreate url="/admin/categories" />}
          />
          <Route
            path="/admin/category/:id"
            element={<AdminCategoryEdit url="/admin/categories" />}
          />
          <Route
            path="/admin/properties"
            element={<AdminProperty url="/admin/properties" />}
          />
          <Route
            path="/admin/property/create"
            element={<AdminPropertyCreate url="/admin/properties" />}
          />
          <Route
            path="/admin/property/:id"
            element={<AdminPropertyEdit url="/admin/properties" />}
          />
          <Route
            path="/admin/property/:id/detail"
            element={<AdminPropertyDetail url="/admin/properties" />}
          />
          <Route
            path="/admin/currencies"
            element={<AdminCurrency url="/admin/currencies" />}
          />
          <Route
            path="/admin/currency/create"
            element={<AdminCurrencyCreate url="/admin/currencies" />}
          />
          <Route
            path="/admin/currency/:id"
            element={<AdminCurrencyEdit url="/admin/currencies" />}
          />
          <Route
            path="/admin/features"
            element={<AdminFeature url="/admin/features" />}
          />
          <Route
            path="/admin/feature/create"
            element={<AdminFeatureCreate url="/admin/features" />}
          />
          <Route
            path="/admin/feature/:id"
            element={<AdminFeatureEdit url="/admin/features" />}
          />
          <Route
            path="/admin/locations"
            element={<AdminLocation url="/admin/locations" />}
          />
          <Route
            path="/admin/location/create"
            element={<AdminLocationCreate url="/admin/locations" />}
          />
          <Route
            path="/admin/location/:id"
            element={<AdminLocationEdit url="/admin/locations" />}
          />
          <Route path="/admin/faqs" element={<AdminFaq url="/admin/faqs" />} />
          <Route
            path="/admin/faq/create"
            element={<AdminFaqCreate url="/admin/faqs" />}
          />
          <Route
            path="/admin/faq/:id"
            element={<AdminFaqEdit url="/admin/faqs" />}
          />
          <Route
            path="/admin/nearbytypes"
            element={<AdminNearbytype url="/admin/nearbytypes" />}
          />
          <Route
            path="/admin/nearbytype/create"
            element={<AdminNearbytypeCreate url="/admin/nearbytypes" />}
          />
          <Route
            path="/admin/nearbytype/:id"
            element={<AdminNearbytypeEdit url="/admin/nearbytypes" />}
          />
          <Route path="*" element={<div>Error 404 Page not found.</div>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Homefour />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/submit-listing" element={<Submitlisting />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent" element={<Retirement />} />
          <Route path="/services" element={<Services />} />
          <Route path="/buy" element={<Pricing />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/listing-details-v1/:id"
            element={<ListingDetailsOne />}
          />
          <Route path="/property/:type" element={<PropertyListing />} />
          <Route path="/sell/:type" element={<PropertyListing />} />
          <Route path="/rent/:type" element={<PropertyListing />} />
          <Route path="/view-all" element={<View />} />

          <Route path="/Distress" element={<Distress />} />
          <Route path="/Planing" element={<Planing />} />
          <Route path="/Modification" element={<Modification />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/Planner" element={<Planner />} />

          <Route path="/Property" element={<Property />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Estate" element={<Estate />} />
          <Route path="/Retire" element={<Retire />} />

          <Route path="/Mortgage" element={<Mortgage />} />
          <Route path="/Invest" element={<Invest />} />
          <Route path="/Loans" element={<Loans />} />
          <Route path="/listing-map" element={<Listing />} />
          <Route path="/contact" component={Contact} />
          <Route path="*" element={<div>Error 404 Page not found</div>} />
        </Routes>
      )}
    </div>
  );
};

export default App;
