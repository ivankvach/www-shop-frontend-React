import logo from "../images/logo.png";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment} from "../actions";


export const Header = () => {

   const counter = useSelector(state => state.counter);
   const dispatch = useDispatch();
   fetch("http://localhost:3000/basket")
   .then(res => res.json())
   .then(result => console.log(result))



   const [items, setItems] = useState([]);
   useEffect(() => {
    fetch("http://localhost:3000/basket")
      .then(res => res.json())
      .then(result => setItems(result))
  }, [])
//dispatch(increment(items))
    return(
        <div>
         <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="/"><img width="250" src={logo} alt="#" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                       <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label"/>Pages <span className="caret"></span></a>
                           <ul className="dropdown-menu">
                              <li><a href="about.html">About</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="blog_list.html">Blog</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="basket.html">{items.length}
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                           </svg>
                           </a>
                        </li>
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">{counter.length}
                           <i className="bi bi-bag-fill" aria-hidden="true">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                           </svg>
                           </i>
                           </button>
                        </form>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
        </div>
    )
} 