import React,{Component} from 'react';
import {Link, Route} from "react-router-dom";
import Product from "./Product.js";

class Products extends Component {

    render(){
        return(
            <div className="products">
                <p>All Products</p>
                <Link to='/products/1'>Bicycle</Link><br/>
                <Link to='/products/2'>TV</Link><br/>
                <Link to='/products/3'>Pencil</Link><br/>
            </div>
        )
    }
}

export default Products;