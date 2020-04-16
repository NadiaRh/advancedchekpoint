import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


export default function ProductTable (props) {
    return ( 
        <div> 
            <tr> <th> name </th> <th> price</th> <th> category </th></tr>
             {props.product.map (el => { return (
         <table>
             <tr>
            <td> {el.name}</td>
            <td> {el.price}</td>
            <td>{el.category}</td>
            
            
        </tr>
         </table>)}) }
         </div>
         
    )}
    ProductTable.propTypes= {
        name:PropTypes.string,
        price:PropTypes.number,
        category:PropTypes.string
    };