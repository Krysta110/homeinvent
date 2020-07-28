import React from 'react'


    const ItemListItem = (props) => {
        console.log("props in item card: ", props.item.product)
        let item = props.item
        let product = props.item.product
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{item.sale_price}</td>
            <td>{item.onhand_qty}</td>
            <td>{item.comingin_qty}</td>

          </tr>
        )
      }

export default ItemListItem

// t.integer "user_id"
// t.integer "product_id"
// t.integer "onhand_qty"
// t.integer "comingin_qty"
// t.integer "sale_price"