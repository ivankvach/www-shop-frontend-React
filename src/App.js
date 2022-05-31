import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {AboutPage} from "./components/AboutPage";
import {ProductPage} from "./components/ProductPage";
import {BlogPage} from "./components/BlogPage";
import {ContactPage} from "./components/ContactPage";
import {TestimonialPage} from "./components/TestimonialPage";
import {BasketPage} from "./components/BasketPage";
import {FooterBased} from "./components/FooterBased";


function App() {
  return (
    <div>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product.html" element={<ProductPage/>}/>
        <Route path="about.html" element={<AboutPage />} />
        <Route path="testimonial.html" element={<TestimonialPage />} />
        <Route path="blog_list.html" element={<BlogPage />} />
        <Route path="contact.html" element={<ContactPage />} />
        <Route path="basket.html" element={<BasketPage/>} />
      </Routes>
      <FooterBased/>
    </div>
  );
}

export default App;
