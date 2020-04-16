import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './productTable';
import './index.css';

import * as serviceWorker from './serviceWorker';


  const product = [{name:"veste", category:"clothes",price:"80"},{name:"phone",category:"electronics",price:"900"},{name:"desktop",category:"electronics",price:"2000"},{name:"pull",category:"clothes",price:"60"},{name:"tv",category:"electronics",price:"3500"}] 
 

ReactDOM.render(
  <React.StrictMode>
    <ProductTable product={product}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
