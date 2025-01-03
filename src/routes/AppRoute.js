import React from "react";
import {
    BrowserRouter as Switch,
    Route,
    Router,
    BrowserRouter,
    Routes,
  } from "react-router-dom";import Homepage from "../pages/Homepage";
import Products from "../pages/Products";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
