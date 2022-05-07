import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Banner} from "./components/Banner";
import {AboutUs} from "./components/AboutUs";
import {Product} from "./components/Product";
import {Subscribe} from "./components/Subscribe"
import {Testimonial} from "./components/Testimonial";
import {Footer} from "./components/Footer";
import {FooterBased} from "./components/FooterBased";

function App() {
  return (
    <div>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product.html" element={<Product/>}/>
        <Route path="about.html" element={<AboutUs />} />
      </Routes>
      {/* <Header/>
      <Banner/>
      <AboutUs/>
      <Product/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
      <FooterBased/> */}
      <FooterBased/>
    </div>
  );
}

export default App;
