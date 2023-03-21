import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../config/layout/DefaultLayout";
import AboutAuthor from "../pages/AboutAuthor";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Store from "../pages/Store";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route
          path="/about-author"
          element={<DefaultLayout component={AboutAuthor} />}
        />
        <Route path="/blog" element={<DefaultLayout component={Blog} />} />
        <Route
          path="/contact"
          element={<DefaultLayout component={Contact} />}
        />
        <Route path="/store" element={<DefaultLayout component={Store} />} />
        <Route
          path="/about-author"
          element={<DefaultLayout component={AboutAuthor} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
