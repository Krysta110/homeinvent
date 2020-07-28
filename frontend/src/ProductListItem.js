import React from 'react'
import add_button from './add.png'
import delete_button from './delete.png'



    const ProductListItem = (props) => {
        // console.log("props in card: ", props)

      // handleAddToInventory =() => {

      // }



        let item = props.product
        return (
          <tr>
            <td>
            <img src={add_button} style={{width: "15px", height: "15px"}}/>

            {item.name}
            </td>
            <td>{item.sku}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>

          </tr>
        )
      }

export default ProductListItem