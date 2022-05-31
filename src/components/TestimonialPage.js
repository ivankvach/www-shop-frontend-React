import {Testimonial} from "./Testimonial";
import { HeadingComponents } from "./HeadingComponents";

export const TestimonialPage = () => {
    const Heading = "Testimonial";
    return(
        <>
        <HeadingComponents heading={Heading}/>
        <Testimonial/>
        </>
    )
}