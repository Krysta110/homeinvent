import React from 'react'
import add_button from './add.png'
import delete_button from './delete.png'

 class ItemListItem extends React.Component {

    
  
    render() {  
        console.log("props in item ListItem", this.props.item.product)
        let item = this.props.item
        let product = this.props.item.product
        return (
          <tr>
            {/* onClick={()=>this.handleAddToInventory()} */}
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{item.sale_price}</td>
            <td> 
              <img src={add_button} alt="add" style={{width: "15px", height: "15px"}} />
            * {item.onhand_qty} *
            <img src={delete_button} alt="delete" style={{width: "15px", height: "15px"}} />

            </td>
            <td>{item.comingin_qty}</td>

          </tr>
        )
      }
    }
export default ItemListItem






// const ItemListItem = (props) => {
//   console.log("props in item card: ", props.item.product)
//   let item = props.item
//   let product = props.item.product
//   return (
//     <tr>
      
//       <td>{product.name}</td>
//       <td>{product.sku}</td>
//       <td>{product.color}</td>
//       <td>{product.price}</td>
//       <td>{item.sale_price}</td>
//       <td>{item.onhand_qty}</td>
//       <td>{item.comingin_qty}</td>

//     </tr>
//   )
// }

// export default ItemListItem