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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
