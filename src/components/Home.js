import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {AboutUs} from "../components/AboutUs";
import {Product} from "../components/Product";
import {Subscribe} from "../components/Subscribe"
import {Testimonial} from "../components/Testimonial";
import {Footer} from "../components/Footer";

export const Home = () => {
    return(
        <div>
      <Banner/>
      <AboutUs/>
      <Product/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
        </div>
    )
}