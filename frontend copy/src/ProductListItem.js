import React from 'react'
// import add_button from './add.png'
// import delete_button from './delete.png'
// import AddToInventoryForm from './AddToInventoryForm'
// import EditProductForm from './EditProductForm'

const ProductListItem = (props) => {
  // console.log("props in card: ", props)
  let item = props.product

    return (
          <tr onClick={()=>props.handleProductID(item)}>

            <td>{item.name}</td>
            <td>{item.sku}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td >{item.onhand_qty} </td>

            </tr>
            )
          }
    
    export default ProductListItem