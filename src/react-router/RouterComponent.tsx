import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/careers" element={<Careers />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default RouterComponent;
