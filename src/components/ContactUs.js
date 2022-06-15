import logo from "../images/arrival-bg.png";
import {useState, useEffect} from "react";
import { Modal, Button, Form } from 'react-bootstrap'

export const ContactUs = () => {

//Set token

   const [token, setToken] = useState(localStorage.getItem("token"));
   console.log(token)
//Send and check StatusText from server and Access, and Set token to Local Storage

   const [items, setItems] = useState("");
   useEffect(() => {
     fetch("http://localhost:3000/products", {
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

    return(
         <div>
      {/* {items.length !== "Unauthorized" : setShow(true); } */}

     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>


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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>

     <section className="why_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form action="index.html">
                        <fieldset>
                           <input type="text" placeholder="Enter your full name" name="name" required />
                           <input type="email" placeholder="Enter your email address" name="email" required />
                           <input type="text" placeholder="Enter subject" name="subject" required />
                           <textarea placeholder="Enter your message" required></textarea>
                           <input type="submit" value="Submit" />
                        </fieldset>
                     </form>
                  </div>
               </div> 
            </div>
         </div>
      </section>
      <section className="arrival_section">
         <div className="container">
            <div className="box">
               <div className="arrival_bg_box">
                  <img src={logo} alt=""/>
               </div>
               <div className="row">
                  <div className="col-md-6 ml-auto">
                     <div className="heading_container remove_line_bt">
                        <h2>
                           #NewArrivals
                        </h2>
                     </div>
                     <p id="p_ContactUs">
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <a href="">
                     Shop Now
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </div>
    )
}