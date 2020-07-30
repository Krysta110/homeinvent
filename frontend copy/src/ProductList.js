
import React, {Component} from 'react'

import ProductListItem from "./ProductListItem"
import {Link} from 'react-router-dom'

import EditProductForm from './EditProductForm'



class ProductList extends Component{ 

  state = {
    showEdit: false,
    prod: " "
  }

  handleChange = (e) => {
    // debugger
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleProductID= (apple) => {
  console.log("handleProductID: ", apple)
  this.setState({
    showEdit: !this.state.showEdit,
    prod: apple
  })
}


// updateProduct = (item) =>
// this.setState({
//   prod: item
// })

render(){
  // console.log("props in product list ", this.props)
  return (
      <div>
        {localStorage.token
          ? <div>
            {this.state.showEdit ? <EditProductForm product={this.state.prod} updateProduct={this.props.updateProduct}/>
            : null }



        <h2 className="ui left aligned header"> All Products</h2>
        {/* <table className="ui celled striped padded table"> */}
        <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p>

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
                 {this.props.products.map(product => {
                 return (<ProductListItem product={product} key={product.id} handleProductID={this.handleProductID}/>)
                }) }
          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Inventory</h4> }
         
        
      </div>
    )
  }
}


export default ProductList









// import React from "react"
// import ProductListItem from "./ProductListItem"
// import {Link} from 'react-router-dom'



// const ProductList = (props) => {


//     // console.log("props in productlist ", props.products)
//     return (
//         <div>
//           {localStorage.token
//             ? <div>
//         <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p>

//         <h2 className="ui left aligned header"> All Products</h2>
//         {/* <table className="ui celled striped padded table"> */}
        // <table class="ui selectable celled table">

        //   <tbody>
        //     <tr>

        //       <th>
        //         <h4 className="ui left aligned header">Name</h4>
        //       </th>

        //       <th>
        //         <h4 className="ui left aligned header">SKU</h4>
        //       </th>

        //       <th>
        //         <h4 className="ui left aligned header">Color</h4>
        //       </th>

        //       <th>
        //         <h4 className="ui left aligned header">Price</h4>
        //       </th>

        //       <th>
        //         <h4 className="ui left aligned header">On Hand</h4>
        //       </th>
        //       <th> </th>
        //     </tr>
        //          {props.products.map(product => {
        //          return (<ProductListItem product={product} key={product.id} updateProduct={props.updateProduct}/>)
        //         }) }
        //   </tbody>
        // </table>
        

//         </div>
//         : <h4> Please Log In to see your Inventory</h4>
//          }
        
// </div>
// );
// };
  
    

// export default ProductList

