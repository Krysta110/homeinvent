import React from 'react'
import add_button from './add.png'
// import delete_button from './delete.png'
// import AddToInventoryForm from './AddToInventoryForm'

  class ProductListItem extends React.Component {


      // handleAddToInventory = () => {

      // }
    
        render() {
          let item = this.props.product
          return (
        
          <tr>
            <td>
            {/* <img src={add_button} alt="add" style={{width: "15px", height: "15px"}} /> */}
            {/* onClick={()=>this.handleAddToInventory()} */}
            {item.name}
            </td>
            <td>{item.sku}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.onhand_qty}</td>



          </tr>

          
        )
    }
  }

export default ProductListItem