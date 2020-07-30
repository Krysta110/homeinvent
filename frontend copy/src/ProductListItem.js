import React from 'react'
// import add_button from './add.png'
// import delete_button from './delete.png'
// import AddToInventoryForm from './AddToInventoryForm'
import EditProductForm from './EditProductForm'

  class ProductListItem extends React.Component {

      state = {
        showEdit: false
        // editValue: " "
        // editSku: false,
        // editColor: false,
        // editPrice: false,
        // editOnHand: false
      }

  handleEditProduct = () => {
    // console.log("inside handleEditProduct", this.props.product.id)
    this.setState({
      showEdit: !this.state.showEdit
  })
}

// handleEditName = () => {
//   console.log("inside handleEditName", this.props.product.id)
//   this.handleEditProduct()
//   this.setState({
//     editValue: "name"
// })
// }

// handleEditQty = () => {
//   console.log("inside handleEditQty", this.props.product.id)
//   this.handleEditProduct()
//   this.setState({
//     editValue: "qty"
// })
// }
    
        render() {

          let item = this.props.product
          return (
            
          <tr>

            <td>{item.name}</td>
            <td>{item.sku}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td onClick={()=>this.handleEditProduct()}>{item.onhand_qty} </td>
            <td>
              {this.state.showEdit ? <EditProductForm product={this.props.product} updateProduct={this.props.updateProduct}/> : null }

            </td>
       
          </tr>
         
        )
    }
  }

export default ProductListItem