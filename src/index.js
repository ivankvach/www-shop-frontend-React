import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./css/style.css";
import "./css/responsive.css";
import "./css/style.css.map";
//import "./css/style.scss";
import "./fonts/fontawesome-webfont.ttf";
import "./fonts/fontawesome-webfont.woff";
import "./fonts/fontawesome-webfont.woff2";
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );





// //Store => Global Sate


// //Action Increment

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

// //Reducer

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'ICREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;  
//   }
// };

// let store = createStore(counter);

// //Display

// store.subscribe(() => console.assert.toString(store.getState()))

// //Dispatch

// store.dispatch(increment());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
 </Provider>
);
registerServiceWorker();
