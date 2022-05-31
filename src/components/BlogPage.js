import {AboutUs} from "./AboutUs";
import { HeadingComponents } from "./HeadingComponents";
 
export const BlogPage = () => {
     const Heading = "Blog";
    return(
         <>
         <HeadingComponents heading={Heading}/>
         <AboutUs/>
         </>
     )
 }