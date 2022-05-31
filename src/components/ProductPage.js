import {Product} from "./Product";
import { HeadingComponents } from "./HeadingComponents";

export const ProductPage = () => {
    const Heading = "Product Grid";
    return(
        <>
        <HeadingComponents heading={Heading}/>
        <Product/>
        </>
    )
}