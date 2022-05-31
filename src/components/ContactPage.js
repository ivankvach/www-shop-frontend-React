import {ContactUs} from "./ContactUs";
import { HeadingComponents } from "./HeadingComponents";

export const ContactPage = () => {
    const Heading = "Contact Us";
    return(
        <>
        <HeadingComponents heading={Heading}/>
        <ContactUs/>
        </>
    )
}