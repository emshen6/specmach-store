import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FilteredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";
import AboutUs from "./Components/Aboutus/AboutUs";
import ProductSection from "./Components/ProductSection/ProductSection";
import NavigateButtons from "./Components/NavigateButtons/NavigateButtons";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Main/>}
          ></Route>

          <Route
            path="/contacts"
            element={<Contacts/>}
          ></Route>

          <Route
            path="/aboutus"
            element={<AboutUs/>}
          ></Route>

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts/>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct/>}
          ></Route>

          <Route
            path="/products"
            element={<div><NavigateButtons/><ProductSection/></div>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
