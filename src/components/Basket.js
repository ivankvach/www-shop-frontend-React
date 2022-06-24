import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, deleteItems } from "../actions";
import { Modal, Button, Form } from 'react-bootstrap'
// import { Modal, Button, Form } from 'react-bootstrap'

//import { createStore } from 'redux';

export const Basket = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

// //Set token

// const [token, setToken] = useState(localStorage.getItem("token"));
// console.log(token)
// //Send and check StatusText from server and Access, and Set token to Local Storage

// const [itemss, setItemss] = useState("");
// useEffect(() => {
//   fetch("http://localhost:3000/basket", {
//    method: 'GET',
//    headers: {                   
//       'Authorization': 'Bearer' + " " + token
//     }
//    })
//     .then(res => res)
//     .then(result => setItemss((result.statusText)))
// }, [token])
// localStorage.setItem('token', token)
// console.log(itemss)
// const [show, setShow] = useState(false);

// //Turns the modal window

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// useEffect(() => {
//   if (itemss === "Unauthorized") {
// handleShow()
//   } else {
//    handleClose();
//   }
// }, [itemss])

// //Get input values from login

// const [userName, setUserName] = useState({});

// const handleInputChange = (event) => {
// const target = event.target;
// const value = target.value;
// const name = target.name
// setUserName({
//    ...userName,
//    [name]: value});
// }

// console.log(userName)

// //Send login

// const handleSubmit = () => {
// console.log("Current State is:" + JSON.stringify(userName));
// alert("Current State is:" + JSON.stringify(userName))
// //event.preventDefault;
// fetch("http://localhost:3000/users/login", {
// method: 'POST',
// headers: {
//       'Content-Type': 'application/json'
//      // 'Access-Control-Allow-Origin': true
// },
// body: JSON.stringify(userName),
// credentials: "same-origin"

// })
// .then(res => res.json())
// .then(data => setToken(data.token))
// }

// console.log(token)



  //Store => Global Sate


//Action Increment

// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

//Reducer

// const counter = (state = [], action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return fetch("http://localhost:3000/basket")
//       .then(res => res.json())
//       .then(result => state = result)
//     case 'DECREMENT':
//       return state - 1;  
//   }
// };

// let store = createStore(counter);

//Display

// store.subscribe(() => console.log(store.getState()))

//Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());


  const size = {
    height: '50px',
    width: '50px'
  }
  const [items, setItems] = useState([]);
  const [delItem, setDeleteItem] = useState("")
  useEffect(() => {
   //fetch("http://localhost:3000/basket")
   fetch("http://localhost:3000/basket", {
   method: 'GET',
   headers: {                   
      'Authorization': localStorage.getItem("username")
    }
   })
      .then(res => res.json())
      .then(result => setItems(result))
  }, [counter])
  console.log(items)
  console.log(delItem)

  
  const deleteItem = (item) => {
    fetch("http://localhost:3000/basket/" + item._id, {
  method: 'DELETE',
})
   .then(res => res)
   .then(data => console.log(data))
   setDeleteItem(item._id)
   console.log(item._id)
   dispatch(deleteItems(item._id))
  }

const [price, setPrice] = useState()
useEffect(() => {
    const pricePrice = items.map((price) => {
    return 0 + parseInt(price.price)
    })
    const total = pricePrice.reduce((a, b) => a + b, 0)
    setPrice(total)
}, [items])
console.log(price)


//Filter inside of basket

const [items1, setItems1] = useState()
useEffect(() => {

//Array of titles

    const titleTitle = items.map((item) => {
      return item.title
    })
    console.log(titleTitle)

//Array of filtered titles

    const filtered = titleTitle.filter((item, index) => {
    
    return titleTitle.indexOf(item) === index;
    
    });
    console.log(filtered)

//Array of indexes of filtered titles

    let finalFiltered = [];
    for (let i = 0; i < items.length; i++) {
      finalFiltered.push(items.findIndex((item) => item.title === filtered[i]))
    }

//Array of indexes ( !==-1 ) of filtered titles

    const finalFiltered1 = finalFiltered.filter((item) => item !== -1)
    console.log(finalFiltered1)

//Final Array of objects

    let finalFinal = [];
    finalFiltered1.map((item) => {
      finalFinal.push(items[item]) 
    })
    
    console.log(finalFinal)
 return setItems1(finalFinal)
}, [items])

// let newArray = [];
// for (let i = 0; i < items.length; i++) {
//   const index = newArray.findIndex(item => _.isEqual(item, items[i]));

//   if (index !== -1) {
//     newArray[index] = items[i];
//   } else {
//     newArray.push(items[i])
//   }
// }
// console.log(newArray)

// const filterArray = (array, identify) => {
//   const matches = {};
//   return array.filter(item => {
//     const identity = identify(item);
//     const isExists = identity in matches;
//     if (!isExists) {
//       matches[identity] = true;
//       return true
//     }
//     return false;
//   });
// };
// console.log(filterArray([{"d":"q"}, {"d": "q"}, {"f": "q"}], 0))

const [countItems, setCountItems] = useState({})

useEffect(() => {
 const itemsNew = items.map((item) => item.title)
  const map = itemsNew.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) +1;
    return prev;
  }, {})
  console.log(map)
   setCountItems(map)  
}, [items])
console.log(countItems["Black shirt"])


//console.log(items.findIndex((element) => element.title === "Black shirt"))

const sendOrder = () => {
  alert(JSON.stringify(items))
  fetch("http://localhost:3000/basket", {
    method: 'DELETE'
  })
     .then(res => res)
     .then(data => console.log(data))
    //  setDeleteItem(item._id)
    //  console.log(item._id)
    dispatch(decrement([]))
}

    return(

<div>

        <div className="container">
            <div className="row">
                <div className="col-12">

               {items.length
               ? <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Images</th>
      <th scope="col">Description</th>
      <th scope="col">Count</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>

      {items1.map((item, index) =>
      <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.title}</td>
      <td><img src={require('../images/' + item.images + '.png')} style={size} alt=""/></td>
      <td>{item.description}</td>
      <td>{countItems[item.title]}</td>
      <td>{parseInt(item.price)}</td>
      <td><button type="button" class="btn btn-info" onClick={() => deleteItem(item) }>X</button></td>
    </tr>
      )}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Total:</td>
      <td>{price}</td>
      <td>USD</td>

    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Image</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Image</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Image</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
  <td><Button variant="primary" onClick={sendOrder}>Send order</Button></td>
</table>

: <h1 id="yourbasket">...is empty</h1>
}
{/* <h1>{counter}</h1> */}
{/* <button onClick={() => dispatch(increment(5))}>+</button>
<button onClick={() => dispatch(decrement())}>-</button> */}
{isLogged ? <h2>Helli</h2> : ""}
                </div>
            </div>
        </div>
        </div>
    )
}