import {Basket} from "./Basket";
import { HeadingComponents } from "./HeadingComponents";

export const BasketPage = () => {
    const Heading = "Your Basket"
    return(
        <>
        <HeadingComponents heading={Heading}/>
        <Basket/>
        </>
    )
}