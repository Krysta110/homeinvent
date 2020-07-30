import React from "react"
import ProductListItem from "./ProductListItem"
import {Link} from 'react-router-dom'



const ProductList = (props) => {

    // console.log("props in productlist ", props.products)
    return (
        <div>
          {localStorage.token
            ? <div>
        <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p>

        <h2 className="ui left aligned header"> All Products</h2>
        {/* <table className="ui celled striped padded table"> */}
        <table class="ui selectable celled table">

          <tbody>
            <tr>

              <th>
                <h4 className="ui left aligned header">Name</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">SKU</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">Color</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">Price</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">On Hand</h4>
              </th>
              <th> </th>
            </tr>
                 {props.products.map(product => {
                 return (<ProductListItem product={product} key={product.id} updateProduct={props.updateProduct}/>)
                }) }
          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Inventory</h4>
         }
        
</div>
);
};
  
    

export default ProductList

