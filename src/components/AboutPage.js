import {AboutUs} from "./AboutUs";
import { HeadingComponents } from "./HeadingComponents";

export const AboutPage = () => {
    const Heading = "About Us";
   return(
        <>
        <HeadingComponents heading={Heading}/>
        <AboutUs/>
        </>
    )
}