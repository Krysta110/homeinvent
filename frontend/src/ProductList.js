import React from "react"
import ProductListItem from "./ProductListItem"
import {Link} from 'react-router-dom'



const ProductList = (props) => {

    console.log("props in productlist ", props)
    return (
        <div>
          {localStorage.token
            ? <div>
        <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p>

        <h2 className="ui center aligned header"> All Products</h2>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>

              <th>
                <h4 className="ui center aligned header">Name</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">SKU</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Color</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Price</h4>
              </th>
s
            </tr>
                 {props.products.map(product => {
                 return (<ProductListItem product={product} key={product.id}/>)
                }) }

    

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your inventory</h4>
         }
        
</div>
);
};
  
    

export default ProductList






// import React from "react"
// import ProductCard from "./ProductCard"

// function ProductList(props){
//     return(
//     <div>
       
//      {/* console.log("In Product List")
//     console.log(localStorage.token) */}
//     {   localStorage.token
//        ? props.products.map(product => {
//             return <ProductCard product={product} key={product.id}/>
//         })
//         : <h4> Please Log In to see your inventory</h4>
//        }
//     </div>
//     )
// }

// export default ProductList
