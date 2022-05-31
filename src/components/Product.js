import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p8 from "../images/p8.png";
import p9 from "../images/p9.png";
import p10 from "../images/p10.png";
import p11 from "../images/p11.png";
import p12 from "../images/p12.png";
import {Products} from "../components/products";
import {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../actions";



export const Product = () => {

   const counter = useSelector(state => state.counter);
   const dispatch = useDispatch();
   //const product = Products
   //console.log(product)
//    fetch("http://localhost:3000/products")
//  .then(res => res.json())
//  .then(data => console.log(data));
//    const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
// function MyComponent() {
//    const [error, setError] = useState(null);
//    const [isLoaded, setIsLoaded] = useState(false);
//    const [items, setItems] = useState([]);
 
//    // Note: the empty deps array [] means
//    // this useEffect will run once
//    // similar to componentDidMount()
//    useEffect(() => {
//      fetch("https://api.example.com/items")
//        .then(res => res.json())
//        .then(
//          (result) => {
//            setIsLoaded(true);
//            setItems(result.items);
//          },
//          // Note: it's important to handle errors here
//          // instead of a catch() block so that we don't swallow
//          // exceptions from actual bugs in components.
//          (error) => {
//            setIsLoaded(true);
//            setError(error);
//          }
//        )
//    }, [])
 
//    if (error) {
//      return <div>Error: {error.message}</div>;
//    } else if (!isLoaded) {
//      return <div>Loading...</div>;
//    } else {
//      return (
//        <ul>
//          {items.map(item => (
//            <li key={item.name}>
//              {item.name} {item.price}
//            </li>
//          ))}
//        </ul>
//      );
//    }
//  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(result => setItems(result))
  }, [])

  const sendToBasket = (item) => {
   //   console.log(axios.post('http://localhost:3000/basket', {title: "White shirt",
   //       description: "White",
   //       images: "p1",
   //       price: "60$"}))
   //   axios.post('http://localhost:3000/basket', {
   //    title: "White shirt",
   //    description: "White",
   //    images: "p1",
   //    price: "60$"
   //  })
   //  .then(function (response) {
   //    console.log(response);
   //  })
   //  .catch(function (error) {
   //    console.log(error);
   //  });
   // }
fetch("http://localhost:3000/basket", {
  method: 'POST',
  //mode: 'no-cors',
  headers: {
         'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': true
  },
  body: JSON.stringify(item),
   credentials: "same-origin"

})
   .then(res => res.json())
   .then(data => dispatch(increment(data)))
   
  }
    return(
        <div>
            <section className="product_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div className="row">


               {items.map((item) => 
                   <div className="col-sm-6 col-md-4 col-lg-3">
                   <div className="box">
                      <div className="option_container">
                         <div className="options">
                            <a href="" className="option1">
                            {item.title}
                            </a>
                            <a href="" onClick={() => sendToBasket(item)} className="option2">
                            Buy Now
                            </a>
                         </div>
                      </div>
                      <div className="img-box">
                         <img src={require('../images/' + item.images + '.png')} alt=""/>
                      </div>
                      <div className="detail-box">
                         <h5>
                           {item.title}
                         </h5>
                         <h6>
                            {item.price}
                         </h6>
                      </div>
                   </div>
                   <button onClick={() => sendToBasket(item)}>buy</button>
                </div>
               )}


               {/* <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Men's Shirt
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={require("../images/p1.png")} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $75
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p2} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $80
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p3} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $68
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p4} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $70
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p5} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $75
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p6} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $58
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p7} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $80
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p8} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p9} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p10} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p11} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={p12} alt=""/>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div> */}
            </div>
            <div className="btn-box">
               <a href="">
               View All products
               </a>
            </div>
         </div>
      </section>
        </div>
    )

}