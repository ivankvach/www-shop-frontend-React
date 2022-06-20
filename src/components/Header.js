import logo from "../images/logo.png";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from "../actions";
import { Modal, Button, Form } from 'react-bootstrap'


export const Header = () => {
   const counter = useSelector(state => state.counter);
   const dispatch = useDispatch();

//Set token

const [token, setToken] = useState(localStorage.getItem("token"));
console.log(token)

//Send and check StatusText from server and Access, and Set token to Local Storage

const [items, setItems] = useState("");
useEffect(() => {
  fetch("http://localhost:3000/users", {
   method: 'GET',
   headers: {                   
      'Authorization': 'Bearer' + " " + token
    }
   })
    .then(res => res)
    .then(result => setItems((result.statusText)))
}, [token])
localStorage.setItem('token', token)
console.log(items)

//Check LogIn

const [logIn, setLogIn] = useState()
useEffect(() => {
if (items === "Unauthorized") {
  setLogIn(false)
} else {
  setLogIn(true)
}
}, [items])
console.log(logIn)

const [show, setShow] = useState(false);

//Turns the modal window

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
useEffect(() => {
  if (items === "Unauthorized") {
handleShow()
  } else {
   handleClose();
  }
}, [items])

//Get input values from login

const [userName, setUserName] = useState({});

const handleInputChange = (event) => {
const target = event.target;
const value = target.value;
const name = target.name
setUserName({
   ...userName,
   [name]: value});
   localStorage.setItem("username", userName.username)
}

console.log(userName)

//Send login

const handleSubmit = () => {
console.log("Current State is:" + JSON.stringify(userName));
alert("Current State is:" + JSON.stringify(userName))
//event.preventDefault;
fetch("http://localhost:3000/users/login", {
method: 'POST',
headers: {
      'Content-Type': 'application/json'
     // 'Access-Control-Allow-Origin': true
},
body: JSON.stringify(userName),
credentials: "same-origin"

})
.then(res => res.json())
.then(data => setToken(data.token))
}

console.log(token)

//Get items from author (usename)

useEffect(() => {
   //fetch("http://localhost:3000/basket")
   fetch("http://localhost:3000/basket", {
   method: 'GET',
   headers: {                   
      'Authorization': localStorage.getItem("username")
    }
   })
   .then(res => res.json())
   .then(result => dispatch(decrement(result)))
}, [token])

const logOut = () => {
   setToken("");
   handleClose();
}

//Turns the modal window of SignUp

const [showSign, setShowSign] = useState(false);
const handleCloseSign = () => setShowSign(false);
const handleShowSign = () => setShowSign(true);

const [signName, setSignName] = useState({});

const handleInputChangeSign = (event) => {
  const target = event.target;
  const value = target.value;
  const name = target.name
  setSignName({
     ...signName,
     [name]: value});
     //localStorage.setItem("username", userName.username)
  }

const handleSubmitSign = () => {
  console.log("Current State is:" + JSON.stringify(signName));
alert("Current State is:" + JSON.stringify(signName))
//event.preventDefault;
fetch("http://localhost:3000/users/signup", {
method: 'POST',
headers: {
      'Content-Type': 'application/json'
     // 'Access-Control-Allow-Origin': true
},
body: JSON.stringify(signName),
credentials: "same-origin"

})
.then(res => res.json())
.then(data => console.log(data))
}


    return(
        <div>

{/* //Modal Login */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="username"
                value={userName.username}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="your password"
                value={userName.password}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="secondary" onClick={logOut}>
            Log Out
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>

{/* Modal Sign in */}

       <Modal show={showSign} onHide={handleCloseSign}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitSign}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                name="firstname"
                type="firstname"
                placeholder="firstname"
                value={signName.firstname}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                name="lastname"
                type="lastname"
                placeholder="lastname"
                value={signName.lastname}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="username"
                value={signName.username}
                onChange={handleInputChangeSign}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="your password"
                value={signName.password}
                onChange={handleInputChangeSign}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSign}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitSign}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>



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
                           <a className="nav-link" href="blog_list.html">Chat</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="basket.html">{counter.length}
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                           </svg>
                           </a>
                        </li>
                        <li className="nav-item">
                        <Button variant="primary" onClick={handleShow}>
                              {logIn ?
                                <a>Log Out</a> :
                                <a>Log In</a>
                              } 
                        </Button>
                        </li>
                        <li className="nav-item">
                        <Button id="signup" variant="primary" onClick={handleShowSign}>
                              Sign Up
                        </Button>
                        </li>
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
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