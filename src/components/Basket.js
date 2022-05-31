import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../actions";
//import { createStore } from 'redux';

export const Basket = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
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
    fetch("http://localhost:3000/basket")
      .then(res => res.json())
      .then(result => setItems(result))
  }, [delItem])

  const deleteItem = (item) => {
    fetch("http://localhost:3000/basket/" + item._id, {
  method: 'DELETE',
  // headers: {
  //        'Content-Type': 'application/json',
  //        'Access-Control-Allow-Origin': true
  // },
  //  body: JSON.stringify(item),
  //  credentials: "same-origin"

})
   .then(res => res)
   .then(data => console.log(data))
   setDeleteItem(item._id)
  }

    return(
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
      <th scope="col">Price</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  <tbody>

      {items.map((item, index) => 
      <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.title}</td>
      <td><img src={require('../images/' + item.images + '.png')} style={size} alt=""/></td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td><button type="button" class="btn btn-info" onClick={() => deleteItem(item) }>X</button></td>
    </tr>
      )}

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
</table>

: <h1 id="yourbasket">...is empty</h1>
}
<hi>{counter}</hi>
<button onClick={() => dispatch(increment(5))}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
{isLogged ? <h2>Helli</h2> : ""}
                </div>
            </div>
        </div>
    )
}